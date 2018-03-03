# aws-lambda-dynamodb-stream


1. Enable Dynamodb table by choosing the different type of stream. 

  a. Keys only - only the key attributes of the modified item
  
  b. New image - the entire item, as it appears after it was modified
  
  c. Old image - the entire item, as it appeared before it was modified
  
  d. New and old images - both the new and the old images of the item
  

2. Go to the Table / Trigger Tab and select existing lambda(streamTriggered).
