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
  },
  update: function(req, res, next){
    db.Memo.update({
      title: req.body.title,
      content: req.body.content,
      completed: req.body.completed
    }, {
      where: {
        id: req.params.id
      }
    }).then((result) => {
      if (!result) {
        res.json({
          success: false,
          msg: 'fail when trying to update the data'
        })
      }

      res.json({
        success: true,
        msg: 'Data updated.'
      })
    })
  },
  destroy: function(req, res, next){
    db.Memo.destroy({
      where: {
        id: req.params.id
      }
    }).then((deletedQuestion) => {
      res.json({
        success: true,
        msg: 'Question deleted'
      })
    })
  }
}
