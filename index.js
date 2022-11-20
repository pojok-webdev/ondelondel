i = require('./appinit')
i.app.get('/auth',(req,res)=>{
    i.rest.hahai(obj=>{
        session_id = i.commons.getsession(obj)
        res.render('main',{
            session_id:session_id,
            obj:obj
        })
    })
})
i.app.get('/getcookies',(req,res)=>{
    console.log('cookie',req.session)
    res.send({'cookie':req.session})
})
i.app.get('/getcookie',(req,res)=>{
    console.log(req.cookies)
    res.send(req.cookies)
})
i.app.get('/logout',(req,res)=>{
    res.clearCookie()
    res.send(req.cookies)
})
i.app.get('/getsubscriptions/:session_id',(req,res)=>{
    i.rest.subscription({
        session_id:req.params.session_id
    },objs=>{
        console.log('Subscriptions ',objs)
        res.send({'objs':objs})
    })
})
i.app.get('/getlocations/:session_id',(req,res)=>{
    i.rest.location({
        session_id:req.params.session_id
    },objs=>{
        console.log('Locations ',objs)
        res.send({'objs':objs})
    })
})
i.app.get('/hahai',(req,res)=>{
    i.rest.hahai(resp=>{
        console.log(resp)
        res.send(resp)
    })
})
i.app.get('/getkelurahan/:session_id',(req,res)=>{
    i.rest.getkelurahan({session_id:req.params.session_id},objs=>{
        console.log('Kelurahan',objs)
        res.send(objs)
    })
})
i.app.get('/getkelurahandata/:session_id',(req,res)=>{
    i.rest.getkelurahan({session_id:req.params.session_id},objs=>{
        console.log('Kelurahan',objs)
        res.send({data:objs.result.map(dt=>{
            return {id:dt.id,name:dt.name,display_name:dt.display_name,kecamatan_id:dt.kecamatan_id}
        })})
    })
})
i.app.get('/getstates/:session_id',(req,res)=>{
    i.rest.getstates({session_id:req.params.session_id},states=>{
        res.send({data:states.result.map(state=>{
            return [state.id,state.name,state.display_name]
        })})
    })
})
i.app.get('/datatablesstates',(req,res)=>{
    res.render('table',{
        'title':'states',
        'pagename':'whwa',
        'email':'puji@padi.net.id'
    })
})
i.app.get('/getkotas/:session_id',(req,res)=>{
    i.rest.getkota({session_id:req.params.session_id},kotas=>{
        res.send({data:kotas.result.map(kota=>{
            return [kota.id,kota.name,kota.display_name]
        })})
    })
})
i.app.get('/datatableskotas',(req,res)=>{
    res.render('tablekota',{
        'title':'kotas',
        'pagename':'whwa',
        'email':'puji@padi.net.id'
    })
})



i.app.get('/getkecamatans/:session_id',(req,res)=>{
    i.rest.getkecamatan({session_id:req.params.session_id},kecs=>{
        res.send({data:kecs.result.map(kec=>{
            return [kec.id,kec.name,kec.display_name]
        })})
    })
})
i.app.get('/datatableskecamatans',(req,res)=>{
    res.render('tablekecamatan',{
        'title':'kecamatans',
        'pagename':'whwa',
        'email':'puji@padi.net.id'
    })
})




i.app.get('/getkelurahans/:session_id/:state',(req,res)=>{
    i.rest.getkelurahanbyou({session_id:req.params.session_id,state:req.params.state},kecs=>{
        res.send({data:kecs.result.map(kec=>{
            return [kec.id,kec.name,kec.display_name]
        })})
    })
})
i.app.get('/datatableskelurahans',(req,res)=>{
    res.render('tablekelurahan',{
        'title':'kelurahans',
        'pagename':'kelurahan',
        'email':'puji@padi.net.id'
    })
})

i.app.listen('20224',_=>{
    console.log('Application run at port 20224')
})