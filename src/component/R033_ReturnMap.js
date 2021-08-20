import React,{Component} from 'react';

class R033_ReturnMap extends Component{
    render(){
        const elementArr = [
            <li>react</li>
            ,<li>200</li>
            ,<li>Array Map</li>
        ]

        return(
            <ul>
                {elementArr.map((arrayVal) => arrayVal)}
            </ul>
        )
    }
}

export default R033_ReturnMap;