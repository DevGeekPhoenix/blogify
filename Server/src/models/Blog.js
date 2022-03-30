

import { writeFileSync, appendFileSync, existsSync, mkdirSync, readFileSync } from 'fs'
import path from 'path'

import { UID, removeLastCharacter, removeFirstCharacter} from '../lib'

const blogDirectoy = path.join(process.cwd(), '/src/db/blog.txt')

class BlogSchema {

  constructor() {

  }

  async create({ title, content, creatorId, imgurl }) {
    try {
      if (!title || !content || !creatorId || !imgurl) throw new Error('bad input')
      const data = JSON.stringify({ title, content, creatorId, imgurl, _id: UID() })
      
      
      const str = `${data},`

      if (!existsSync(blogDirectoy)) {
        mkdirSync(blogDirectoy)
      }

      appendFileSync(blogDirectoy, str, "utf8")

      return { title, data, creatorId }

    } catch (error) {
      throw error
    }
  }


  async findAll() {
    try {
      
      const x = removeLastCharacter(readFileSync(blogDirectoy))

      const y = JSON.parse(`[${x}]`)  

      return y

    } catch (error) {
      throw error
    }
  }

  async findById(_id) {
    try {

      return (await this.findAll()).find(item => item._id == _id)

    } catch (error) {
      throw error
    }
  }

  async getBlogsByUserID(_id) {
    try {
      return (await this.findAll()).filter(({ creatorId }) => creatorId == _id)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findByIdAndUpdate(_id, data) {

    try {
      const all = await this.findAll()

      const p = all.findIndex(item => item._id == _id)
  
      if (p < 0) throw new Error('bad request')

      Object.entries(data).forEach(([key, value]) => all[p][key] = value)

      const s = removeFirstCharacter(removeLastCharacter(JSON.stringify(all))) 
      
      writeFileSync(blogDirectoy, `${s},`, "utf8")

    } catch (error) {
      throw error
    }
    
  }
}

const Blog = new BlogSchema()

export default Blog