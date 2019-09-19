import React,{Component} from 'react';
import {RecommendWrapper,RecommendItem} from '../style'
import {connect} from 'react-redux'
class Recommand extends Component{
    render(){
        return (
            <RecommendWrapper>
                {
                    this.props.commandList.map((item)=>(
                        <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
                    ))
                }
                
            </RecommendWrapper>
        )
    }
}
const mapStateToProps=(state)=>({
    commandList:state.getIn(['home','recommendList'])
})
export default connect(mapStateToProps,null)(Recommand)