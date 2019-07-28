const userController = require("./userController");
const swiperController = require("./swiperController");
const positionController = require("./positionController");
const shopController = require("./shopController");
const goodsController = require("./goodsController");
const payController = require("./payController");
const orderController = require("./orderController");
const evaluateController = require("./evaluateController");
const carController = require("./carController");
const collectionController = require("./collectionController");
const router = (app) => {
	// 用户
	app.use("/user", userController);
	// 轮播图
	app.use("/swiper", swiperController);
	// 位置信息
	app.use("/position", positionController);
	// 购物车
	app.use("/car", carController);
	// 收藏
	app.use("/collection", collectionController);
	// 商店相关
	app.use("/shop", shopController);
	// 商品相关
	app.use("/goods", goodsController);
	// 支付相关
	app.use("/pay", payController);
	// 订单相关
	app.use("/order", orderController);
	// 评价相关
	app.use("/evaluate", evaluateController);
};
module.exports = router;