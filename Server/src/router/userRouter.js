

import express from 'express'

import User from '../models/User'
import AuthorizeUser from '../lib/auth'
const router = express.Router()

router.post('/signup', async (req, res) => {
  
  try {
    console.log('yes')
    console.log(req.body)
    if (!req.body.username || !req.body.name || !req.body.imgurl) return res.status(522).json({ msg: 'bad input' })

    const token = await User.signup({username: req.body.username,
      name: req.body.name,
      imgurl: req.body.imgurl
    })

    if (!token) return res.status(500).json({ msg: 'oops, somethings wrong' })
    
    return res.status(200).json({ token })
    
  } catch (error) {
    return res.status(500).json({ msg: 'bad request' })
  }

})

router.get('/', async (req, res) => {
  return res.status(200).json(await User.findAll())
})

router.post('/login', async (req, res) => {
  try {
    if (!req.body.username || req.body.password !== '1111') return res.status(522).json({ msg: 'bad request' })

    const token = await User.login({ username: req.body.username, password: req.body.password })
    
    return res.status(200).json({ token })
    
  } catch (error) {
    res.status(522).json({ msg: 'bad request' })
  }
})

router.post('/me', async (req, res, next) => {
  try {
    
    const user = await AuthorizeUser(req.user)

    if (!user || !user._id) throw new Error('not logged in')

    return res.status(200).json(user)

  } catch (error) {
    return res.status(522).json({msg: 'not logged in'})
  }
})

router.post('/edit', async (req, res, next) => {
  try {

    const thisUser = await AuthorizeUser(req.user)

    if (!thisUser || !thisUser._id) throw new Error('anuthorized')

    if (!req.body.data) throw new Error('bad request')

    const realData = {
      name: req.body.data.name,
      phoneNumber: req.body.data.phoneNumber,
      imgurl:  req.body.data.imgurl,
    }

    await User.findByIdAndUpdate(thisUser._id, realData)

    return res.status(200).json({ msg: 'ok' })

  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
})

export default router



