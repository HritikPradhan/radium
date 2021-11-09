const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/movies', function (req, res) {
    res.send(['titanic','krish','daygone','eternals'])
});
router.get('/movies/:movieid', function (req, res) {
    let value=req.params.movieid
    console.log(value)
    res.send('')
});
router.get('/movies', function (req, res) {
    let film=['titanic','zoom','eternals','doom']
    res.send(film)
});
router.get('/moviess/:index', function(req, res) {
    let film = ['titanic','zoom','eternals','doom']
    let value = req.params.index
    let watch = film[value]
    //console.log(watch,"hi")
    res.send(watch)
    if(value>=film.length){
     res.send("ERROR")
    }
    else{
    res.send(watch)
    }
});
router.get('/films', function(req,res){
  let movie=[ {'id': 1,'name': 'The Shining'}, {'id': 2,'name': 'Incendies'}, {'id': 3, 'name': 'Rang de Basanti'}, {'id': 4, 'name': 'Finding Demo'}]
  res.send(movie)
});
router.get('/films2/:filmId', function(req,res){
    let movie=[ {'id': 1,'name': 'The Shining'}, {'id': 2,'name': 'Incendies'}, {'id': 3, 'name': 'Rang de Basanti'}, {'id': 4, 'name': 'Finding Demo'}]
    let value=req.params.filmId
    let film =movie.filter(x=>x.id==value)
    res.send(value>=movie.length?'not a valid id':film[0].name)
    
  });




module.exports = router;