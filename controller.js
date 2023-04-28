const Manual = require("./ManualModel")

const addManual = async(req, res) => {
  const manual = new Manual(req.body)
  try {
    await manual.save()
    res.status(201).json({message: "success"})
  } catch (error) {
    res.status(500).json(error)
  }

}

const getManuals = async(req, res) => {
  try {
    const manuals = await Manual.find({})
    res.status(201).send(manuals)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getManual = async(req, res) => {
  try {
    const manual = await Manual.find({_id: req.params.id})
    res.status(201).send(manual)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateManual = async(req, res) => {
  try {
    const manual = await Manual.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
    )
    if (!manual) {
      res.status(404).send('not found')
    }
    res.status(201).send(manual)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteManual = async(req, res) => {
  try {
    await Manual.deleteOne({_id: req.params.id})
    res.status(201).send("manual deleted")
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  addManual,
  getManuals,
  getManual,
  updateManual,
  deleteManual
}