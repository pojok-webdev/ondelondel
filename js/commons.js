getsession = obj => {
    console.log('OBJret',obj)
    sp = obj['set-cookie'][0]
    sp1 = sp.split(';')
    console.log(sp1)
    a = sp1.toString().split('=')
    console.log('sp',sp)
    b = a[1].split(',')
    return b[0]
}
module.exports = {
    getsession:getsession
}