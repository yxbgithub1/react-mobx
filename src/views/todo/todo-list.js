import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'


// @inject('todo') //传单个状态对象

//状态注入
@inject(store => ({                     //换行后，如果不跟(),会当做return;
    todos    : store.todo.todos,        //从状态集合中派生当前组件使用的指定状态
    todoCount: store.todo.todoCount,
    token    : store.login.token        //其他状态中派生的共享状态
}))
//组件观察
@observer
export class TodoList extends Component{
    render(){
        const {todos, todoCount, token} = this.props;

        //换行后，如果return后面不跟(),会当做return;
        return (
            <div>
                <div>
                    <label>登录状态</label>
                    <span>{ token }</span>
                </div>
                <div>
                    <label>总人数：</label>
                    <span> { todoCount }</span>
                </div>
                <ul>
                    { todos.map((t,index)=>
                        <li key={index}>
                            姓名：{t.name}
                            年龄：{t.age}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}