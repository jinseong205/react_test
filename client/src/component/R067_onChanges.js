import React, {Component} from 'react';

class R067_onChanges extends Component{

    change = (e)=>{
      var val = e.target.value;
      console.log('param :' + val);
    }
    render(){
        return(
            <>
                <input type="text" onChange={this.change}></input>
                <select onChange={this.change}>
                    <option value = "react">react</option>
                    <option value = "200">200</option>
                </select>
            </>
        )
    }

}

export default R067_onChanges;