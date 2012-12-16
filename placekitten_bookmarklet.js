answer = window.prompt('Enter desired kitten widthxheight, e.g. 100x200');
if (/x/.test(answer)) {
  width = answer.split('x')[0];
  height = answer.split('x')[1];
  window.location.href = 'http://placekitten.com/'+width+'/'+height;
} else if (/\//.test(answer)) {
  width = answer.split('/')[0];
  height = answer.split('/')[1];
  window.location.href = 'http://placekitten.com/'+width+'/'+height;
} else {
  alert('You need an x in there, like 100x200');
}
