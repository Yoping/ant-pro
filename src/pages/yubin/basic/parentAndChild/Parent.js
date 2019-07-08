import React, {Component} from "react";
import Child from "./Child";
import {Button} from "antd";

export default class Parent extends Component {
  child;//定义一个子控件的引用承接对象
  render() {
    return (
      <div style={{width: 200, height: 200, backgroundColor: "#689F38"}}>
        <Child onRef={this.onRef} parentMethod={this.parentMethod}/>
        <Button onClick={this.callChildMethod}>call child</Button>
      </div>
    )
  }

  /**
   * 这个方法是将子控件的引用传递过来，可以随意取名
   */
  onRef = (ref) => {
    this.child = ref;
  }

  /**
   * 调用子控件的方法
   */
  callChildMethod = () => {
    this.child.childMethod();
  }

  parentMethod = () => {
    alert("parent");
  }

}
