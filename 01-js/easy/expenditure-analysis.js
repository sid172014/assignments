/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const object = [];  
  for(let i=0;i<transactions.length;i++){
    let index = object.findIndex((element) => {return transactions[i].category === element.category});
    if(index > -1){
      object[index].totalSpent = object[index].totalSpent + transactions[i].price;
    }else{
      const newObject = {
        category : transactions[i].category,
        totalSpent : transactions[i].price
      }
      object.push(newObject);
    }
  }
  return object;
};

module.exports = calculateTotalSpentByCategory;
