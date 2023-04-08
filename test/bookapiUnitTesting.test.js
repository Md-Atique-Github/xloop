const  { getBook } = require('../readingList');
test('Return a Empty List', ()=>{
    // Arrange
    const bookList = [];
    //Act
    const list = getBook();
    //Assert
    expect(list).toEqual(bookList)
})