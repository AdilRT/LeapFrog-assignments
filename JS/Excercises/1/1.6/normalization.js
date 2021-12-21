var input = {
    '1': {
      id: 1,
      name: 'John',
      children: [
        { id: 2, name: 'Sally' },
        { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
      ]
    },
    '5': {
      id: 5,
      name: 'Mike',
      children: [{ id: 6, name: 'Peter' }]
    }
  };
let output = {};

function normalize(element) {
        output[element["id"]] = element;
        if(element["children"]) {
            let child_array = [];
            element["children"].forEach((val) => {
                child_array.push(val.id);
                element["children"] = child_array;
                //Recursive:again check for existence of children's children 
                normalize(val);
            });
        }
};
Object.values(input).forEach(element  => normalize(element));
console.log(output);
