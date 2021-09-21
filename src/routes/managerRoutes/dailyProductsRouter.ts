import { Router } from "express";
import AddDailyProductsHandler from "../../services/managerServices/addDailyProducts/addDailyProductsHandler";

const dailyProductsRouter = Router();

dailyProductsRouter
  .route("/")
  .post(AddDailyProductsHandler.addDailyProducts);

export default dailyProductsRouter;
