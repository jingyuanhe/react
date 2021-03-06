import styles from 'styled-components'
import logo from '../../assets/img/logo.png'
export const TopWrapper=styles.div`
height:56px;
width:100%;
`
export const NavWrapper=styles.nav`
min-height: 50px;
border: 1px solid transparent;
background-color: #fff;
border-color: #f0f0f0;
position: fixed;
right: 0;
left: 0;
z-index: 1030;
height:56px;
`
export const HeaderWrapper=styles.div`
height:56px;
position:relative;
min-width: 768px;
max-width: 1440px;
margin: 0 auto;
`
export const Logo=styles.div`
width:100px;
height:56px;
position:absolute;
left:0;
top:0;
background:url(${logo});
background-size:contain;
`
export const Nav=styles.div`
width:960px;
height:100%;
margin:0 auto;
padding-right:70px;
box-sizing:border-box;
`
export const NavItem=styles.div`
padding:0 15px;
font-size:17px;
line-height:56px;
color:#333;
cursor:pointer;
&.left{
    float:left;
}
&.right{
    float:right;
}
`
export const NavSearch=styles.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    font-size:14px;
    color:#666;
    background:#eee;
    margin-left:20px;
    &::placeholder{
        color:#999
    }
    &.focused{
        width:240px;
    }
    // 定义进入过渡的开始状态
    &.fade-enter{
        transition:all .2s ease-out;
    }
    // 定义进入过渡生效时的状态
    &.fade-enter-active{
        width:240px;
    }
    // 定义离开过渡的开始状态
    &.fade-exit{
        transition:all .2s ease-out;
    }
    // 定义离开过渡生效时的状态
    &.fade-exit-active{
        width:160px;
    }
`
export const Addition=styles.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button=styles.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    padding:0 20px;
    margin-right:20px;
    border-radius:19px;
    border:1px solid  #ec6149;
    font-size:14px;
    &.red{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`
export const SearchWrapper=styles.div`
    position:relative;
    float:left;
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        // background:
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`
export const SearchInfo=styles.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    z-index:1;
    backGround:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle=styles.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;

`
export const SearchInfoSwitch=styles.span`
float:right;
font-size:13px;
cursor:pointer
`
export const SearchInfoItem=styles.a`
line-height:20px;
float:left;
padding:0 5px;
border:1px solid #ddd;
color:#787878;
font-size:12px;
border-radius:3px;
margin-right:10px;
margin-bottom:10px;
cursor:pointer
`