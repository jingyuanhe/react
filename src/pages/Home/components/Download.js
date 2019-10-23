import React,{PureComponent} from 'react'
import {DownloadWrapper,DownloadInfo,DownloadTitle} from '../style'
import {Link } from "react-router-dom";
class Download extends PureComponent{
    render(){
        return (
            <Link to="/downloadApp">
                <DownloadWrapper>
                    <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""></img>
                    <DownloadInfo>
                        <DownloadTitle>
                            下载简书手机App
                            <i className="iconfont">&#58974;</i>
                        </DownloadTitle>
                        <div className="description">随时随地发现和创作内容</div>
                    </DownloadInfo>
                </DownloadWrapper>
            </Link>
            
        )
    }
}
export default Download