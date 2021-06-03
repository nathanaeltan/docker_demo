const protect = async (req, res, next) => {
  const { user } = req.session;
    
  if (!user) {
    return res.status(403).json({ status: "fail", message: "Unauthorized" });
  }
  req.user = user
  next()
};

module.exports = protect;