const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const server = jsonServer.create()
const router = jsonServer.router('./data/users.json')
const cors = require('cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors({credentials: true, origin: true}));

const SECRET_WORD = 'SECRET1234'
const expiresIn = '1h'

const createToken = payload => jwt.sign(payload, SECRET_WORD, {expiresIn})
const verifyToken = token =>
  new Promise((resolve, reject) =>
    jwt.verify(token, SECRET_WORD, (err, decode) =>
      decode !== undefined ? resolve(decode) : reject(err)
    )
  )

const userdb = JSON.parse(fs.readFileSync('./data/users.json', 'UTF-8'))
const isAuth = ({email, password}) =>
  userdb.users.findIndex(user => user.email === email && user.password === password) !== -1

server.post('/auth/login', (req, res) => {
  const {email, password} = req.body
  if (isAuth({email, password}) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({status, message})
    return
  }
  const access_token = createToken({email, password})
  const indexUser = userdb.users.findIndex(user => user.email === email && user.password === password)
  const userId = userdb.users[indexUser].id
  res.status(200).json({access_token, userId})
})

server.use(/^(?!\/auth).*$/, async (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({status, message})
    return
  }
  try {
    await verifyToken(req.headers.authorization.split(' ')[1])
    next()
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({status, message})
  }
})

server.use(router)

server.listen(3000, () => {
  console.log('Run Auth API Server')
})
