module.exports = (req, res, next) => {
    if (req.session.role.body === "Karfarma") {
        return next();

    } else {
        return res.redirect("/undifine")
    }
};