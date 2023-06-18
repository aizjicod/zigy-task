var express = require('express');
var router = express.Router();
require('dotenv').config()
const {
  getAuthToken,
  getSpreadSheetValues
} = require('../googleSheetsService');

const spreadsheetId = process.env.SHEETS_ID;
const sheetName = process.env.SHEETS_NAME;

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId,
      sheetName,
      auth
    })
    res.render('index', { data: response.data.values});
  } catch(error) {
    res.render('error', { message: error.message, error: error.stack});
  }
});

module.exports = router;
