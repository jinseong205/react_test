import React, {component} from 'react';
import { Component } from 'react';

class R009_Es6 extends Component{
    
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        var jsStr1 = 'javascript';
        var jsStr2 = '입니다. \n 다음줄 입니다';

        console.log(jsStr1 + ' 문자열 ' + jsStr2);

        var es6Str1 = 'ES6';
        var es6Str2 = '입니다.';
        
        console.log(`${es6Str1} 문자열 ${es6Str2}!!
    ____다음줄 입니다`);

        var longStr = "ES6에 추가된 String 함수들입니다.";
        console.log("startWith : "  + longStr.startsWith("ES6에 추가"));        
        console.log("endWith : " + longStr.endsWith("함수들입니다.") );        
        console.log("inclues : "  + longStr.includes("추가된 String"));
    }

    render(){
        return(
            <h2>[This is es6 string]</h2>
        );
    }
}

export default R009_Es6;