// Define object here 💖
const goodreadsInfo = {
    currentlyReading: [
      {
        title: "One Fish Two Fish",
        author: "Dr. Seuss"
      },
    ],
    wantToRead: [
      {
        title: "Green Eggs and Ham",
        author: "Dr. Seuss"
      }
    ]
  }
  
  // Define addBooks() function here 💖
  const addNewBooks= (books, ...additionalBookObjects)=>{
    return [...books, ...additionalBookObjects];
  }
  
  goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading, 
  {
    title: "Oh The Places I Will Go",
    author: "Dr. Seuss"
  });
  
  // Define showGoodreadsInfo() function here 💖
  const showGoodreadsInfo = (info) =>{
    currently = info.currentlyReading;
    wanting = info.wantToRead;
  
    //for loop to print reading list
    console.log("Currently Reading: ");
    for (book of currently){
      console.log(`${book.title} by ${book.author}`);
    }
    console.log();
    
    console.log("Want to Read: ");
    for (book of wanting){
      console.log(`${book.title} by ${book.author}`);
    }
  }
  
  showGoodreadsInfo(goodreadsInfo);