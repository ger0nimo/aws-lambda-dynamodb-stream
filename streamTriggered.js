'use strict';

module.exports.streamTriggered = (event, context, callback) => {
  var item = event.Records[0].dynamodb;
  console.log("current item----" + JSON.stringify(item));
  callback(null, { message: 'Dynamodb item was modified :'+ item , event });
};




