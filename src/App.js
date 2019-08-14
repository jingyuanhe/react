import React, { Component } from 'react';
import store from './store'
import { Input,Button ,List} from 'antd';
import 'antd/dist/antd.css';
class AddName extends Component {
  constructor(props){
    super(props);
    this.state=store.getState();
    store.subscribe(()=>{
     this.handleStorechange();
    })
  }
  handleStorechange=()=>{
    this.setState(store.getState());
  }
  handleInputchange=(e)=>{
   // console.log(e.target.value)
    const action={
      type:'change_input_value',
      value:e.target.value
    }
    store.dispatch(action);
  }
  handleSubmit=()=>{
    const action={
      type:'add_todo',
      item:this.state.value
    }
    store.dispatch(action);
  }
//渲染界面
  render() {
    return(
      <div>
        <div>
        <Input value={this.state.value} onChange={this.handleInputchange} size="default" placeholder="todo list" style={{width:200,marginRight:'20px'}}></Input>
        <Button type="primary" onClick={this.handleSubmit}>提交</Button>
        </div>
        <div>
        <List
      size="small"
      style={{marginTop:'10px'}}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={this.state.list}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
        </div>
        
      </div>
      
    )
  }
}

export default AddName;
