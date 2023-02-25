const QRCode = require('qrcode')

let data = "https://github.com/gustavoaurelio"

//let stringData = JSON.stringify(data)

QRCode.toString(data,{type: 'terminal'}, function (err, url) {
    if(err) return console.log("Ocorreu um erro")
    console.log(url)
})

QRCode.toDataURL(data, function (err, url) {
    if(err) return console.log("Ocorreu um erro")
    console.log(url)
})

QRCode.toFile('qrcodes/file.png', data, {errorCorrectionLevel: 'H'},
    function (err) {
        if (err) return console.log("Ocorreu um erro")
        console.log("QRCode Salvo");
})
