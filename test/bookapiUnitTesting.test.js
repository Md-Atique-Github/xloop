const  { getBook, addBook } = require('../readingList');
/*test('Return a Empty List', ()=>{
    // Arrange
    const bookList = [];
    //Act
    const list = getBook();
    //Assert
    expect(list).toEqual(bookList)
}) */

/*3 - Given that I have an empty list, when I add additional books to the list 
I expect the numberRead to return the total number of books in my list.*/

test('Read Additional Books In List' , ()=>{
    //Arrange
/*const bookDetails = {
    title : "Book Name",
    author : "Author",
    page : 500,
    year: 1999,
}*/

  //Act
 const readDate = "21 March 2023";
 const rating = 3;
 const ixpected = 2;


 const bookDetails = {
    book1:{ title:"prey" , author:"jenny" , page: 230 , year:2000},
    book2:{ title:"alculus" , author:"Howord Anton" , page: 600 , year:2012}
 }
  const bookinfor = {
    book1_intro:{readDate: "21 March 2030" , rating: 3},
    book2_intro:{readDate: "21 March 2030" , rating: 4}
}
  addBook(bookDetails.book1,bookinfor.book1_intro);
  addBook(bookDetails.book2,bookinfor.book2_intro)

  const result = readingList.length;
    // Assert
    expect(ixpected).toBe(result)
})