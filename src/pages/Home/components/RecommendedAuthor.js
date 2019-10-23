import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import {AuthorWrapper,AuthorTitle,AuthorList,AuthorInfo,Authorfollow} from '../style'
import {Link } from "react-router-dom";
class RecommendedAuthor extends PureComponent{
    render(){
        let {authorList}=this.props;
        return (
            <AuthorWrapper>
                <AuthorTitle>
                    <span>推荐作者</span>
                    <span className="page-change">
                        <i className="iconfont">&#59105;</i> 换一批
                    </span>
                </AuthorTitle>
                 <AuthorList>
                    {
                        authorList.map((item,index)=>(
                            <li key={item.get('id')}>
                                <Link>
                                    <span className="imgContainer">
                                        <img src={item.get('avatar_source')} alt=""></img>
                                    </span>
                                </Link>
                                <Link>
                                    <AuthorInfo>
                                        <h3 className="name">{item.get('nickname')}</h3>
                                        <p>写了{(item.get('total_wordage')/1000).toFixed(1)}k字 · {(item.get('total_likes_count')/1000).toFixed(1)}k喜欢</p>
                                    </AuthorInfo>
                                </Link>
                                <Authorfollow>
                                    <i className="iconfont"></i>关注
                                </Authorfollow>
                            </li>
                        ))
                    }
                </AuthorList>
            </AuthorWrapper>
        )
    }
}
const mapStateToProps=(state)=>({
    authorList:state.getIn(['home','authorList']),
})
export default connect(mapStateToProps,null)(RecommendedAuthor)