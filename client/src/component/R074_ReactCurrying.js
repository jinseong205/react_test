import React, {Component} from 'react';

class R074_ReactCurrying extends Component{
 
    plustNumOrString(c ,d){
        return c + d;
    }

    plusFunc1(a){
        return function(b){
            return this.plustNumOrString(a,b)
        }.bind(this)
    }

    plusFunc2 = a => b => this.plustNumOrString(a,b)

    plusFunc(a){
        return this.plusFunc1(a)(200)
    }

    render(){
        return(
            <>
                <input type="button" value="NumberPlus"
                onClick={e => alert(this.plusFunc(100))}/>
                <input type="button" value="StringPlus"
                onClick={e => alert(this.plusFunc("react"))}/>
            </> 
        )
    }
}

export default R074_ReactCurrying;