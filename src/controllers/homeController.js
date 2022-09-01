exports.paginaInicial =  (req, res) => {
  res.render('index')
  return
}

exports.testePost = (req, res, next) => {
  res.send(req.body)
  return
}