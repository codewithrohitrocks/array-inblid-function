var str = " rohit is web developer,rohit is in pvpit" 
var str1 = str.split(",")
console.log(str1);

var str2 = str.concat(" rohit is very good person")
console.log(str2);

var str3 =  str2.includes("Rohit")
console.log(str3);

var str4 = str2.search("web")
console.log(str4);

var str5 = str.replace("rohit","ajay")
console.log(str5);
document.querySelector('h1').innerHTML = str

var str6 = str.trim()
console.log(str6);