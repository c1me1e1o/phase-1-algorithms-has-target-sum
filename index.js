function hasTargetSum(array, target) {
  let answer = []
  for( i = 0; i < array.length ; i++){
    for( j = i+1; j<array.length; j++){
      if(array[i]+array[j]===target){
        answer.push(array[i], array[j])
        return true
}
    }
  }
  return false
}

  // Write your algorithm here



/* 
  Write the Big O time complexity of your function here

the first method is the brute force method and the Big-O notation of this solution would be O(*2) for time complexity and O(1) for space complexity.


*/

/* 
  Add your pseudocode here
*/



/*
  Add written explanation of your solution here

1. Write a function called hasTargetSum that receives two arguments:
2. an array of integers
3. a target integer
4. The function should return true if any pair of numbers in the array adds up to the target number.

  
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
