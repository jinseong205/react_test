import React, {Component} from 'react';

class R059_FetchGet extends Component{
    componentDidMount = async() =>{
        console.log(1);
        const response = await fetch('http://date.jsontest.com/')
        const body = await response.json();
        console.log(2);
        console.log(body.date);
        alert(body.date);

    }

    render(){
        return(
            <h1>fetch get</h1>
        )
    }

}

export default R059_FetchGet;