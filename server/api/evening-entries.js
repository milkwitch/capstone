const router = require('express').Router()
const {EveningEntry} = require('../db/models')
const {moodNetwork, savenet} = require('../brain-model/brain-model')
const {jsontoTrainingData} = require('../brain-model/translator-funcs')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const eveningEntries = await EveningEntry.findAll()
    res.json(eveningEntries)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newEveningEntry = await EveningEntry.create(req.body)
    const trainingData = jsontoTrainingData(req.body)
    //console.log("here's the trainingData: ", trainingData)
    //console.log("here's the network pre-training: ", moodNetwork.toJSON())
    moodNetwork.train(trainingData)
    //console.log("and here it is post-training: ", moodNetwork.toJSON())
    savenet(moodNetwork, './network.json')
    res.send(newEveningEntry)
  } catch (error) {
    next(error)
  }
})