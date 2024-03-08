const Expense = require('../model/expense');

exports.getExpenses = (req, res, next) =>{
    Expense.findAll()
     .then((expenses) =>{
        res.json(expenses);
     })
     .catch(err => console.log(err));
}

exports.postExpense = (req, res, next) =>{
    const amount =req.body.amount;
    const description = req.body.description
    const category = req.body.category;
    Expense.create({
        amount: amount,
        description: description,
        category: category
    })
    .then((expense) =>{
         res.json(expense)
    })
    .catch(err => console.log(err));
}

exports.deleteExpense =(req, res, next) =>{
    const id = req.params.expenseId;
    Expense.findByPk(id)
     .then(expense =>{
        return expense.destroy();
     })
     .then(result =>{
        console.log('1 Expense Destroyed')
        res.json(result);
     })
     .catch(err => console.log(err));
}