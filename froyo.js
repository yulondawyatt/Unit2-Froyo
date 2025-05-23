////TO DO:
//++++++++++++++++++++++++++++++++++++++++//
//  1. Prompt the user for froyo flavors **
//  2. Store user input. **
//  3. Parse user input into an array with .split() **
//  4. Push flavor yogurt and count into yogurtOrder{}

const userYogurtInput = prompt("Please enter your Froyo flavor order(s) separated by comma. Example provided.","vanilla,vanilla,chocolate,blueberry, watermelon,watermelon,watermelon");


const yogurtOrder = {};// new object with yogurt flavor and count


const yogurtArray = userYogurtInput.split(",");

for(let i = 0; yogurtArray.length; i++) {
  
  let currentFlavor = yogurtArray.shift();
  console.log(currentFlavor); // Trying to figure out how to check if yogurtArray is empty and push currentFlavor into yogurtArray
  

}


//console.log(yogurtArray);


// [0]: vanilla
// [1]: vanilla
// [2]: chocolate
// [3]: blueberry
// [4]: watermelon
// [5]: watermelon
// [6]: watermelon
// [7]: watermelon