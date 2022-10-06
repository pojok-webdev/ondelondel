getsession = obj => {
    sp = obj['set-cookie'][0]
    sp1 = sp.split(';')
    console.log(sp1)
    a = sp1.toString().split('=')
    b = a[1].split(',')
    return b[0]
}
module.exports = {
    getsession:getsession
}