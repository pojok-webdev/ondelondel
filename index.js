i = require('./appinit')
i.app.get('/auth',(req,res)=>{
    i.rest.auth(obj=>{
        session_id = i.commons.getsession(obj)
        res.render('main',{
            session_id:session_id
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
i.app.listen('20224',_=>{
    console.log('Application run at port 20224')
})