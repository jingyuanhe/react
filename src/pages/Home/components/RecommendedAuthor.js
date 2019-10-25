import React,{useState} from 'react';
import { connect } from 'react-redux';
import {AuthorWrapper,AuthorTitle,AuthorList,AuthorInfo,Authorfollow,MoreAuthor} from '../style'
import {Link} from "react-router-dom";
import {actionCreator} from '../store'
function RecommendedAuthor(props){
        let {authorList,pageChange}=props;
        let [rotate,setRotate]=useState(0);
        function changeAuthor(num){
            setRotate(num);
            pageChange();
        }
        return (
            <AuthorWrapper>
                <AuthorTitle>
                    <span>推荐作者</span>
                    <span className="page-change" onClick={()=>{changeAuthor(rotate+180)}}>
                        <i className="iconfont ic-search-change" style={{transform: "rotate("+rotate+"deg)"}}>&#59105;</i> 换一批
                    </span>
                </AuthorTitle>
                 <AuthorList>
                    {
                        authorList.map((item,index)=>(
                            <li key={item.get('id')}>
                                <Link to="/authorDetail">
                                    <span className="imgContainer">
                                        <img src={item.get('avatar_source')} alt=""></img>
                                    </span>
                                </Link>
                                <Link to="/authorDetail">
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
                <Link to="/allAuthor">
                    <MoreAuthor>查看全部 <i className="iconfont">&#58974;</i></MoreAuthor>
                </Link>
                
            </AuthorWrapper>
        )
}
const mapStateToProps=(state)=>({
    authorList:state.getIn(['home','authorList']),
})
const mapDispatchToProps=(dispatch)=>({
    pageChange(){
        dispatch(actionCreator.pageChange())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(RecommendedAuthor)