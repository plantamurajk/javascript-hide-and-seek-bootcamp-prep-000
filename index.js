function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var ranks = document.getElementsByClassName('ranked-list')
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + 1
  }
}

var deepest = document.querySelector('#grand-node').firstElementChild

function deepestChild(node){
  if (deepest.firstElementChild != null){
    deepest = deepest.firstElementChild
    deepest = deepestChild(deepest)
  }
  return deepest
}