import express from "express";
import {
  createCouponCtrl,
  getAllCouponsCtrl,
  getCouponCtrl,
  getUpdateCtrl,
  getDeleteCtrl,
} from "../controllers/couponCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import isAdmin from "../middlewares/isAdmin.js";

const couponsRouter = express.Router();

couponsRouter.post("/", isLoggedIn, isAdmin, createCouponCtrl);
couponsRouter.get("/", getAllCouponsCtrl);
couponsRouter.get("/:id", getCouponCtrl);
couponsRouter.put("/update/:id", isLoggedIn, isAdmin, getUpdateCtrl);
couponsRouter.delete("/delete/:id", isLoggedIn, isAdmin, getDeleteCtrl);

export default couponsRouter;
