import React, {Component} from 'react'
import ToDo from './ToDo'



class List extends Component{
    constructor(){
        super()

        this.state = {


        }

    }

    render(){
        let list = this.props.taskList.map((element,index) => {
                return <ToDo key ={index} task ={element} />})

        return (
            <div>{list}</div>
            
        )
            
    }

}


export default List


// function List(props){
//     let list = props.tasks.map((element,index) => {
//         return <ToDo key = {index} task ={element}/>})

//     return <div>{List}</div>

// }

// export default List
