import React,{Component} from "react";
import {Button} from "antd";
export default class Child extends Component{
  componentDidMount() {
    if(this.props.onRef!==null){
      /**
       * 将自身的引用传递给父控件
       */
      this.props.onRef(this);
    }
  }

  render() {
    return(
      <div style={{width:100,height:100,backgroundColor:"#ABCDEF"}}>
        子控件
        <Button onClick={this.callParentMethod}>call parent</Button>
      </div>
    )
  }

  childMethod=()=>{
    alert("childMethod");
  }

  callParentMethod=()=>{
    if(this.props.parentMethod!==null){
      /**
       * 调用父控件的方法
       */
      this.props.parentMethod();
    }
  }
}
