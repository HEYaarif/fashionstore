// import {v2 as cloudinary} from 'cloudinary'
// import fs from 'fs'

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })

// const uploadOnCloudinary = async(localFilePath)=>{
//     try {
//         if(!localFilePath) return null
//         //upload the file on cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type:'image',
//             folder: 'fashionstore/products',  // organizes uploads in cloudinary dashboard
//         })
//         // Delete local temp file after successful upload
//         fs.unlinkSync(localFilePath);

//         // file has been uploaded successfull
//         console.log("file has been uploaded successfull", response.url);
//         return response;
//     } catch (error) {
//         // ✅ Delete local temp file if upload failed
//         if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
//         return null;
//     }
// }
// export {uploadOnCloudinary}


const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    console.log('Uploading file:', localFilePath); // ← add this
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'image',
      folder: 'fashionstore/products',
    });
    console.log('Cloudinary response:', response.secure_url); // ← add this
    fs.unlinkSync(localFilePath); // ✅ delete temp file after upload

    return response;
  } catch (error) {
    console.log('Cloudinary error:', error.message); // ← add this
    if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath); // ✅ delete on failure too
    return null;
  }
};

module.exports = { uploadOnCloudinary };
