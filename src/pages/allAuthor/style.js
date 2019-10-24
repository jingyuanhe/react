import styles from 'styled-components'
export const AuthorWrapper=styles.div`
    position: relative;
    padding: 30px 0 50px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    width: 960px;
    .bannerImg{
        width: 100%;
        min-height: 100px;
        background-color: hsla(0,0%,71%,.2);
        border-radius: 6px;
    }
    }
`
export const ToBeAuthor=styles.div`
    position: absolute;
    right: 30px;
    top: 68px;
    color: #fff;
`
export const AuthorList=styles.div`
    margin-left: -15px;
    margin-right: -15px;
    overflow:hidden;
    .col-xs-8{
        width:33.3%;
        float:left;
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
        .wrap{
            height: 320px;
            margin-top: 80px;
            padding: 0 20px;
            border: 1px solid #e6e6e6;
            border-radius: 4px;
            background-color: hsla(0,0%,71%,.1);
            transition: .2s ease;
            text-align:center;
            -webkit-transition: .2s ease;
            hr{
                margin-top: 20px;
                margin-bottom: 20px;
                border: 0;
                border-top: 1px solid #eee;
                border-color: #eaeaea;
            }
            .meta{
                float: left;
                margin-top: -29px;
                padding-right: 10px;
                font-size: 12px;
                color: #969696;
                background-color: #f8f8f8;
            }
        }
        .focus{box-shadow: 0 0 20px 0 #e6e6e6;}
    }
`
export const AuthoInfo=styles.div`
    img{
        border-radius: 40px;
        width: 80px;
        height: 80px;
        margin: -40px 0 10px;
        display: inline-block;
        border: 1px solid #ddd;
        background-color: #fff;
    }
    .name{
        font-size: 21px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .ic-man{
            color: #3194d0;
        }
        .ic-woman {
            color: #ea6f5a;
        }
    }
    .description{
        margin: 0 auto 10px;
        max-width: 180px;
        min-height: 50px;
        font-size: 13px;
        line-height: 25px;
    }
`
export const Fllow=styles.div`
    width: 100px;
    padding: 8px 0;
    border-color: #42c02e;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 40px;
    color: #fff;
    background-color: #42c02e;
    border-color: #42c02e;

`
export const RecentUpdate=styles.div`
    min-height: 75px;
    a{
        font-size: 13px;
        line-height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
    }
`