var num = [4, 5, 6, 7, 8, 9, 10, 11, 12]
for (var i of num) {
    console.log(i);
}
for (var i in num) {
    console.log(i);
}
// map function
num.map((i) => { console.log(i); })

// for each
num.forEach((i)=>{
    console.log(i);
})

// filter
 var newarray = num.filter((el)=>{
   return el > 10    
})
console.log(newarray);