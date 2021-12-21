

function pattern( numAsterisk){
    for(var i=1;i<=numAsterisk;i++){
        let row = "";
        for(var j=i;j<=numAsterisk;j++){
            row+="*";
        }
        console.log(row);
    
    }
}

pattern(6);