/*
    JAVASCRIPT
*/

const { createApp } = Vue

createApp({
    data() {
        return {
            newText: '',
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
                    done: true
                },
                {
                    text: 'Task 4',
                    done: false
                },
                {
                    text: 'Task 5',
                    done: true
                }               
            ]
        }           
    }, 
    methods: {
        addTask() {
            this.todolist.push({text: this.newText, done: false});
            this.newText = '';       
        },
        removeTask(index) {
            this.todolist.splice(index, 1);
        }
    }
}).mount('#app')