import { Router } from 'express'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Grab A Flight!!' })
})

export { 
  router
}
