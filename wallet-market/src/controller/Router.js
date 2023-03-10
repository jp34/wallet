const express = require("express");
const MarketplaceController = require("./Marketplace");

const router = express.Router();
const marketplace = new MarketplaceController();

router.get('/', marketplace.listView);
router.get('/:id', marketplace.detailView);

module.exports = router;
