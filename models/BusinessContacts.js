const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BusinessContactss = new Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Location: {
        City: { type: String },
        Adress: { type: String, trim: true },
        Lat: { type: Number },
        Long: { type: Number },
    },
    SocialMedia: {
        SocialInstagram: { type: String, trim: true },
        SocialTelegram: { type: String, trim: true },
        SocialWhatsapp: { type: String, trim: true },
    },
    PostalCode: { type: String, trim: true },
    TelNo: { type: String, trim: true },
    MobileNo: { type: String, trim: true },
    FaxNo: { type: String, trim: true },
    Email: { type: String, trim: true },
    Website: { type: String, trim: true },



});






module.exports = mongoose.model("BusinessContact", BusinessContactss, "BusinessContact");