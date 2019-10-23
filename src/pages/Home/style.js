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
//下载
export const DownloadWrapper=styles.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    img{
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }
`
export const DownloadInfo=styles.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .description{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`
export const DownloadTitle=styles.div`
    font-size: 15px;
    color: #333;
    .ic-link:before {
        content: "\E616";
    }
`
//作者列表
export const AuthorWrapper=styles.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
   
`
export const AuthorTitle=styles.div`
    overflow:hidden;
    span{
        font-size: 14px;
        color: #969696;
        float:left;
    }
    .page-change{
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
        cursor:pointer;
    }
`
export const AuthorList=styles.div`
    margin:20px 0 20px;
    text-align: left;
    list-style: none;
    li{
        margin-top: 15px;
        line-height:20px;
        overflow:hidden;
        .imgContainer{
            float: left;
            width: 48px;
            height: 48px;
            margin-right: 10px;
        }
        img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
            }
        }
    }
`
export const AuthorInfo=styles.div`
    float:left;
    width:70%;
    .name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    p{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`
export const Authorfollow=styles.span`
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
`
export const MoreAuthor=styles.div`
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor:pointer;
`