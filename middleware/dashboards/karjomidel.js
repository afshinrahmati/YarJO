module.exports = (req, res, next) => {
    if (req.session.role.body === "Karjo") {
        return next();

    } else {
        return res.redirect("/undifine")
    }
};