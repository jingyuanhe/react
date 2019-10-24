import React from 'react';
import {AuthorWrapper,ToBeAuthor,AuthorList,AuthoInfo,Fllow,RecentUpdate} from './style'
import {Link} from 'react-router-dom'
function AllAuthor(){
    return(
        <AuthorWrapper>
            <img src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" alt="" className="bannerImg"></img>
            <ToBeAuthor>
                <i className="iconfont">&#59147;</i> 如何成为签约作者
            </ToBeAuthor>
            <AuthorList>
                <div className="col-xs-8">
                    <div className="wrap">
                        <Link to="/authorDetail">
                            <AuthoInfo>
                                <img src="//upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt=""></img>
                                <h2 className="name">                  
                                    董克平日记 <i className="iconfont ic-man">&#59111;</i>
                                </h2>
                                <p className="description">喜食好色的一枚无业游民</p>
                            </AuthoInfo>
                            <Fllow><i className="iconfont">&#xe62f;</i>关注</Fllow>
                            <hr></hr>
                            <div className="meta">最近更新</div>
                            <RecentUpdate>
                                <Link to="/detail/:3">
                                    #开始记日记#992 颜色很黄，肉很香—甬府野生黄鱼宴
                                </Link>
                            </RecentUpdate>
                        </Link>
                    </div>
                </div>
                <div className="col-xs-8">
                    <div className="wrap">
                        
                    </div>
                </div>
                <div className="col-xs-8">
                    <div className="wrap">
                        
                    </div>
                </div>
            </AuthorList>
        </AuthorWrapper>
    )
}
export default AllAuthor