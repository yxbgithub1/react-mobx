import './style.scss'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import {
    TodoForm
} from '../../components'

import { TodoList } from './index'
//console.log(TodoList)

//状态注入
@inject('todo')
//组件观察
@observer
export class Todo extends Component{

    constructor(props){
        super(props);
        // const { todo } = this.props;
        // console.log(todo);
        this.state = {
            todos:[{
                name:'1',
                age:1
            }]
        }
    }

    onTodoChange(t){
        this.props.todo.addTodo(t);

        //console.log(this.props.todo)
        //alert(1);

        // var _todos = this.state.todos;
        // _todos.push(t);
        // this.setState({
        //     todos:_todos
        // })
    }

    render(){
        const { todo } = this.props;
        return(
            <div className="todo">

                <TodoForm todo={ todo } />
                
                <TodoList />
            </div>
        )
    }
}