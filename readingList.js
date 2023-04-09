let readingList = []

exports.getBook = ()=>{
    return readingList;
}

//exports.addBook = (bookDetails,readDate,rating) =>{
    //readingList.push({...bookDetails,readDate,rating})

exports.numRead = ()=>{
    return readingList.length
}
}