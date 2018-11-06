import { Component } from 'react'
import { observable, action } from 'mobx'

class Login extends Component{
    
    @observable token = 123456

    @action login = () => this.token = 123
}

export default new Login();

