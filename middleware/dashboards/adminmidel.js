module.exports = (req, res, next) => {
    if (req.session.role.body === "admin") {
        return next();

    } else {
        return res.redirect("/undifine")
    }
};