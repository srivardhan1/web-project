module.exports={
web_port:process.env.PORT ||4000,
mongo_connection_string:process.env.MONGO_CONNECTION_STRING || '',
session_secret:process.env.SESSION_SECRET ||'srivardhan'
}