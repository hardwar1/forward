$(function(){

document.querySelectorAll(".ibg").forEach(el => {
  if (el.querySelector('img')) {
    test = el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
  }
  console.log(el.style.backgroundImage);
  console.log(test);
});




});