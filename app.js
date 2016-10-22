let superData = [
  {name: 'Thor', number:'412-867-5309', affiliation:'Marvel', photo_url:'http://static.srcdn.com/wp-content/uploads/Chris-Hemsworth-Thor-Art-by-PC-Designs.jpg'},
  {name: 'Deadpool', number:'412-555-555', affiliation:'Marvel', photo_url:'http://4.bp.blogspot.com/-NSdcA-OMJrY/UddmoLOymgI/AAAAAAAAAIM/sjus7HDdZfM/s400/Deadpool.jpeg'},
  {name: 'Bane', number:'412-666-6666', affiliation:'DC', photo_url:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1ZYM46xvP_KNuTfOqVFlj4o1t6XKODGEJ9VcS6VhCBbt2OgRY'},
  {name: 'Black Panther', number:'754-234-2342', affiliation:'Marvel', photo_url:'http://www.sideshowtoy.com/wp-content/uploads/2016/04/marvel-captain-america-civil-war-black-panther-sixth-scale-hot-toys-silo-902701.png'},
  {name: 'Aquaman', number:'756-233-9698', affiliation:'DC', photo_url:'https://images-na.ssl-images-amazon.com/images/M/MV5BYjMyZjZmZjItZjYwMC00MzQzLWJjYmUtMjI4ZDAyZDNjYjE3XkEyXkFqcGdeQXVyMzY0NTA5NDU@._V1_UY268_CR147,0,182,268_AL_.jpg'},
  {name: 'The Joker', number:'???-???-????', affiliation:'DC', photo_url:'http://www.sideshowtoy.com/wp-content/uploads/2016/07/dc-comics-the-joker-purple-coat-version-sixth-scale-suicide-squad-silo-902795-1.png'},
  {name: 'Iron Man', number:'342-858-6394', affiliation:'Marvel', photo_url:'http://vignette1.wikia.nocookie.net/ironman/images/2/2a/PMwIexx.png/revision/latest?cb=20160609170348'},
  {name: 'Batman', number:'1-800-BATS', affiliation:'DC', photo_url:'http://static5.comicvine.com/uploads/scale_small/13/134088/2664527-tumblr_lypuvknpzf1qfbkomo1_1280.jpg'},
  {name: 'HULK', number:'1-800-HULKSMASH', affiliation:'Marvel', photo_url:'http://www.classicmarvelforever.com/cms/assets/images/profiles/comic_book/Hulk2.jpg'},
  {name: 'Green Arrow', number:'938-232-5852', affiliation:'DC', photo_url:'http://vignette3.wikia.nocookie.net/injusticegodsamongus/images/c/cb/Green_Arrow_1.png/revision/latest?cb=20130704174656'}
]



angular
  .module("superApp", [])
  .controller("superCtrl", [ superController])
