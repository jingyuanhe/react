import React,{Component} from 'react';
import {DetailWrapper,DetailContent,Header,Content} from './style'
import { connect } from 'react-redux';
class Detail extends Component{
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
export default connect(mapStateToProps,null)(Detail)