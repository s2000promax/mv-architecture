const express = require('express');
const path = require('path');
const userController = require('./domain/users/html-controller.js');

const PORT = 5001;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

app.get('/users', userController.getAll);
app.post('/users/create', userController.create);
app.delete('/users/remove', userController.removeById);
app.listen(PORT, () => console.log(`Server has been started on PORT = ${PORT}`));
