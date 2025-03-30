function encrypt(text) {
    var enc1 = Buffer.from(text).toString('base64');
    var enc = Buffer.from(enc1).toString('base64');
    var enc2 = Buffer.from(enc).toString('base64');
    return enc2;
}

function decrypt(text) {
    var dec2 = Buffer.from(text, 'base64').toString('utf8');
    var dec = Buffer.from(dec2, 'base64').toString('utf8');
    var dec1 = Buffer.from(dec, 'base64').toString('utf8');
    return dec1;
}

module.exports = {
    encrypt,
    decrypt
}