/*var aws = require('aws-sdk');
var ddb = new aws.DynamoDB({apiVersion: '2012-10-08'});

exports.handler = async (event, context) => {
    console.log(event);

    let date = new Date();

    const tableName = process.env.TABLE_NAME;
    const region = process.env.REGION;
    const defaultAvi = 'https://YOUR/DEFAULT/IMAGE';
    
    console.log("table=" + tableName + " -- region=" + region);

    aws.config.update({region: region});

    // If the required parameters are present, proceed
    if (event.request.userAttributes.sub) {

        // -- Write data to DDB
        let ddbParams = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                '__typename': {S: 'User'},
                'picture': {S: defaultAvi},
                'username': {S: event.userName},
                'name': {S: event.request.userAttributes.name},
                'skillLevel': {N: '0'},
                'email': {S: event.request.userAttributes.email},
                'createdAt': {S: date.toISOString()},
            },
            TableName: tableName
        };

        // Call DynamoDB
        try {
            await ddb.putItem(ddbParams).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DDB or SQS");
        context.done(null, event);
    }
};*/

const 
    aws = require('aws-sdk'),
    uuidv4 = require('uuid/v4');

const ddb = new aws.DynamoDB({apiVersion: '2012-10-08'});

exports.handler = function(event, context, callback) {
    var d = new Date();
    var uuidUser = uuidv4();

    var paramUsuarios = {
        TableName: 'User-4gn3omv2nfhmhn6x6a4hlejsmq-mdenv',
        Item: {
            "name": {"S": event.request.userAttributes.name},
            "darkMode": false
        }
    }

    ddb.putItem(paramUsuarios, function(err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Exito", data);
        }
    })
}