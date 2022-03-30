
import BlogRouter from './blogRouter'
import UserRouter from './userRouter'

export default app => {
  app.get('/', (req, res, next) => {
    res.send('<h1> hello world from blogtor </h1>')
  })
  
  app.use('/blog', BlogRouter)
  app.use('/user', UserRouter)

}