
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
          price: 2999,
          selected: true
      },
      {
          itemName: "py course",
          price: 999,
          selected: false
      },
      {
          itemName: "mobile dev course",
          price: 5999,
          selected: true
      },
      {
          itemName: "data science course",
          price: 12999,
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


