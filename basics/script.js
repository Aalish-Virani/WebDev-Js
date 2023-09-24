let str = ""
let strToNum = Number(str);
console.table([str, typeof strToNum, strToNum])

str = "Aalish"
strToNum = Number(str);

console.table([str, typeof strToNum, strToNum])

str = ""
let strToBool = Boolean(str);
console.table([str, typeof strToBool, strToBool])

str = "Aalish"
strToBool = Boolean(str);

console.table([str, typeof strToBool, strToBool])


let str2 = "Virani"

let str3 = {...str, ...str2}

console.log(str3);
