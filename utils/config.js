const dotenv = require('dotenv')

dotenv.config({ silent: true })

const {
    PORT = 3000,
    APP_ID,
    SERVER_URL
} = process.env

const defaults = {
    APP_ID: null,
    SERVER_URL: null
}

function verifyEnv(defaultEnv, currentEnv) {
    Object.keys(defaultEnv).forEach((key) => {
        if (!currentEnv[key]) {
            throw new Error(
                `Please enter a custom ${key} in .env on the root directory`,
            )
        }
    })
}

verifyEnv(defaults, process.env)

module.exports = {
    _verifyEnv: verifyEnv,
    PORT,
    APP_ID,
    SERVER_URL
}