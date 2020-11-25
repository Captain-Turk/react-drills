import React, {Component} from 'react'

class Image extends Component{
    // constructor(){
    //     super()

    //     this.state = {

    //     }
    // }



    render(){
        return(
            <div> 
                <img src={this.props.url}/>
                <div>Random Image</div>
            </div>



        )
    }
    
}

export default Image