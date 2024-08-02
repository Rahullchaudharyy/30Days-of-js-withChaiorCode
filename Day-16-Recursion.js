function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }


  console.log(factorial(5)); 
  
  console.log(factorial(7)); 
  
  
  
  console.log(factorial(3)); 

  

  // Task 2 

  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
console.log(fibonacci(5)); 
    
 
console.log(fibonacci(7)); 
  
  
  
  console.log(fibonacci(10)); 
  

  // task 3 
  
  function maxInArray(arr) {
    if (arr.length === 1) return arr[0];
    const maxOfRest = maxInArray(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
  }
  
  console.log(maxInArray([1, 2, 3, 4])); 
  console.log(maxInArray([5, 3, 9, 2])); 
  console.log(maxInArray([7, 8, 6])); 
  
  // task 4
  
  function maxInArray(arr) {
      if (arr.length === 1) return arr[0];
    const maxOfRest = maxInArray(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}
  
console.log(maxInArray([1, 2, 3, 4])); 
console.log(maxInArray([5, 3, 9, 2])); 
console.log(maxInArray([7, 8, 6])); 

// task 4


function reverseString(str) {
    if (str === '') return '';
    return reverseString(str.slice(1)) + str[0];
  }
  
  console.log(reverseString('hello')); 
  console.log(reverseString('world')); 
  console.log(reverseString('recursion')); 
  

  // task 6 
  function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
  }
  
  console.log(isPalindrome('radar')); 
  console.log(isPalindrome('hello')); 
  console.log(isPalindrome('madam')); 
  

  // Task 7 

  function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearch(arr, target, mid + 1, right);
    return binarySearch(arr, target, left, mid - 1);
  }
  
  console.log(binarySearch([1, 2, 3, 4, 5], 3)); 
  console.log(binarySearch([1, 2, 3, 4, 5], 5)); 
  console.log(binarySearch([1, 2, 3, 4, 5], 6)); 
  


  // task 8 

  function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    const countInRest = countOccurrences(arr.slice(1), target);
    return (arr[0] === target ? 1 : 0) + countInRest;
  }
  
  console.log(countOccurrences([1, 2, 3, 1, 1], 1)); 
  console.log(countOccurrences([4, 5, 6, 7], 5)); 
  console.log(countOccurrences([1, 2, 3, 4], 9)); 

  // task 9 

  function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
  
  
  const tree = {
    value: 2,
    left: { value: 1, left: null, right: null },
    right: { value: 3, left: null, right: null }
  };
  
  inOrderTraversal(tree);

  
  // task 10 

  function treeDepth(node) {
    if (node === null) return 0;
    const leftDepth = treeDepth(node.left);
    const rightDepth = treeDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
  
  
  const treeDepthExample = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: { value: 4, left: null, right: null }, right: null }
  };
  
  console.log(treeDepth(treeDepthExample)); 
  
