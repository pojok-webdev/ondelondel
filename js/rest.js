ondel = require('./setting')
auth = callback => {
    var axios = require('axios');
    var data = JSON.stringify({
    "params": ondel
    });
    var config = {
        method: 'post',
        url: 'https://demo.kapesolusi.work/auth',
        headers: { 
            'Content-Type': 'application/json', 
        },
        data : data
    };
    axios(config)
    .then(function (response) {
        console.log('CooKieS',response)
        callback(response.headers)
    })
    .catch(function (error) {
        console.log('Error',error);
        callback(error)
    });

}
subscription = (obj,callback) => {
    var axios = require('axios');
    console.log('session_id',obj.session_id)
    var config = {
        method: 'get',
        url: 'https://demo.kapesolusi.work/api/sale.subscription/?query={id,name,display_name,site_location_id}',
        headers: { 
            'Cookie':'session_id='+obj.session_id
        }
    };
    axios(config)
    .then(function (response) {
        console.log('Hehehe',JSON.stringify(response.data));
        callback(JSON.stringify(response.data))
    })
    .catch(function (error) {
        return error
        console.log('ERROR',error);
    });
}
location = (obj,callback) => {
    console.log('OBJ',obj)
    var axios = require('axios');
    var config = {
    method: 'get',
    url: 'https://demo.kapesolusi.work/api/site.location?query={id,site_location_line{code,pic,phone}}',
    headers: { 
        'Cookie': 'session_id='+obj.session_id
    }
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        callback(JSON.stringify(response.data))
    })
    .catch(function (error) {
    console.log(error);
    });

}
module.exports = {
    auth:auth,
    subscription:subscription,
    location:location
}