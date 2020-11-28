import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super()
    
        this.state = {
            userInput:''

        }

        this.addNewTask = this.addNewTask.bind(this)
    
    }

    userInputHandler(event){
        this.setState({
            userInput: event.target.value
        })
    }

   

    addNewTask(){ 
        this.props.addTask(this.state.userInput);     
        this.setState({
            userInput : ''
        })
    }

        
    

    render(){
        return(
            <div>
                <input placeHolder = 'Enter New Task'
                       value = {this.state.userInput}
                       onChange = {e => this.userInputHandler(e)}/>
                <button onClick = {()=>this.addNewTask()}>Add</button>
            </div>
        )
        
    }


}

export default NewTask