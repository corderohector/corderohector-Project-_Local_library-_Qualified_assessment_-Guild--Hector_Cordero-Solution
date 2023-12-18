function findAuthorById(authors, id) {
  // using "find" to look for the id 
  const foundById = authors.find((author) => author.id === id);
  return foundById;
}

function findBookById(books, id) {
  // found will be null if the loop cannot find the id
  let found = null;
  //loop inside books array
    for (let i = 0; i < books.length; i+=1) {
      const book = books[i];
      //checking if the id of every element is equal to the one we are looking for
      if (book.id === id) found = book;
    }
  return found;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
