const express = require("express");
const MarketplaceController = require("./Marketplace");

const router = express.Router();
const marketplace = new MarketplaceController();

router.get('/market', marketplace.listView);
router.get('/market/:id', marketplace.detailView);
router.get('/market/cart', marketplace.cartView);

module.exports = router;
