const app = require('./app')
const configs = require('./utils/config')

const port = configs.PORT

app.listen(port, 'localhost', (err) => {
    console.log(err || `Running node app on port: ${port}`)
})
