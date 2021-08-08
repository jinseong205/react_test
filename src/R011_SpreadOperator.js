    import React, {Component} from 'react';

class R011_SpreadOperator extends Component{
  
    constructor(props){
      super(props);
      this.state = {};
    }   
    
    componentDidMount(){
        var varArr1 = ['num1','num2'];
        var varArr2 = ['num3','num4'];
        var sumVarArr = [varArr1[0], varArr1[1], varArr2[0], varArr2[1]];
        console.log('1. sumVarArr ' +  sumVarArr);
        
        var varObj1 = {key1 : 'val1', key2 :'val2'};
        var varObj2 = {key3 : 'val1', key4 :'val2'};
        var sumVarObj  = Object.assign({},varObj1, varObj2);
        console.log('2. sumVarObj : ' + JSON.stringify(sumVarObj));
    }

    render(){
        return(<h2>[This is R011_SpreadOperator]</h2>);
    }
}

export default R011_SpreadOperator;