
// Task 2 - Step 5 (part 1): Import datejs at the very top outside the function
require('datejs');

// Step 1: Create combineUsers function using a rest argument (...args)
function combineUsers(...args) {
  
  // Step 2: Initialize the Return Object
  const combinedObject = {
    users: []
  };

  // Step 3: Loop through args to isolate each internal array
  for (let i = 0; i < args.length; i++) {
    const currentArray = args[i];
    
    // Step 4: Merge Arrays using the spread operator (...)
    combinedObject.users = [...combinedObject.users, ...currentArray];
  }

  // Step 5 (part 2): Add merge_date attribute formatted as M/d/yyyy using datejs
  // datejs extends the native Date prototype with the .toString() format method
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

// Export the function so Jest can find it and test it
module.exports = combineUsers;

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
