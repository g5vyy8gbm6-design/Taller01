//eliminar elementos duplicados 
let array = [1, 2, 3, 4, 5, 1, 2, 3];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]    
