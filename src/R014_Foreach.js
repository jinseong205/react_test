import React, {Component} from 'react';

class R014_Foreach extends Component{

    componentDidMount(){
        var ForArr = [3,2,8,8];
        var ForNewArr = [];

        ForArr.forEach((result) => {
            ForNewArr.push(result);
        })
        
        console.log("ForNewArr : [" +  ForNewArr + "]");
    }

    render(){
        return(<h2>[This for Each]</h2>)
    }
}

export default R014_Foreach;