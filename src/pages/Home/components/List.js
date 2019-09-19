import React,{Component} from 'react';
import {ListItem,ListInfo} from '../style'
import { connect } from 'react-redux';
class List extends Component{
    render(){
        return (
            this.props.list.map((item)=>(
                <ListItem key={item.get('id')}>
                    <ListInfo>
                        <p className="title">{item.get('title')}</p>
                        <p className="desc">
                            {item.get('desc')}
                        </p>
                    </ListInfo>
                    <img src={item.get('imgUrl')} className="pic"></img>
            </ListItem>
            ))
            
        )
    }
}
const mapStateToProps=(state)=>({
    list:state.getIn(['home','list'])
})
export default connect(mapStateToProps,null)(List)