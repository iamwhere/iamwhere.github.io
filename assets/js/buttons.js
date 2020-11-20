function show(div) {
  var showDIV = document.getElementById(div);
  showDIV.classList.remove('hidden');
};

function hide(div) {
  var hideDIV = document.getElementById(div);
  hideDIV.classList.add('hidden');
};



function addButton(button) {
  var reveal = document.getElementById(button);
  reveal.classList.remove('hidden')
}

function removeButton(button) {
  var remove = document.getElementById(button);
  remove.classList.add('hidden')
};



function addBlur() {
  var clear = document.getElementById('pano');
  clear.classList.add('blur');
};

function removeBlur() {
  var blurred = document.getElementById('pano');
  blurred.classList.remove('blur');
};
