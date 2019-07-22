import { encString, decString } from "../modules/password"

export default (req, res, next) => {
  if(req.path() !== '/super') {
    const cookies = req.cookies.idmoreacademy_session
    if(cookies) {
      let sessiondata = decString(cookies)
      sessiondata = JSON.parse(sessiondata)    
      if(sessiondata.username) {
        // go ahead
        next()
      } else {
        // redirect to login
        res.redirect("/super", next)
      }
    }else {
      // redirect to login
      res.redirect("/super", next)
    }
  } else {
    next()
  }
}
