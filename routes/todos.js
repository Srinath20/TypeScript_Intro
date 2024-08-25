"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/*import express from 'express';
const router = express.Router(); */
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    return res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    return res.status(201).json({ message: 'Added todo', todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: 'Updated todo ', todos: todos });
    }
    return res.status(404).json({ message: 'Could not find the todo with mentioned id' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
    return res.status(200).json({ message: 'Deleted the todo successfully' });
});
exports.default = router;
