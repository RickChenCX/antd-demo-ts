import React,{Component} from "react";
import { RouteComponentProps} from "react-router-dom";


interface State {
    component: any
}
interface Prop extends RouteComponentProps{

}
export default function asyncComponent(importComponent:any) {
    
    class AsyncComponent extends Component<Prop,State> {
        constructor(props:any) {
            super(props)
            this.state={component:null}
        }
        async componentDidMount() {
            const { default: component } = await importComponent();

            this.setState({
                component: component
            });
        }
        render() {
            const C = this.state.component;
      
            return C ? <C {...this.props} /> : null;
        }
    }
    return AsyncComponent
}