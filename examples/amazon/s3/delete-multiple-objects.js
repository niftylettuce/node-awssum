var inspect = require('eyes').inspector();
var awssum = require('awssum');
var amazon = awssum.load('amazon/amazon');
var s3Service = awssum.load('amazon/s3');

var env = process.env;
var accessKeyId = process.env.ACCESS_KEY_ID;
var secretAccessKey = process.env.SECRET_ACCESS_KEY;
var awsAccountId = process.env.AWS_ACCOUNT_ID;

var s3 = new s3Service(accessKeyId, secretAccessKey, awsAccountId, amazon.US_EAST_1);

console.log( 'Region :', s3.region() );
console.log( 'EndPoint :',  s3.host() );
console.log( 'AccessKeyId :', s3.accessKeyId() );
// console.log( 'SecretAccessKey :', s3.secretAccessKey() );
console.log( 'AwsAccountId :', s3.awsAccountId() );

var options = {
    BucketName : 'pie-18',
    Objects : [
        'nothing-here.txt',
        { ObjectName : 'another-missing-file.txt' },
    ]
};

s3.DeleteMultipleObjects(options, function(err, data) {
    console.log("\ndeleting multiple objects from pie-18 - expecting success");
    inspect(err, 'Error');
    inspect(data, 'Data');
});
