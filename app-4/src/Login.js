import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()

        this.state ={
            username:'',
            password:''

        }

    }

    handleUsernameChange(e){
        this.setState({
            username: e.target.value            
        })
    }

    handlePasswordChange(e){
        this.setState({
           password: e.target.value
        })
    }

    handleLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }



    render(){
        return(
            <div>
                <input onChange={e => this.handleUsernameChange(e)} type ='text'></input>
                <input onChange={ e=> this.handlePasswordChange(e)} type='text' ></input>
                <button onClick = {() => this.handleLogin()}>Login</button>
            </div>

        )
    }
}

export default Login