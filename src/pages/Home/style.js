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
    width:600px;
    height:504px;
}
`
export const HomeRight =styles.div`
width:280px;
float:right;
`
export const TopicWrapper=styles.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #ddd;
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
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    .pic{
        display:block;
        float:right;
        width:150px;
        height:100px;
    }
`
export const ListInfo=styles.div`
    width:465px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
        text-decoration: none;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999
    }
`
export const RecommendWrapper=styles.div`
    margin:30px 0;
    width:280px;
`
export const RecommendItem=styles.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`
export const LoadMore=styles.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    text-align:center;
    color:#fff;
    background:#a5a5a5;
    cursor:pointer;
    border-radius:20px;
`