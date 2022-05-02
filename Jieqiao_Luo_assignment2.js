
//question 1
//part 1
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },

];

function doubleArray(array) {
    result=array.slice();
    for (let i=0; i<result.length; i++ ){
        result[i].quantity=result[i].quantity*2;
        result[i].price=result[i].price*2; }
    return result   

} 

console.log(doubleArray(itemsObject))

//part 2
let newarray =itemsObject.filter(itm => itm.quantity>2 && itm.price>300)
console.log(newarray)


//part 3
let total = itemsObject.reduce(function (previousValue, currentValue){
    return previousValue + currentValue.price*currentValue.quantity
},0);
console.log(total)

//question 2

const string =" Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

console.log(string.trim().split(/[ -]+/).join(' ').toLocaleLowerCase())
