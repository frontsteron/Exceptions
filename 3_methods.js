function method1() {
   // Throw a standard Error object
   throw new Error('Something went wrong!');
 }
 
 function method2() {
   // Throw a custom exception object with a message and error code
   const exception = { message: "Custom exception", code: 123 };
   throw exception;
 }
 
 function method3() {
   // Throw a TypeError object
   throw new TypeError('Invalid type!');
 }
 
 function calculateDifference(arr1, arr2) {
   if (arr1.length !== arr2.length) {
     // Throw a RangeError object if arrays have different lengths
     throw new RangeError('Arrays are of different lengths!');
   }
 
   const diffArr = [];
   for (let i = 0; i < arr1.length; i++) {
     diffArr.push(arr1[i] - arr2[i]);
   }
 
   return diffArr;
 }
 
 // Example usage
 try {
   method1();
 } catch (error) {
   console.error(error);
 }
 
 try {
   method2();
 } catch (exception) {
   console.error(exception.message, exception.code);
 }
 
 try {
   method3();
 } catch (error) {
   console.error(error);
 }
 
 const arr1 = [1, 2, 3];
 const arr2 = [4, 5, 6];
 try {
   const diffArr = calculateDifference(arr1, arr2);
   console.log(diffArr);
 } catch (error) {
   console.error(error);
 } 