
import { writeFileSync, appendFileSync, existsSync, mkdirSync, readFileSync } from 'fs'
import path from 'path'

import { UID, removeLastCharacter, removeFirstCharacter } from '../lib'
import dotenv from 'dotenv'

import jwt from 'jsonwebtoken'

dotenv.config();

const userDirectory = path.join(process.cwd(), '/src/db/user.txt')

class UserSchema {

  constructor() {

  }

  async create({ name, phoneNumber, imgurl }) {
    try {
      if (!name || !phoneNumber || !imgurl) throw new Error('bad input')
      const dda = { name, phoneNumber,imgurl, _id: UID() }
      const data = JSON.stringify(dda)
      const str = `${data},`

      if (!existsSync(userDirectory)) {
        mkdirSync(userDirectory)
      }

      appendFileSync(userDirectory, str, "utf8")

      return dda

    } catch (error) {
      throw error
    }
  }


  async findAll() {
    try {
      
      const x = removeLastCharacter(readFileSync(userDirectory))

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

  async signup({ username, name, imgurl }) {
    
    try {

      if (!username || !name || !imgurl) throw new Error('bad request')

      const thisUser = { username, name, imgurl, _id: UID() }
      const data = JSON.stringify(thisUser)
      const str = `${data},`
            
      if (!existsSync(userDirectory)) {
        mkdirSync(userDirectory)
      }

      appendFileSync(userDirectory, str, "utf8")

      return this.createToken(thisUser._id)
      
    } catch (error) {
      throw error
    }
  }

  createToken(_id) {
    return jwt.sign(
      {
        _id,
      },
      'SECRET'
    )
  }

  async login({ username, password }) {
    try {

      const thisUser = (await this.findAll()).find(user => user.username === username)

      if (!thisUser || !thisUser._id) throw new Error('bad request')

      return this.createToken(thisUser._id)

    } catch (error) {
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
      
      writeFileSync(userDirectory, `${s},`, "utf8")

    } catch (error) {
      throw error
    }
    
  }
}

const User = new UserSchema()

export default User