import request from './request';

export function homeList(){
    return request({
        url:'/home'
    })
}