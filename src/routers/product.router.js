const productController = require("../controllers/productController");
const router = require("express").Router();

//ADD SIZE PRODUCT
router.post("/AddSizeProduct", productController.addSizeProduct);
//GET ALL SIZE PRODUCT
router.get("/GetAllSize", productController.getAllSize);
//GET ALL PRODUCT
router.get("/GetAllProduct", productController.getAllProduct);
//ADD PRODUCT
router.post("/AddProduct", productController.addProduct);
//GET SEX
router.get("/GetAllSex", productController.getAllSex);
//ADD SEX
router.post("/AddSex", productController.addSex);
//GET ALL PRODUCT TYPE
router.get("/GetAllProductType", productController.getAllProductType);
//ADD PRODUCT TYPE
router.post("/AddProductType", productController.addProductType);
//GET ALL PRODUCT BY ID SEX
router.get("/GetAllProductBySex", productController.getAllProductBySex);
//
router.get('/latest/:quality', productController.getProductsByquality);
//GET ALL PRODUCT BY SEX AND PRODUCT TYPE
module.exports = router;