import React,{PureComponent} from 'react';
import {ListItem,ListInfo,LoadMore} from '../style'
import { connect } from 'react-redux';
import {actionCreator} from '../store'
import {Link } from "react-router-dom";
class List extends PureComponent{
    render(){
        const {list,getMoreList,currentPage}=this.props;
        return (
            <div>
            {list.map((item,index)=>(
                <ListItem key={index}>
                    <Link to={"/detail/"+index}>
                        <ListInfo>
                            <p className="title">{item.get('title')}</p>
                            <p className="desc">
                                {item.get('desc')}
                            </p>
                        </ListInfo>
                        <img src={item.get('imgUrl')} className="pic" alt=""></img>
                    </Link>
                    
            </ListItem>
            ))}
            <LoadMore onClick={()=>{getMoreList(currentPage)}}>加载更多</LoadMore>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    list:state.getIn(['home','list']),
    isLoading:state.getIn(['home','isLoading']),
    currentPage:state.getIn(['home','currentPage'])
})
const mapDispachToProps=(dispatch)=>({
    getMoreList(currentPage){
        dispatch(actionCreator.getMoreList(currentPage))
    }
})
export default connect(mapStateToProps,mapDispachToProps)(List)