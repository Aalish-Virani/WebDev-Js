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

let str1 = new String("Aalish")
let str2 = new String("Virani")

let str3 = new String(str1 + " " + str2)

console.log(str3);





// Objects

let deviceCode = Symbol("device1")

let laptop = {
    brand : "lenovo",
    processor : "i7",
    generation : 5,
    [deviceCode] : "device1",
    memory : {
        ram : "8 gb",
        ssd : "256 gb",
        hdd : false
    },
}

laptop.color = "black",

console.table([ [laptop.brand], [laptop["processor"]],[laptop[deviceCode]] , [laptop.memory.ssd],[laptop.memory.ssd], [laptop.color]])
console.log(Object.keys(laptop))
console.log(Object.values(laptop))
console.log(Object.entries(laptop))
