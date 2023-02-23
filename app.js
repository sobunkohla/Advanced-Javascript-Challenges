//Q1 show Rating 
function showRating(rating) {
    let newString = "";
   let realRating = Math.floor(rating);
     for (let i = 1; i <= realRating; i++) {
        newString+= "*";
        if (i !==  realRating ) {
            newString+= " ";
        }

       
}
if (rating-0.5 === realRating) {
   newString+= " .";
  }
return newString;
}

console.log(showRating(1.5))

//method 2
function showRating(rating) {
    let newString = "";
   let realRating = Math.floor(rating);
     for (let i = 1; i <= realRating; i++) {
        newString+= "*";
        if (i !==  realRating ) {
            newString+= " ";
        }

       
}
if (!Number.isInteger(rating)) {
   newString+= " .";
  }
return newString;
}

console.log(showRating(4.5))


//Q2 sort  by lowest to highest

function sortLowToHigh(array) {
  return array.sort((a,b) => a-b)
}


console.log(sortLowToHigh([1,5,0,10,110,233,2]))



//Q3 sort object by highest to lowest 

function sortHighToLow(array) {
  return array.sort((a,b) => b.price - a.price
  )
}


console.log(sortHighToLow([
  {id: 1, price: 50},
  {id: 2, price: 30},
  {id: 3, price: 60},
  {id: 4, price: 10}, ]))

//Q4 

async function  PostByUser(num) {
  let newRecord = [];
  const Promise = await fetch( "https://jsonplaceholder.typicode.com/posts");
  console.log(Promise.json());
  const Data = await Promise.json();
 console.log(Data);
  for (let i = 0; i < Data.length; i++) {
    if (Data[i].userId === num )  {
         newRecord.push(Data[i]);
    }
  }
return newRecord
}
console.log(PostByUser(4))


//Q5

//Q6

//Q7

//Q8

//Q9

//Q10

//Q11

//Q12

//Q13

//Q14

//Q15

//Q16

//Q17

//Q18

//Q19

//Q20
