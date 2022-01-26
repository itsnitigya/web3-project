module.exports = (req, res, next) => {
    res.sendError = (err, msg = "Internal Server Error") => {
        console.log('[ERROR] ', err);
        res.status(400).send({ success: false, msg })
    }

    res.sendSuccess = (data, msg) => {
        res.status(200).send({ success: true, msg, ...(data && { data }) })
    }

    next();
}