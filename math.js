function add(a ,b){
     return a + b;

}
function sub(a,b){
     return a - b;
}
// module.exports ={
//      add,
//      sub

// } // i used objects over bcz the second call of sub will overwrite the result of add , so to determine the exact call and answers i used an object
 

// module.exports = add;
//  module.exports = sub;

module.exports = {
     add,
     sub,
     mul
}

//module.exports can be used only for once bu exports.add & exports.sub can be used again and again

function mul(a,b){
     return a * b;
}
// exports.mul = (a,b) => a * b;