const originalArray = [1, 2, 3, 4, 5];

const mutatedArray = 
originalArray.map((element, index)=> {
    return element * index;
});

console.log("New Array:", mutatedArray); 

