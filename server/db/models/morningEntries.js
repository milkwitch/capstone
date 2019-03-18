const Sequelize = require('sequelize')
const db = require('../db')

const morningEntry = db.define('morningEntry', {
  sleep: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['0-2', '2-4', '4-6', '6-8', '8+']]
    }
  },
  social: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [
        ['More than usual', 'Usual amount', 'Less than usual', 'Not at all']
      ]
    }
  },
  sun: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5
    }
  },
  relax: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [
        ['More than usual', 'Usual amount', 'Less than usual', 'Not at all']
      ]
    }
  },
  exercise: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  work: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5
    }
  },
  meals: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 4
    }
  },
  prediction: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = morningEntry