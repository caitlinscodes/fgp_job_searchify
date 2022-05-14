exports.getPrivate = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "private data would be here"
  })
}