ondel = require('./setting')
auth = callback => {
    var axios = require('axios');
    var data = JSON.stringify({
    "params":    {"login": "apipadi@gmail.com",
    "password": "Totol1nk",
    "db": "padish"}
    });
    var config = {
        method: 'post',
        url: 'https://demo.kapesolusi.work/auth',
        headers: { 
            'Content-Type': 'application/json', 
            //'Cookie': 'session_id=08fd5438459e7b19ecf492b26b0218d88b47c41c'
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
hahai = callback => {
    var axios = require('axios');
    var data = JSON.stringify({
    "params": {
        "login": "apipadi@gmail.com",
        "password": "Totol1nk",
        "db": "padish"
    }
    });

    var config = {
    method: 'post',
    url: 'https://demo.kapesolusi.work/auth',
    headers: { 
        'Content-Type': 'application/json', 
     //   'Cookie': 'session_id=c4118f8a192827258259ff94932f6f0fd57d28bd'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        callback(response.headers)
    })
    .catch(function (error) {
        console.log(error);
        callback(error)
    });

}
getkelurahan = (obj,callback) => {
    var axios = require('axios');
    console.log('session_id',obj.session_id)
    var config = {
        method: 'get',
        url: 'https://demo.kapesolusi.work/api/vit.kelurahan/?query={id,name,display_name,kecamatan_id}&filter=[["kecamatan_id.kota_id.state_id.name","ilike","%jawa tengah%"]]',
        headers: { 
            'Cookie':'session_id='+obj.session_id
        }
    };
    axios(config)
    .then(function (response) {
        console.log('Kelurahan',JSON.stringify(response.data));
        callback(JSON.stringify(response.data))
    })
    .catch(function (error) {
        //return error
        console.log('ERROR',error);
        callback(error)
    });
}
getstates = (obj,callback) => {
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://demo.kapesolusi.work/api/res.country.state?filter=[["country_id","=",100]]&query={id,display_name,name,country_id}',
    headers: { 
        'Cookie':'session_id='+obj.session_id
    }
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    callback(response.data)
    })
    .catch(function (error) {
    console.log(error);
    callback(error)
    });

}
getkota = (obj,callback) => {
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://demo.kapesolusi.work/api/vit.kota?query={id,display_name,name,state_id}',
    headers: { 
        'Cookie':'session_id='+obj.session_id
    }
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        callback(response.data)
    })
    .catch(function (error) {
        console.log(error);
        callback(error)
    });

}
getkecamatan = (obj,callback)=> {
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://demo.kapesolusi.work/api/vit.kecamatan?query={id,display_name,name,kota_id}',
    headers: { 
        'Cookie':'session_id='+obj.session_id
    }
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        callback(response.data)
    })
    .catch(function (error) {
        console.log(error);
        callback(error)
    });

}
getkelurahanbyou = (obj,callback) => {
    switch(obj.state){
        case '1':
            state = 'jawa timur'
            break
        case '2':
            state = 'jakarta'
            break
        case '3':
            state= 'jawa barat'
            break
        case '4':
            state= 'bali'
            break
    }
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://demo.kapesolusi.work/api/vit.kelurahan?'
    +'query={id,display_name,kecamatan_id{id,name,kota_id{id,name,state_id{id,name}}},name}&'
    +'filter=[["kecamatan_id.kota_id.state_id.name","ilike","%'+state+'%"]]',
    headers: { 
        'Cookie':'session_id='+obj.session_id
    }
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        callback(response.data)
    })
    .catch(function (error) {
    console.log(error);
    callback(error)
    });

}
getkelurahanbycity = (obj,callback) => {
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://demo.kapesolusi.work/api/vit.kelurahan?query={id,display_name,kecamatan_id,name}&filter=[["kecamatan_id.kota_id.name","ilike","%jember%"]]',
    headers: { 
        'Cookie': 'session_id=b19dfe364e691884944d5a04fab5d264bcfe1451'
    }
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    callback(response.data)
    })
    .catch(function (error) {
    console.log(error);
    callback(error)
    });

}
module.exports = {
    auth:auth,
    subscription:subscription,
    location:location,
    hahai:hahai,
    getstates:getstates,getkota:getkota,getkecamatan:getkecamatan,
    getkelurahan:getkelurahan,getkelurahanbycity:getkelurahanbycity,
    getkelurahanbyou:getkelurahanbyou
}