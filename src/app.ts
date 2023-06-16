import express from 'express';
import "express-async-errors" // needs to be imported before routers and other stuff!
import loginRouter from './routes/login';
import shopListShopItemsRouter from './routes/shoplistshopitems';
import usersRouter from './routes/users';
import userRouter from './routes/user';
import shopListRouter from './routes/shoplist';
import shopperRouter from './routes/shopper';
import shopItemRouter from './routes/shopitem';


const app = express();

// Middleware:
app.use('*', express.json())

// Routes
app.use(shopListShopItemsRouter) // wird hier ohne Präfix registriert, da er bereits einen Präfix hat (dies ist aber die Ausnahme)
app.use("/login", loginRouter)   // wird erst später implementiert, hier nur Dummy; hat aber bereits einen Präfix

// Registrieren Sie hier die weiteren Router (mit Pfad-Präfix):
app.use("/users",usersRouter)
app.use("/user",userRouter)
app.use("/shoplist",shopListRouter)
app.use("/shopper", shopperRouter)
app.use("/shopitem",shopItemRouter)
app.use("/login",loginRouter)


export default app;