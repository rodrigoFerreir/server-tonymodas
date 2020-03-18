const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
//caminho para salvar os uploads na pasta
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (req, file, cb)=>{
            //gerando um  numero randomico de 8 bytes para não aver repetição
            crypto.randomBytes(8, (err, hash)=>{
                if(err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            });
        },
    }),
    //definindo limite de tamanho para as imagens a serem baixadas
    limits:{
        fileSize: 2 * 1024 * 1024,
    },
    //filtando quais os formatos permitidos para upload
    fileFilter:(req, file, cb)=>{
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];
        if(allowedMimes.includes(file.mimetype)){
            cb(null, true);
        }else{
            cb(new Error('Invalid file type.'));
        }
    },
};