function findAccountById(accounts, id) {
  // using "find" to look for the id 
  const foundById = accounts.find((account) => account.id === id);
  return foundById;
}

function sortAccountsByLastName(accounts) {
  // using "sort" to order de array by last name
  const accountSortedByLastName = accounts.sort((nameA, nameB) => (nameA.name.last.toUpperCase() > nameB.name.last.toUpperCase() ? 1 : -1));
  return accountSortedByLastName;
}

function getAccountFullNames(accounts) {
  // using "map" to get a new string with first and last names
  const fullNames = accounts.map((account) => `${account.name.first} ${account.name.last}`);
  return fullNames
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
