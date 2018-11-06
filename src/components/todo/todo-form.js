import React, { Component } from 'react'


export class TodoForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:'',
            age:''
        }
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]:value
        });
    }

    //新增按钮
    onSubmit(e){ 
        e.preventDefault()

        //验证不为空
        if(!Object.values(this.state).every(item => item)) return false;

        const { todo }= this.props;
        todo.addTodo(this.state);
    }

    render(){
        return (
            <form className="form" onSubmit={ this.onSubmit.bind(this) }>
                <div>
                    <label>姓名：</label>
                    <input type="text" name="name" onChange={ this.onInputChange } placeholder="请输入姓名" />
                </div>
                <div>
                    <label>年龄：</label>
                    <input type="text" name="age" onChange={ this.onInputChange } placeholder="请输入年龄" />
                </div>
                <input type="submit" value="新增" />
            </form>
        )
    }
}