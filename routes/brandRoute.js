import express from "express";
import {
  createBrandCtrl,
  getAllBrandsCtrl,
  getSingleBrandCtrl,
  updateBrandCtrl,
  deleteBrandCtrl,
} from "../controllers/brandCtrl.js";

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import isAdmin from "../middlewares/isAdmin.js";
isAdmin;

const brandRouter = express.Router();

brandRouter.post("/", isLoggedIn, isLoggedIn, isAdmin, createBrandCtrl);
brandRouter.get("/", getAllBrandsCtrl);
brandRouter.get("/:id", getSingleBrandCtrl);
brandRouter.put("/:id", isLoggedIn, isAdmin, updateBrandCtrl);
brandRouter.delete("/:id", isLoggedIn, isAdmin, deleteBrandCtrl);

export default brandRouter;
