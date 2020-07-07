// Your code here:

let fraseUno = " bottles of milk on the wall ";
let fraseDos = " bottles of milk ";
let fraseTres = "Take one down, pass it around."
let fraseCuatro = "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more";

for (let i = 99; i > 0; i--) {

    if (i > 1){
       console.log( i + fraseUno + i + fraseDos + fraseTres);
    } else{
       console.log( i + fraseUno.replace("bottles","bottle") + i + fraseDos.replace("bottles","bottle") + fraseTres +fraseCuatro);
    }

};

