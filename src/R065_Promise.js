import React,{Component} from 'react';

class R065_Promise extends Component{
    componentDidMount(){
        new Promise((resolve,reject) => {
            reject(Error("ErrorInfo"));
        })
        .then(result => console.log("then" + result))
        .catch(result => console.log("catch" + result))
    }

    render(){
        return(
            <h1>promise</h1>
        )
    }
    
}

export default R065_Promise;