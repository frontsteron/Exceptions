function getUserFloat() {
   while (true) {
     let input = parseFloat(window.prompt('Please enter a float:'));
     if (!isNaN(input)) {
       return input;
     }
     alert('Invalid input. Please enter a valid float.');
   }
 }