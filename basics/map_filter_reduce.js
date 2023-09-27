
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
  ]
  
  myCoding.forEach( (item) => {
    
    console.log(item.languageName);
  } )
  
  

  


  // library database
  
  let books = [
      { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
      { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
      { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
      { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
      { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
      { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
      { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
      { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
      { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    ];


    let userBooks = books.filter( (book) => book.genre === 'History')
    
    console.log("\n\n genre = history")
    console.table(userBooks);
  
  
    userBooks = books.filter( (book) => { 
      return book.publish >= 1995 && book.genre === "History"
  })
  
  console.log("\n\n publish > 1995 && genre = history")
  console.table(userBooks);
  
  



  
  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  let newNums = myNumers.map( (num) => { return num + 10})
  
  console.table([myNumers, newNums]);
  


  newNums = myNumers.map((num) => num * 10 )
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)
  
  console.table([myNumers, newNums]);
  



  
  // ecomerce database
  
  const shoppingCart = [
      {
          itemName: "js course",
          price: 1000,
          selected: true
      },
      {
          itemName: "py course",
          price: 500,
          selected: false
      },
      {
          itemName: "mobile dev course",
          price: 5000,
          selected: true
      },
      {
          itemName: "data science course",
          price: 2000,
          selected: false
      },
  ]
  
  let serviceCharges = 49;

  const selected = shoppingCart.filter( (item) => item.selected==true)

  const priceToPay = shoppingCart   .filter( (item) => item.selected == true)
                                    .reduce((acc, item) => acc + item.price, serviceCharges)
  
  console.log(selected);

  console.log(`Price To Pay : ${priceToPay}`);
  console.log(`Service Charges : ${serviceCharges}`);




  console.log("\n\n\n");





//  forEach  :  perform operations on array values

shoppingCart .forEach((course) => console.log(course.price) )

//  forEach  :  does not return values

// const discounted_price = shoppingCart .forEach((course) => course.price*0.9 )



//  Map :   return values to new array

const discounted_price = shoppingCart.map((course) => course.price * 0.9 )



// Reduce   :   return number i.e value after operation

const discounted_4_courses = discounted_price.reduce( (acc,price) => acc+price , 0) 



// Filter   :   return objects according to filter

let priceFilter = shoppingCart.filter( (course) => course.price > 1000 )


// doesnt work on array of object
// console.log(`\n price over 1000 : ${priceFilter}`)

console.log(priceFilter)

console.log(`\n discounted price for courses : ${discounted_price}`)                                            

console.log(`\n discounted price for selecting all 4 courses : ${discounted_4_courses}`)
