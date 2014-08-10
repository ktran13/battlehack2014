api = require './api/api'
log = require './util/log'
express = require 'express'
http = require 'http'
path = require 'path'
socket_io = require 'socket.io'
moment = require 'moment-timezone'
fs = require 'fs'
locals = require './conf/locals'
npid = require 'npid'
https = require 'https'

ContextIO = require 'contextio'
ctxioClient = new ContextIO.Client {
    key: 'u0368sc0',
    secret: 'YkC7aVkKfBqsr8Pg'
  }

try
  pid = npid.create('/var/run/fundmatchnode.pid')
  pid.removeOnExit()
catch err
  console.log(err)
  process.exit(1)

log.i 'calling accounts'
ctxioClient.accounts().get {limit:15}, (err,response) ->
  log.i 'accounts callback'
  if err 
    log.e 'accounts error'
    throw err
  log.i JSON.stringify response.body
  accountjson = response.body
ctxioClient.accounts('53e6977a7dfe681c1feee87e').webhooks {
  callback_url: 'http://fundmatch.org/webhookcallback',
  failure_notif_url: 'http://fundmatch.org/webhookcallback',
  }, ->
  api.webhookcallback 
 
log.i 'called accounts'

app = express()

port = 8088

app.set 'port', process.env.PORT || port
app.set 'views', __dirname + '/views'
app.set('view options', { debug: true })
app.set 'view engine', 'jade'
app.use (req, res, next) ->
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()

#app.use app.router
app.use express.static (path.join __dirname, 'public')
app.use '/pdf', express.static ('tmp')

app.locals.pretty = true

app.get '/api', api.apiget 
app.post '/webhookcallback', api.webhookcallback 
app.get '/webhookcallback', api.webhookcallbackfake 

log.i 'Starting node server as http'
httpserver = http.createServer app

server = httpserver.listen (app.get 'port'), '0.0.0.0', () ->
  log.i "Express server listening on port #{app.get 'port'}"

moment.tz.add
    "zones":
        "EST5EDT": [
            "-5 US E%sT"
        ]
    "rules":
        "US": [
            "1918 1919 2 0 8 2 0 1 D",
            "1918 1919 9 0 8 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1967 2006 9 0 8 2 0 0 S",
            "1967 1973 3 0 8 2 0 1 D",
            "1974 1974 0 6 7 2 0 1 D",
            "1975 1975 1 23 7 2 0 1 D",
            "1976 1986 3 0 8 2 0 1 D",
            "1987 2006 3 1 0 2 0 1 D",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ]
    "links": {}

