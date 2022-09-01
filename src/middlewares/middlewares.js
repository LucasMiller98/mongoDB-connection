exports.globalMiddleWare = (req, res, next) => {

  // let { client } = req.body

  // if(client) {
  //   client = client.replace('Miller', 'NÃO USE MILLER')
  //   console.log(`Vi que você postou ${client}`)
  //   console.log()
  // }
  

  next()
}

exports.middlewareTest = (req, res, next) => {
  console.log('Sou um middleware de teste')
}