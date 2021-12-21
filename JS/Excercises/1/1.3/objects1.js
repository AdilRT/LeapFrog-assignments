
var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]



function searchByName(array,name){
    for(i=0;i<array.length;i++){
        if(array[i].name.toLowerCase() === name.toLowerCase()){
            return array[i];
        }

    }
    return 'not found';


};

function searchByKey(array,key,name){
    for(i=0;i<array.length;i++){
        if(array[i][key].toLowerCase() === name.toLowerCase()){
            return array[i];
        }

    }
    return 'not found';
}

// console.log(searchByName(fruits,'apple'));

console.log(searchByKey(fruits, 'name', 'banana'));