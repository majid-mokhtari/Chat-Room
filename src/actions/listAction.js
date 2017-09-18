import * as types from './../constants/types'

export function loadList() {
    return dispatch => {
        fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1242325/data.json")
            .then(res => res.json())
            .then(res => {
                  return dispatch(listLoaded(res));
              }).catch(err => {
                console.log(err);
              });
    }
}

function listLoaded(res){
    console.log(res)
    return {
        type: types.LIST_LOADED,
        payLoad: res
    }
}