exports.errorFunc = (err, req, res, next) => {
    return res.status(err.status || 500).json({ error: err.massage || "server error" })

}


exports.wrongPage = (req, res, next) => {
    res.status(404).json("page not found");

}



