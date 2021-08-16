import React, {component} from react;

class R023_PropsNode extends Component{
    rensder(){
        return(
            <div style = {{padding : "0px"}}>
                {this.props.children}
            </div>
        )   
    }
}

export default R023_PropsNode;