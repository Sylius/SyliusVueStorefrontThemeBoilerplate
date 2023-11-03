// const { call } = require('supertest');
const crypto = require('crypto')
const session = require('express-session');
require('dotenv').config()

// Function to encrypt a string using a hash
function encryptString(text, hash) {
  text = text.replace('Bearer ','').trim()
  const cipher = crypto.createCipher('aes-256-cbc', hash);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Function to decrypt a string using a hash
function decryptString(text, hash) {
  text = text.replace('Bearer ', '').trim()
  const decipher = crypto.createDecipher('aes-256-cbc', hash);
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
// Function to generate a random string (hash)
function generateRandomString(length) {
  return crypto.randomBytes(length).toString('hex');
}

module.exports = {
  integrationsFactory: (tokenHash) => ({
    sylius: {
      location: '@vue-storefront/integration-sylius-api/server',
      configuration: {
        apiUrl: process.env.SYLIUS_API_URL
      },
      extensions: (baseExtensions) => [
        ...baseExtensions,
        {
          name: 'bearer-token',
          extendApp: ({app}) => {
            const tokenHash2 = generateRandomString(16)
            app.use(session({
              secret: 'some-secret',
              resave: false,
              saveUnitialized: true
            }))
            app.use((req, res, next) => {
              if (!req.session.tokenHash) {
                req.session.tokenHash = tokenHash2;
              } else {
                console.log(`here token hash is ${req.session.tokenHash}`)
              }
              next();
            });
          },
          hooks: (req, res) => {
            return {
              beforeCall: ({callName,args}) => {
                console.log(`before call ${callName}`)
                console.log(`args`,args)
                console.log(`tokenHash`,tokenHash)
                try {
                  console.log(`tokenHash from session`, req.session.tokenHash)
                } catch {
                  console.log(`no tokenHash in session`)
                }
                // @todo Cleanup mess with authorization + some security
                if(req['headers']['authorization']) {
                  args.push({
                    headers: {
                      Authorization: `Bearer ${decryptString(req['headers']['authorization'],req.session.tokenHash??tokenHash)}`
                    }
                  })
                }
                console.log(`args upated`,args)
                return args
              },
              afterCall: ({callName, response}) => {
                if(callName === 'authenticate') {
                  return {
                    token: encryptString(response.token, req.session.tokenHash??tokenHash),
                    customer: response.customer
                  }
                }
                return response
            }
            }
          }
        }
      ]
    },
  })
};
