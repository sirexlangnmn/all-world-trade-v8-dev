module.exports = (app) => {
    const { v4: uuidV4 } = require('uuid');

    const CryptoJS = require('crypto-js');
    const JWT_SECRET = process.env.JWT_SECRET;

    const express = require('express');
    const path = require('path');
    app.use(express.static(path.join(__dirname, '../../', 'public')));

    const sharp = require('sharp');
    const multer = require('multer');

    const db = require('../db_models');
    const Users_business_medias = db.users_business_medias;
    const Op = db.Sequelize.Op;

    const requiredFileSize = 1024 * 1024 * 5;

    //! Use of Multer
    const storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, './public/uploads/users_upload_files/'); // './public/images/' directory name where save the file
        },
        filename: (req, file, callBack) => {
            callBack(null, file.fieldname + '-' + Date.now() + '-' + uuidV4() + path.extname(file.originalname));
        },
    });

    const fileFilter = (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    };

    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024 * 5,
        },
        fileFilter: fileFilter,
    });

    app.post('/upload2', upload.single('companyBanner'), async (req, res) => {
        console.log('upload2 req.file', req.file);

        const imagePath = path.join(__dirname, '../../', 'public/uploads/users_upload_files/', req.file.filename);
        const webpImagePath = path.join(
            __dirname,
            '../../',
            'public/uploads/users_upload_files/',
            req.file.filename.replace(/\.[^/.]+$/, '') + '.webp',
        );
        console.log('upload2 imagePath:', imagePath);
        console.log('upload2 webpImagePath:', webpImagePath);
        const image = await sharp(imagePath).resize(800, 600).webp().toFile(webpImagePath);
        console.log('upload2: Image uploaded and converted successfully!');
        //res.send('Image uploaded and converted successfully!');
    });

    app.post('/api/v2/multer-sharp-and-sequelize-update-banner', upload.single('companyBanner'), async (req, res) => {
        const file = req.file;
        console.log('upload2 file:', file);

        if (!file) {
            return res.status(400).json({ message: 'Please upload a file' });
        } else {
            const encryptedUuid = req.session.user.uuid;
            const bytes = CryptoJS.AES.decrypt(encryptedUuid, JWT_SECRET);
            const originalUuid = bytes.toString(CryptoJS.enc.Utf8);

            console.log('upload2 req.file', req.file);

            const imagePath = path.join(__dirname, '../../', 'public/uploads/users_upload_files/', req.file.filename);
            const webpImagePath = path.join(
                __dirname,
                '../../',
                'public/uploads/users_upload_files/',
                req.file.filename.replace(/\.[^/.]+$/, '') + '.webp',
            );
          
            const image = await sharp(imagePath).resize(800, 600).webp().toFile(webpImagePath);

            const newFilename = webpImagePath.split("\\").pop();
            console.log('upload2 newFilename:', newFilename);

            const updateObject = {
                banner: newFilename,
            };

            console.log('upload2 image:', image);
            console.log('upload2 imagePath:', imagePath);
            console.log('upload2 webpImagePath:', webpImagePath);
            console.log('upload2 originalUuid:', originalUuid);
            console.log('upload2: Image uploaded and converted successfully!');


            let condition = originalUuid ? { uuid: { [Op.like]: `%${originalUuid}%` } } : null;
            const getRows = await Users_business_medias.findAll({ where: condition })
                .then((data) => {
                    return data;
                })
                .catch((err) => {
                    console.log('Some error occurred while retrieving Users_business_medias.');
                    return 'Some error occurred while retrieving Users_business_medias.';
                });

            console.log('getRows.length', getRows.length);
            console.log('updateObject', updateObject);

            // if (getRows.length > 0) {
            //     updatedRows = await Users_business_medias.update(updateObject, {
            //         where: { uuid: originalUuid },
            //     })
            //         .then((num) => {
            //             if (num > 0) {
            //                 console.log('updated successfully');
            //                 return num;
            //             } else {
            //                 console.log('Some error occurred while updating the banner');
            //             }
            //         })
            //         .catch((err) => {
            //             console.log(
            //                 'support-links.controller.js exports.create | Error occurred while updating the banners with uuid=' +
            //                     originalUuid,
            //             );
            //         });
            // } else {

            // }

             if (getRows.length > 0) {
                updatedRows = Users_business_medias.update(updateObject, {
                    where: { uuid: originalUuid },
                })
                    .then((num) => {
                        if (num > 0) {
                            console.log('updated successfully');
                            return num;
                        } else {
                            console.log('Some error occurred while updating the banner');
                        }
                    })
                    .catch((err) => {
                        console.log(
                            'support-links.controller.js exports.create | Error occurred while updating the banners with uuid=' +
                                originalUuid,
                        );
                    });
            } else {

            }


            res.send('Image uploaded and converted successfully!');
        }
    });
};
