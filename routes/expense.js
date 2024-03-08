const express = require('express');

const expenseController = require('../controllers/expenses');

const router = express.Router();

router.get('/get-expenses',expenseController.getExpenses)

router.post('/add-expense',expenseController.postExpense)

router.delete('/delete-expense/:expenseId',expenseController.deleteExpense)

module.exports = router;