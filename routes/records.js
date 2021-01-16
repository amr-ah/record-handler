const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const recordController = require('../controllers/RecordController');
router.post('/records', recordController.getRecords);

module.exports = router;