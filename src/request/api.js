import {get,post} from './http'


const getUser = function(){
    return get("lsapi/base/scenicspot/getscenicSpotList?type=stargazing")
}

const getUsers = function(){
    return post("lsapi/base/scenicspot/getscenicSpotList",parmas)
}

export {
    getUser,
    getUsers
}