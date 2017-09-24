import * as types from './../constants/types'

export function loadChannels() {
    return dispatch => {
        return dispatch(channelsLoaded([{id: 1, name: "Only Bros"}]));
        // fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1242325/data.json")
        //     .then(res => res.json())
        //     .then(res => {
        //           return dispatch(channelsLoaded([{name: "Only Bros"}]));
        //       }).catch(err => {
        //         console.log(err);
        //       });
    }
}

export function addChannel(request){
    return dispatch => {
        return dispatch(channelAdded(request));
    }
}

export function loadUsers() {
    return dispatch => {
        return dispatch(usersLoaded([{id: 1, name: "Majid"}]));
    }
}

export function addUser(request){
    return dispatch => {
        return dispatch(userAdded(request));
    }
}

export function loadMessages() {
    return dispatch => {
        return dispatch(messagesLoaded([{id: 1, message: "Majid"}]));
    }
}

export function addMessage(res){
    return dispatch => {
        return dispatch(messageAdded(res));
    }
}

function channelsLoaded(res){
    return {
        type: types.CHANNELS_LOADED,
        payLoad: res
    }
}

function channelAdded(res){
    return {
        type: types.CHANNEL_ADDED,
        payLoad: res
    }
}

function usersLoaded(res){
    return {
        type: types.USERS_LOADED,
        payLoad: res
    }
}

function userAdded(res){
    return {
        type: types.USER_ADDED,
        payLoad: res
    }
}

function messagesLoaded(res){
    return {
        type: types.MESSAGES_LOADED,
        payLoad: res
    }
}

function messageAdded(res){
    return {
        type: types.MESSAGE_ADDED,
        payLoad: res
    }
}