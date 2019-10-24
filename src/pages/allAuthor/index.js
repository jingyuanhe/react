import React,{useEffect}from 'react';
import {AuthorWrapper,ToBeAuthor,AuthorList,AuthoInfo,Fllow,RecentUpdate} from './style'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {actionCreator} from './store'
function AllAuthor(props){
    const {getAuthorList,auhtorList}=props;
    useEffect(()=>{
        getAuthorList();
    },[getAuthorList])
    return(
        <AuthorWrapper>
            <img src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" alt="" className="bannerImg"></img>
            <ToBeAuthor>
                <i className="iconfont">&#59147;</i> 如何成为签约作者
            </ToBeAuthor>
            <AuthorList>
                {
                    auhtorList.map((item)=>(
                        <div className="col-xs-8" key={item.get('id')}>
                            <div className="wrap">
                                <Link to={"/authorDetail/"+item.get('id')}>
                                        <AuthoInfo>
                                            <img src={item.get('avatar_source')} alt=""></img>
                                            <h2 className="name">                  
                                                {item.get('name')} <i className="iconfont ic-man">&#59111;</i>
                                            </h2>
                                            <p className="description">{item.get('description')}</p>
                                        </AuthoInfo>
                                        <Fllow><i className="iconfont">&#xe62f;</i>关注</Fllow>
                                        <hr></hr>
                                        <div className="meta">最近更新</div>
                                    </Link>
                                    <RecentUpdate>
                                        {
                                            item.get('recentUpdates').map((item)=>(
                                                <Link to={"/detail/"+item.get('id')} key={item.get('id')}>
                                                    {item.get('title')}
                                                </Link>
                                            ))
                                        }
                                        
                                    </RecentUpdate>
                            </div>
                        </div>
                    ))
                }
            </AuthorList>
        </AuthorWrapper>
    )
}
const mapDispatchToProps=(dispatch)=>({
    getAuthorList(){
        const action=actionCreator.getAuthorList();
        dispatch(action);
    }
})
const mapStateToProps=(state)=>({
    auhtorList:state.getIn(['author','auhtorList'])
})
export default connect(mapStateToProps,mapDispatchToProps)(AllAuthor)