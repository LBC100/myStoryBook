export default function postGetData (url, data, callback, failCallBack) {
    console.log('postGetData开始获取数据')
    return fetch(url, {
            method: 'POST',  
            headers: {
                "Content-type": "application/json"
            },  
            body:JSON.stringify(data),  
        }).then((response) => {
      console.log('postGetData获取正常1', response);
                return response.json(); 
        }).then((json) => {
            console.log('postGetData获取正常2', json);
            return callback && callback(json);
        }).catch((error) => {
            failCallBack && failCallBack(error);
        });
};
