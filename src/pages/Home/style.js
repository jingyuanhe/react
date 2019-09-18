import styles from 'styled-components'
export const HomeWrapper =styles.div`
width:960px;
margin:0 auto;
overflow:hidden;
`
export const HomeLeft =styles.div`
float:left;
padding-top:30px;
margin-left:15px;
width:625px;
.banner-img{
    width:682px;
    height:436px;
}
`
export const HomeRight =styles.div`
width:240px;
float:right;
`
export const TopicWrapper=styles.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
`
export const TopicItem=styles.div`
    float:left;
    height:40px;
    line-height:40px;
    font-size:14px;
    background:#f7f7f7;
    padding-right:10px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-left:18px;
    margin-bottom:18px;
    .topic-pic{
        width:40px;
        height:40px;
        display:block;
        float:left;
        margin-right:10px;
    }
`
export const ListItem=styles.div`
    padding:20px;
`