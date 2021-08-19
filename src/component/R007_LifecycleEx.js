import React,{Component} from 'react'

class R007_LifecycleEx extends Component{
    
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerovedStateFromProps Call : ' + props.prop_value);
        return{tmp_state:props.prop_value};
    }

    constructor(props){
        super(props);
        this.state ={};
        console.log('1. constructor call');
    }
    
    componentDidMount(){
        console.log('4. componenetDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state)
    }

    render(){
        console.log('3. render call')
        return(
            <h2>[This is constructor function]</h2>
        )
    }
}

export default R007_LifecycleEx;
