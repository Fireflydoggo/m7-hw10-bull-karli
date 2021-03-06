// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE
var nameSpan = document.getElementById('name')
var cookiesArr = document.cookie.split('; ')
var nameSpanCookie = cookiesArr.find(function(cookieStr) {
  return cookieStr.startsWith('name')
})
var textarea = localStorage.getItem('textarea')


formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  console.log('saved')
  // save name element's content to cookies
  var cookie = document.cookie
  if (cookie) {
    nameSpan = cookie
  }
  document.cookie = 'span=' + nameSpan.textContent + ';'
  // save textarea's content to localstorage
  var textarea = textareaInput.value
  localStorage.setItem('textarea', textarea)
  formEl.textContent = nameSpan + " " + textarea
  // YOUR CODE HERE
  

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE
  var textarea = getElementById('textarea')
  document.getElementById('textarea').value = "";
  localStorage.clear('textarea');
  

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp