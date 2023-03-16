/*
    JAVASCRIPT
*/

const { createApp } = Vue

createApp({
    data() {
        return {
            newText: '',
            error: false,
            todolist: [
                {
                    text: 'Task 1',
                    done: false
                },
                {
                    text: 'Task 2',
                    done: false
                },
                {
                    text: 'Task 3',
                    done: false
                },
                {
                    text: 'Task 4',
                    done: false
                },
                {
                    text: 'Task 5',
                    done: false
                }               
            ]
        }           
    }, 
    methods: {
        addTask() {
            if (this.newText.length >= 5) {
                this.todolist.push({text: this.newText, done: false});
                this.newText = ''; 
                this.error = false;
            } else {
                this.error = true;
            }      
        },
        removeTask(index) {
            this.todolist.splice(index, 1);
        },
        clickedOrNotClicked(todo) {
            if (todo.done == false) {
                todo.done = true;
            } else {
                todo.done = false;
            }
        }
    }
}).mount('#app')