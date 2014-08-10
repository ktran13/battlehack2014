syslog = require 'node-syslog'
syslog.init "Fundmatch", syslog.LOG_PID | syslog.LOG_ODELAY, syslog.LOG_LOCAL3
syslog.log syslog.LOG_INFO, "Node Syslog Module output " + new Date()

exports.e = (message) ->
  syslog.log syslog.LOG_ERROR, message
  console.log "ERROR: "+message

exports.i = (message) ->
  syslog.log syslog.LOG_INFO, message
  console.log "INFO: " + message

exports.d = (message) ->
  syslog.log syslog.LOG_DEBUG, message

exports.w = (message) ->
  syslog.log syslog.LOG_WARN, message
  console.log "WARN: "+message
