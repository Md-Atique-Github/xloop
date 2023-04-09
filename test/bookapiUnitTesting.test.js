const  { getBook, numRead ,addBooks} = require('../readingList');

// Written BY Muhammad Atique

/*Given that I visit the site, when I first start, I expect my list to be empty.*/

test('Return a Empty List', ()=>{
    // Arrange
    const bookList = [];
    //Act
    const list = getBook();
    //Assert
    expect(list).toEqual(bookList)
}) 
// Written BY Muhammad Atique

/*3 - Given that I have an empty list, when I add additional books to the list 
I expect the numberRead to return the total number of books in my list.*/

test('Read Additional Books In List' , ()=>{
 
    //Arrange
    const bookDetails = {
      book1:{ title:"prey" , author:"jenny" , page: 230 , year:2000},
      book2:{ title:"alculus" , author:"Howord Anton" , page: 600 , year:2012}
   }
    const bookinfor = {
      book1_intro:{readDate: "21 March 2030" , rating: 3},
      book2_intro:{readDate: "21 March 2030" , rating: 4}
  }
    addBooks(bookDetails.book1,bookinfor.book1_intro);
    addBooks(bookDetails.book2,bookinfor.book2_intro)
    const result = 2;

  //Act
 const axpected = numRead();

    // Assert
    expect(axpected).toBe(result)
})

// Written BY Muhammad Atique

/* 5 - Given that I have an empty list, when I add a new book
 I expect getBooks() to return a list of books that includes the book I added.*/

 test('when I add a new book I expect getbooks() to return list of book', ()=>{
  //Arrange
const expectedbook = [{author: "jenny", bookinfor: {rating: 3, readDate: "21 March 2030"}, page: 230, title: "prey", year: 2000}, {author: "Howord Anton", bookinfor: {rating: 4, readDate: "21 March 2030"}, page: 600, title: "alculus", 
year: 2012}, {author: " Zeeshan ul Hassan Usmani", bookinfor: "Mar 21 , 2023", lenght: 1000, title: "justojoo ka safr", year: 1999}];
  //Act
const book =  {title:'justojoo ka safr',author:' Zeeshan ul Hassan Usmani' ,lenght: 1000,year:1999}

addBooks(book, 'Mar 21 , 2023', 3 )
const recordedBook = getBook();
  //Assert
 expect(expectedbook).toEqual(recordedBook)
 })
