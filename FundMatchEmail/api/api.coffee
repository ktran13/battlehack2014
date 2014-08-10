log = require '../util/log'

exports.apiget = (req,res) ->
	log.i 'apiget'
	res.render 'page'

exports.webhookcallback = (req,res) ->
	log.i 'webhookcallback'
	res.render 'page'
exports.webhookcallbackfake = (req,res) ->
	log.i 'webhookcallbackfake'
	res.render 'page'
