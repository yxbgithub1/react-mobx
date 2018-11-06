import React, { Component } from 'react'
//import { observer, inject } from 'mobx-react'

// //状态注入
// @inject('todo')

// //组件观察
// @observer
export class TodoList extends Component{
    render(){
        const { todos } = this.props;
        return (
            <ul>
                { todos.map((t,index)=>
                    <li key={index}>
                        姓名：{t.name}
                        年龄：{t.age}
                    </li>
                )}
            </ul>
        )
    }
}