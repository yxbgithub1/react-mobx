import { Component } from 'react'
import { observable, action, computed } from 'mobx'

class Todo extends Component{

    @observable todos = [{
        name:'1',
        age:1
    }]

    @computed get todoCount(){
        return this.todos.length
    }

    @action addTodo(t){
        this.todos.push(t)
    }

    @action remove(index){
        delete this.todos[index];
    }
}

export default new Todo();