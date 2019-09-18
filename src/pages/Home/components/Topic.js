import React,{Component} from 'react';
import {TopicWrapper,TopicItem} from '../style'
import {connect} from 'react-redux'
class Topic extends Component{
    render(){
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item)=>{
                        return (
                            <TopicItem key={item.get('id')}>
                                <img src={item.get('imgUrl')} className="topic-pic"></img>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                
            </TopicWrapper>
        )
    }
}
const mapStateToProps=(state)=>({
    topicList:state.get('home').get('topicList')
})
export default connect(mapStateToProps,null)(Topic)