import styles from 'styled-components'
export const DetailWrapper=styles.div`
    box-sizing: content-box;
    width: 1000px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    min-height: calc(100vh - 66px);
    padding-top: 10px;
    font-size: 16px;
`
export const DetailContent=styles.div`
    flex-shrink: 0;
    width: 730px;
    margin-bottom: 24px;
    margin-right: 10px;
`
export const Header=styles.div`
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    color: #404040;
    text-rendering: optimizelegibility;
    margin-bottom: .5em;
`
export const Content=styles.div`
    img{
        max-width: 100%;
        width: auto;
        height: auto;
        vertical-align: middle;
        border: 0;
        margin-bottom: 20px;
    }
    p{
        margin-bottom: 20px;
        word-break: break-word;
        font-weight: 400;
        line-height: 1.8;
    }
    b{
        font-weight: bolder;
        display:block;
    }
`