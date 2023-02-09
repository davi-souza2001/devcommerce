import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { routesUser } from './routes/users-routes'
import { routesAvatar } from './routes/avatars-routes'
import { routesProducts } from './routes/products-routes'
import { routesWishlist } from './routes/wishlists-routes'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.use(routesUser)
app.use(routesAvatar)
app.use(routesProducts)
app.use(routesWishlist)

app.listen(process.env.PORT || 3333)
