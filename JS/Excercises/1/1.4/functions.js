var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc) { 
    let newArray=[];

    for(let i = 0; i< collection.length;i++){
        newArray.push(tranFunc(collection[i]))
    }
    return newArray;
 }

 var output = transform(numbers, function(num) {
    return num * 2;
});

console.log(output);
