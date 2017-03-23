let db = require('../models')

module.exports = {
  index: function(req, res, next){
    db.Memo.findAll().then(function(items){
     res.json(items)
    })
  },
  create: function(req, res, next){
    db.Memo.create({
      title: req.body.title,
      content: req.body.content,
      completed: false
    }).then(() => {
      res.json({
        success: true,
        msg: 'Success submit an memo'
      })
    })
  }
}
