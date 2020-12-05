const imgLinks = [
  {src: 'img/image-1.jpg', text: 'שטחי מסחר פז סנטר'},
  {src: 'img/image-2.jpg', text: 'טיפז'},
  {src: 'img/image-3.jpg', text: 'yellow click&pick'}
]
var i = 0;

setInterval(function() {
  document.getElementById('image').src = imgLinks[i].src;
  document.getElementById('text').innerHTML = imgLinks[i].text;
  i++;
  if (i >= imgLinks.length) {
    i = 0;
  }
} ,3000);
