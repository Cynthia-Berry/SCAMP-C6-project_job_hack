const errorCodes = require("../enums/errorCodes.enum");

const databaseError = error => {
  const message = (error === null || typeof error === 'undefined') ? 'FAILURE, Internal Server Error'
    : error['errors'][Object.keys(error['errors'])[0]]['message'];
  return {status: errorCodes.Error400.code, type: errorCodes.Error400.type, message};
}

module.exports = {databaseError};
