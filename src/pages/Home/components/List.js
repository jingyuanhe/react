import React,{Component} from 'react';
import {ListItem,ListInfo,LoadMore} from '../style'
import { connect } from 'react-redux';
import {actionCreator} from '../store'
class List extends Component{
    render(){
        const {list,getMoreList,currentPage}=this.props;
        return (
            <div>
            {list.map((item,index)=>(
                <ListItem key={index}>
                    <ListInfo>
                        <p className="title">{item.get('title')}</p>
                        <p className="desc">
                            {item.get('desc')}
                        </p>
                    </ListInfo>
                    <img src={item.get('imgUrl')} className="pic" alt=""></img>
            </ListItem>
            ))}
            <LoadMore onClick={()=>{getMoreList(currentPage)}}>加载更多</LoadMore>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    list:state.getIn(['home','list']),
    currentPage:state.getIn(['home','currentPage'])
})
const mapDispachToProps=(dispatch)=>({
    getMoreList(currentPage){
        dispatch(actionCreator.getMoreList(currentPage))
    }
})
export default connect(mapStateToProps,mapDispachToProps)(List)