var inspect = require('eyes').inspector();
var awssum = require('awssum');
var amazon = awssum.load('amazon/amazon');
var sesService = awssum.load('amazon/ses');

var env = process.env;
var accessKeyId = process.env.ACCESS_KEY_ID;
var secretAccessKey = process.env.SECRET_ACCESS_KEY;
var awsAccountId = process.env.AWS_ACCOUNT_ID;

var ses = new sesService(accessKeyId, secretAccessKey, awsAccountId, amazon.US_EAST_1);

console.log( 'Region :', ses.region() );
console.log( 'EndPoint :',  ses.host() );
console.log( 'AccessKeyId :', ses.accessKeyId() );
// console.log( 'SecretAccessKey :', ses.secretAccessKey() );
console.log( 'AwsAccountId :', ses.awsAccountId() );

ses.GetSendStatistics(function(err, data) {
    console.log("\ngetting send statistics - expecting success");
    inspect(err, 'Error');
    inspect(data, 'Data');
});
