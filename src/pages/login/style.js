import styles from 'styled-components'
export const LoginWrapper =styles.div`
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
`
export const LoginMain=styles.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
`
export const LoginInfo=styles.div`
    margin-bottom: 30px;
    position: relative;
    width: 100%;
    input{
        width: 100%;
        height: 50px;
        margin-bottom:20px;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        border-radius: 0 0 4px 4px;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
        border-radius: 4px 4px 0 0;
        box-sizing:border-box;
    }
`
export const LoginButton=styles.button`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    background: #3194d0;
`