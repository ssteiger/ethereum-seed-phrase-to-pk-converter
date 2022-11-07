const winston = require('winston')
const { format, transports } = winston

const logger = winston.createLogger({
  //defaultMeta: {},
  transports: [
    // - write all logs with level `error` and below to `error.log`
    // - write all logs with level `info` and below to `combined.log`
    new transports.Console({
      format: format.combine(
        format.splat(),
        format.json(),
        format.colorize(),
        format.simple()
        //format.errors({ stack: true })
      )
    })
  ]
})

export default logger
