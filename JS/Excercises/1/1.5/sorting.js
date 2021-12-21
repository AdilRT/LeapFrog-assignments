var arr = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Mary",
  },
  {
    id: 3,
    name: "Andrew",
  },
];


function sortBy(array, key) {
    let tempArray=array.slice();
    tempArray.sort(function(a,b){
      if(array.key== isNaN){
        if(a[key].toLowerCase()<b[key].toLowerCase())return -1;
        else if(a[key].toLowerCase()>b[key].toLowerCase())return 1;
        return 0;
      }
      else{

        if(a[key]<b[key])return -1;
        else if(a[key]>b[key])return 1;
        return 0;
      }
      
    })
    return tempArray;
}


var sorted = sortBy(arr, 'name');
console.log(sorted);
console.log(arr);