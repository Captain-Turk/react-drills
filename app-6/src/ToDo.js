import React, {Component} from 'react'

class ToDo extends Component{
    // constructor(){
    //     super()

    //     this.state = {

    //     }
    // }


    render(){
        return(
        <p>{this.props.task}</p>

        )
    }
}

export default ToDo