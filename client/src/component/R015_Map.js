import React, {Component} from 'react';

class R015_Map extends Component{
    
    componentDidMount(){
        var MapArr = [3,2,8,8];
        let MapNewArr = MapArr.map(x => x)
        console.log("1. MapNewArr : [" + MapNewArr+ "]");

        let MapMultiArr = MapArr.map(x=> x*2)
        console.log("2. MapMultiArr : [" + MapMultiArr+ "]");

        var objArr = [{key:'react', value:'200'},
                      {key:'리액트', value:'TwoHundred'}];
        
        let mapObjArr = objArr.map((obj, index) =>{
            console.log((index+3) +".obj : " + JSON.stringify(obj))
            var Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        });
      
        console.log("5. MapObjArr :" + JSON.stringify(mapObjArr))
    }

    render(){
        return(
            <h2>[This is Map]</h2>
        )
    }

}

export default R015_Map;