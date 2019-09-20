import React,{Component} from 'react';
import {DetailWrapper,DetailContent,Header,Content} from './style'
import { connect } from 'react-redux';
import {actionCreator} from './store'
class Detail extends Component{
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
    render(){
        const {title,content}=this.props;
        return (
            <DetailWrapper>
                <DetailContent>
                    <Header>{title}</Header>
                    <Content dangerouslySetInnerHTML={{__html:content}}>
                    </Content>
                </DetailContent>
            </DetailWrapper>
        )
    }
}
const mapStateToProps=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})
const mapDisPatchToProps=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreator.getDetail(id));
    }
})
export default connect(mapStateToProps,mapDisPatchToProps)(Detail)