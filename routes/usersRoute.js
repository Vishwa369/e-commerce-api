import express from "express";
import {
  registerUserCtrl,
  LoginUserCtrl,
  getUserProfileCtrl,
  updateShippingAddressCtrl,
} from "../controllers/usersCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/Login", LoginUserCtrl);
userRoutes.get("/profile", isLoggedIn, getUserProfileCtrl);
userRoutes.put("/update/shipping", isLoggedIn, updateShippingAddressCtrl);

export default userRoutes;
