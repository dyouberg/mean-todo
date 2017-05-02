var Todo = require('./models/todo');

// Reusable FETCH function to return all todos in JSON format
function getTodos(res) {
    Todo.find(function (err, todos) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos in JSON format
    });
};

module.exports = function (app) {
    // CRUD api ---------------------------------------------------------------------
    
    // [C]reate - create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {
        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            // We just created a new Todo
            // Now let's return the updated todo list
            getTodos(res);
        });
    });
    
    // [R]ead - get all todos
    app.get('/api/todos', function (req, res) {
        getTodos(res);
    });

    // [R]ead - get one todo
    app.get('/api/todos/:todo_id', function (req, res) {
        Todo.findById(req.params.todo_id, function(err, todo) {
            res.json(todo);
        });
    });

    // [U]pdate - Update a selected todo
    app.put('/api/todos/:todo_id', function (req, res) {
        Todo.update({ _id: req.params.todo_id }, { description: req.body.description, last_updated: new Date() }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            // We just updated a Todo
            // Now let's return the updated todo list
            getTodos(res);
        });
    });

    // [D]elete - delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            // We just deleted a Todo
            // Now let's return the updated todo list
            getTodos(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
