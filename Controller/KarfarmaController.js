const Controllr = require('../Controller/Controller');
const momment = require('jalali-moment');
const city = require("../name.json");
// Models
const role = require('../models/Roles');
const User = require('../models/User');
const BusinesInfo = require('../models/BusinessInfo');
const categoriess = require('../models/Category');
const Locations = require('../models/Location');
const BusinesContact = require('../models/BusinessContacts')
    // 
const { body, validationResult } = require('express-validator');

module.exports = new class Karfarma extends Controllr {
    // **********BuseniosInfo**********
    //GET
    async BusinessInfoGet(req, res, next) {
        try {
            //all cater gory for find parnts 0
            let categori = await categoriess.find({});

            let BusinesInfoo = await BusinesInfo.find({ UserId: req.session.user._id });


            return res.render('panels/karfama/Business.ejs', { categories: categori, BusinesInfo: BusinesInfoo });
        } catch (error) {

        }
    };

    //POst
    async BusinessInfoPost(req, res, next) {
        try {
            console.log(req.body);

            let my_array = req.body.parentID;
            let a = [];
            // for category
            if (my_array.length == 3) {
                let last_element = my_array[my_array.length - 1];
                if (last_element == 0) {
                    let last_element = my_array[my_array.length - 2];
                    a.push(last_element);
                } else {
                    let last_element = my_array[my_array.length - 1];
                    a.push(last_element);
                }
            } else if (my_array.length == 2) {
                let last_element = my_array[my_array.length - 1];
                if (last_element == 0) {
                    let last_element = my_array[my_array.length - 2];
                    a.push(last_element);
                } else {
                    let last_element = my_array[my_array.length - 1];
                    a.push(last_element);
                }
            }
            let categorie = await categoriess.find({ id: a[0] });

            let dateshow = momment(req.body.StartDate).locale('fa').format('YYYY/M/D ');


            //save

            const NewBusenniosinfo = new BusinesInfo({
                UserId: req.session.user,
                Category: categorie[0],
                Title: req.body.Title,
                Type: req.body.TypeWork,
                Domain: req.body.Domain,
                Brand: req.body.Brand,
                Activity: req.body.Activity,
                SabtNo: req.body.SabtNo,
                MelliNo: req.body.MelliNo,
                CEO: req.body.CEO,
                StartDate: dateshow,
                Description: req.body.description,
            });
            if (req.file) {
                NewBusenniosinfo.Logo = req.file.path
            }

            await NewBusenniosinfo.save();

            return res.redirect("/dashboard/karfarma/BusinessInfo")

        } catch (error) {

        }
    };
    //choseCategory
    async CategoryId(req, res, next) {
        try {
            let categori = await categoriess.find({ parentId: req.params.id });

            return res.status(200).send({
                "pardts": categori
            })
        } catch (error) {

        }
    };
    // UpdateBusinessInfo
    async UpdateBusinessInfopost(req, res, next) {
        try {
            let BusinesInfoo = await BusinesInfo.find({ UserId: req.session.user._id });

            if (BusinesInfoo) {

                let my_array = req.body.parentID;

                let a = [];

                if (my_array.length == 3) {
                    let last_element = my_array[my_array.length - 1];
                    if (last_element == 0) {
                        let last_element = my_array[my_array.length - 2];
                        a.push(last_element);
                    } else {
                        let last_element = my_array[my_array.length - 1];
                        a.push(last_element);
                    }
                } else if (my_array.length == 2) {
                    let last_element = my_array[my_array.length - 1];
                    if (last_element == 0) {
                        let last_element = my_array[my_array.length - 2];
                        a.push(last_element);
                    } else {
                        let last_element = my_array[my_array.length - 1];
                        a.push(last_element);
                    }
                }
                console.log(a);
                const data = {
                    UserId: req.session.user,
                };

                //Category          
                if (a.length > 0) {
                    let categorie = await categoriess.find({ id: a[0] });

                    data.Category = categorie[0];
                } else {
                    data.Category = BusinesInfoo[0].Category
                };

                // Title 
                if (req.body.Title.length > 0) {
                    data.Title = req.body.Title
                } else {
                    data.Title = BusinesInfoo[0].Title
                };

                // Domain
                if (req.body.Domain.length > 0) {
                    data.Domain = req.body.Domain
                } else {
                    data.Domain = BusinesInfoo[0].Domain
                };

                // Brand
                if (req.body.Brand.length > 0) {
                    data.Brand = req.body.Brand
                } else {
                    data.Brand = BusinesInfoo[0].Brand
                };

                // TypeWork
                if (req.body.TypeWork.length > 0) {

                    data.Type = req.body.TypeWork;
                } else {
                    data.Type = BusinesInfoo[0].Type
                };

                // Activity
                if (req.body.Activity.length > 0) {
                    data.Activity = req.body.Activity
                } else {
                    data.Activity = BusinesInfoo[0].Activity
                };

                // SabtNo
                if (req.body.SabtNo.length > 0) {
                    data.SabtNo = req.body.SabtNo
                } else {
                    data.SabtNo = BusinesInfoo[0].SabtNo
                };

                // MelliNo
                if (req.body.MelliNo.length > 0) {
                    data.MelliNo = req.body.MelliNo
                } else {
                    data.MelliNo = BusinesInfoo[0].MelliNo
                };


                // CEO

                if (req.body.CEO.length > 0) {

                    data.CEO = req.body.CEO;
                } else {
                    data.CEO = BusinesInfoo[0].CEO
                };

                // StartDate
                if (req.body.StartDate.length > 0) {
                    let dateshow = momment(req.body.StartDate).locale('fa').format('YYYY/M/D ');
                    data.StartDate = dateshow
                } else {
                    data.StartDate = BusinesInfoo[0].StartDate
                };

                // Description
                if (req.body.StartDate.length > 0) {
                    data.Description = req.body.description
                } else {
                    data.Description = BusinesInfoo[0].Description
                };

                //Logo  
                if (req.file) {
                    data.Logo = req.file.path
                } else {
                    data.Logo = BusinesInfoo[0].Logo
                };

                await BusinesInfo.updateOne({ UserId: req.session.user._id }, { $set: data });
                return res.redirect("/dashboard/karfarma/BusinessInfo")



            } else {
                res.send("h")
            }
        } catch (error) {

        }
    };


    // **********BuseniosContant**********
    //Get
    async BusinessContactGET(req, res, next) {
        try {
            const Location = await Locations.find({ parent_id: 0 });
            const BusineContact = await BusinesContact.find({ UserId: req.session.user._id });

            return res.render("panels/karfama/Busines-contact.ejs", { Contact: BusineContact, City: Location, ChooseCity: req.flash("ChodeCity") });
        } catch (error) {

        }
    };
    //post
    async BusinessContactPOST(req, res, next) {
        try {

            let ParentsIDCITY = req.body.parentID[req.body.parentID.length - 1];
            const newContact = new BusinesContact({
                UserId: req.session.user._id,
                Location: {},
                SocialMedia: {},
                PostalCode: req.body.PostalCode,
                TelNo: req.body.TelNo,
                MobileNo: req.body.MobileNo,
                FaxNo: req.body.FaxNo,
                Email: req.body.Email,
                Website: req.body.Website
            });
            if (ParentsIDCITY > 0) {
                let City = await Locations.find({ id: ParentsIDCITY });
                newContact.Location.City = City[0]._id;
                newContact.Location.Adress = req.body.Adress;
                newContact.Location.Lat = req.body.Lat
                newContact.Location.Long = req.body.Long
            } else {
                req.flash("ChodeCity", "لطفا یک شهر را انتخاب نمایید");
                return res.redirect("/dashboard/karfarma/BusinessContact")
            }

            if (req.body.SocialInstagram) {
                newContact.SocialMedia.SocialInstagram = req.body.SocialInstagram;
            } else {
                newContact.SocialMedia.SocialInstagram = "ندارد";
            }

            if (req.body.SocialTelegram) {
                newContact.SocialMedia.SocialTelegram = req.body.SocialTelegram;
            } else {
                newContact.SocialMedia.SocialTelegram = "ندارد";
            }

            if (req.body.SocialWhatsapp) {
                newContact.SocialMedia.SocialWhatsapp = req.body.SocialWhatsapp;
            } else {
                newContact.SocialMedia.SocialWhatsapp = "ندارد";
            }

            await newContact.save();

            return res.redirect('/dashboard/karfarma/BusinessContact')


        } catch (e) {

        }
    };
    // Location
    async LocationBusConGET(req, res, next) {
            try {
                const Location = await Locations.find({ parent_id: req.params.id });
                return res.status(200).send({
                    "City": Location
                })

            } catch (e) {

            }
        }
        // UPDATE
    async UpdateBusinessContactPOST(req, res, next) {
        try {
            let arry = req.body.parentID.length;
            let BusineContactes = await BusinesContact.find({ UserId: req.session.user._id });
            let data ={
                UserId: req.session.user._id,
                Location: {},
                SocialMedia: {},
            }
            
// *****Location*********
            // Chose
            if (arry > 1) {                
               let FindCity = req.body.parentID[req.body.parentID.length-1];
               if(FindCity == 0){
                 data.Location.City = BusineContactes[0].Location.City;
               }else{
                let City = await Locations.find({ id: FindCity });
                data.Location.City = City[0]._id;
               }
            } else {
                data.Location.City = BusineContactes[0].Location.City;
            }

// Adress
        if(req.body.Adress.length>0){data.Location.Adress = req.body.Adress}
        else{ data.Location.Adress =  BusineContactes[0].Location.Adress;};
// LAT
        if(req.body.Lat.length>0){data.Location.Lat = req.body.Lat}
        else{ data.Location.Lat =  BusineContactes[0].Location.Lat;};
// Long
        if(req.body.Long.length>0){data.Location.Long = req.body.Long}
        else{ data.Location.Long =  BusineContactes[0].Location.Long};

// *****Social-Media*********

//instagram
if(req.body.SocialInstagram.length > 0){
    data.SocialMedia.SocialInstagram = req.body.SocialInstagram
}else{
    data.SocialMedia.SocialInstagram = "ندارد";
}
//Telegram
if(req.body.SocialTelegram.length > 0){
    data.SocialMedia.SocialTelegram = req.body.SocialTelegram;
}else{
    data.SocialMedia.SocialTelegram = "ندارد";
}
//lWhatsapp
if(req.body.SocialWhatsapp.length > 0){
    data.SocialMedia.SocialWhatsapp = req.body.SocialWhatsapp;
}else{
    data.SocialMedia.SocialWhatsapp = "ندارد";
}
// PostalCode
if(req.body.PostalCode.length>0){
data.PostalCode = req.body.PostalCode;
}else{
    data.PostalCode = BusineContactes[0].PostalCode;
};

// TelNo
if(req.body.TelNo.length>0){
    data.TelNo = req.body.TelNo
    }else{
        data.TelNo = BusineContactes[0].TelNo;
}
// MobileNo
if(req.body.MobileNo.length>0){
    data.MobileNo = req.body.MobileNo
    }else{
        data.MobileNo = BusineContactes[0].MobileNo;
}
// FaxNo
if(req.body.FaxNo.length>0){
    data.FaxNo = req.body.FaxNo
    }else{
        data.FaxNo = BusineContactes[0].FaxNo;
}
// Email
   
if(req.body.Email.length>0){
    data.Email = req.body.Email
    }else{
        data.Email = BusineContactes[0].Email;
}
// Website
if(req.body.Website.length>0){
    data.Website = req.body.Website
    }else{
        data.Website = BusineContactes[0].Website;
}
  

await BusinesContact.updateOne({ UserId: req.session.user._id }, { $set: data });
return res.redirect("/dashboard/karfarma/BusinessContact");
            



        } catch (e) {

        }
    }


}