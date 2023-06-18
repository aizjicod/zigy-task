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

async function testGetSpreadSheetValues() {
}

router.get('/', async function(req, res, next) {
  try {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId,
      sheetName,
      auth
    })
    console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    res.render('index', { title: 'Express' });
  } catch(error) {
    res.render('index', { message: error.message, error: error.stack});
  }
});

module.exports = router;
