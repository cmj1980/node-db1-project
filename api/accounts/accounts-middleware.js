const Account = require('./accounts-model');

const db = require('../../data/db-config');

exports.checkAccountPayload = (req, res, next) => {
  const err = { status: 400 }
  const { name, budget } = req.body
  if(name === undefined || budget === undefined) {
    err.message = 'name and budget are required'
  } else if (typeof name !== 'string') {
    err.message = 'name of account must be a string'
  } else if (name.trim().length < 3 || name.trim().length > 100){
    err.message = 'name of account must be between 3 and 100'
  }else if (typeof budget !== 'number' || isNaN(budget)) {
    err.message = 'budget of account must be a number'
  } else if (budget < 0 || budget > 1000000) {
    err.message = 'budget of account is too large or too small'
  }
  if(err.message) {
    next(err)
  } else {
    next()
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
