import {fromJS} from 'immutable'
const defaultState=fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'//upload-images.jianshu.io/upload_images/3459828-fdf30bf7e301a6e9.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/933/format/webp'
    },
    {
        id:2,
        title:'手绘',
        imgUrl:'//upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
    },
    {
        id:3,
        title:'区块链',
        imgUrl:'//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
    },
    {
        id:4,
        title:'支付宝',
        imgUrl:'//upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
    }
],
})
export default (state=defaultState,action)=>{
    return state  
}