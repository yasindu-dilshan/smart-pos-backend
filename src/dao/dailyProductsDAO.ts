import moment from "moment";
import Dao from "../interfaces/dao";
import DailyProduct, {
  DailyProductDocument,
} from "../schemaModels/dailyProduct.model";

export default class DailyProductsDAO extends Dao {
  constructor() {
    super(DailyProduct);
  }

  public async getDailyProductsOfOneSalesperson(
    id: string
  ): Promise<DailyProductDocument[]> {
    const startDate = moment().startOf("day");
    const endTime = moment().endOf("day");
    return this.model
      .find({
        salesperson: id,
        archived: false,
        createdAt: { $gte: startDate, $lt: endTime },
      })
      .populate("dailyProducts.product");
  }
}
