const winston = require('winston');
const CloudWatchTransport = require('winston-aws-cloudwatch');

var NODE_ENV = process.env.NODE_ENV || 'dev_param_3008';

//====================
const logger = winston.createLogger({
  transports: [
    new CloudWatchTransport({
      logGroupName: 'my-node-logs',
      logStreamName: NODE_ENV,
      createLogGroup: true,
      createLogStream: true,
      submissionInterval: 2000,
      submissionRetryCount: 1,
      batchSize: 20,
      awsConfig: {
        //accessKeyId: 'asd'
        //secretAccessKey: 'asdfe',
        //region: 'us-east-1'
        accessKeyId: process.env.acckey,
        secretAccessKey: process.env.seckey,
        //region: 'us-east-1'
        region: process.env.regname 
      },
      formatLog: item =>
        `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`
    })
  ]
})
//================

//if (NODE_ENV != 'development') logger.add(CloudWatchTransport, config);

logger.level = process.env.LOG_LEVEL || "silly";

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;
