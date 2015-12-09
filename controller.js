(function () {
    'use strict';

    angular
        .module('toDoApp', [])
        .controller('controller', controller);

    controller.$inject = ['$scope'];

    function controller($scope) {
        var todoList = this;

        todoList.todos = [
          { text: 'Lorem ipsum dolor sit amet', done: true, editing: false },
          { text: 'consectetuer adipiscing elit', done: false, editing: false },
          { text: 'Aenean commodo ligula eget dolor', done: true, editing: false },
          { text: 'Aenean massa', done: true, editing: false },
          { text: 'ultricies nec', done: false, editing: false }];

        todoList.addTodo = function () {
            todoList.todos.push({ text: todoList.todoText, done: false, editing: false });
            todoList.todoText = '';
        };

        todoList.deleteTodo = function (index) {
            todoList.todos.splice(index, 1);
        };

        todoList.countDone = function () {
            var count = 0;
            angular.forEach(todoList.todos, function (todo) {
                count += todo.done ? 1 : 0;
            });
            return count;
        };

        todoList.doneEditing = function () {
        };

        todoList.clearAll = function () {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function (todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
        }
    }
})();
