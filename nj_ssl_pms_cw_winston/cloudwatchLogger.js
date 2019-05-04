const winston = require('winston');
const CloudWatchTransport = require('winston-aws-cloudwatch');

//var NODE_ENV = process.env.NODE_ENV || 'winstondev';


const logger = winston.createLogger({
  transports: [
    new CloudWatchTransport({
      logGroupName: 'fgnodejsloggroup',
      logStreamName: 'winsdevqa',
      createLogGroup: true,
      createLogStream: true,
      submissionInterval: 2000,
      submissionRetryCount: 1,
      batchSize: 20,
      awsConfig: {
        accessKeyId: process.env.acckey,
        secretAccessKey: process.env.seckey,
        region: 'us-east-1'
      },
      formatLog: item =>
        `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`
    })
  ]
});


logger.level = process.env.LOG_LEVEL || "silly";

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;
