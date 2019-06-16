import React from 'react';
import { Button } from 'antd';
import '../asset/less/App.less';
// import { withRouter} from 'react-router-dom'
import { RouteComponentProps} from "react-router-dom";
import {Demo} from "../reduxs/store"

interface PageProps extends RouteComponentProps{
    name:Demo,
    handelName: (id:string) => void
}
interface State {
  name:string
}
class App extends  React.Component <PageProps,State>{
  constructor(props:PageProps){
    super(props)
    this.state={name:""}
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Button type="primary" 
          onClick={e =>{
            this.props.history.push("/news")
          }}>Button</Button>
          <div 
          ref={e =>{
              if(!e) return
              e.innerHTML = this.props.name.name
          }}
          ></div>
          <Button onClick={ e => {
            this.setState({
              name:this.props.name.name
            })
            this.props.handelName("mars" + Math.random())
            
          }}>换一个名字</Button>
      </div>
    );
  }
}

export default App;