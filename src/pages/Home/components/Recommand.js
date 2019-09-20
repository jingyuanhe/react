import React,{PureComponent} from 'react';
import {RecommendWrapper,RecommendItem} from '../style'
import {connect} from 'react-redux'
class Recommand extends PureComponent{
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