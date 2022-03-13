var padContent = document.getElementById('pad-content'),
  padHeader = document.getElementById('pad-header'),
  padTitle = document.getElementById('pad-title'),
  padBody = document.getElementById('pad-body'),
  padInput = document.getElementById('pad-input');

function toggleHeaderShadow() {
  var scrollTop = padInput.scrollTop;
  if (scrollTop > 0) {
    padHeader.classList.add('is-overlapping');
    padBody.style.backgroundPosition = '0 ' + -scrollTop + 'px';
  } else {
    padHeader.classList.remove('is-overlapping');
    padBody.style.backgroundPosition = '0 0';
  }
}

function removePage() {
  localStorage.clear();
  padContent.classList.add('removing-page');
  setTimeout(function () {
    padContent.classList.remove('removing-page');
    padTitle.value = '';
    padInput.value = '';
  }, 1000);
}

function saveTextAsFile() {
  var documentContent = padInput.value;
  var textFileAsBlob = new Blob([documentContent], {
    type: 'text/plain'
  });
  var fileNameToSaveAs = padTitle.value ? padTitle.value : 'Untitled Note';
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  document.getElementsByClassName('pad-binding')[0].appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
}

function saveToLocalStorage() {
  var documentTitle = padTitle.value;
  var documentContent = padInput.value;
  localStorage.setItem('title', documentTitle);
  localStorage.setItem('content', documentContent);
}

function loadFromLocalStorage() {
  if (localStorage.content) {
    padInput.value = localStorage.content;
  }
  if (localStorage.title) {
    padTitle.value = localStorage.title;
  }
}

padTitle.addEventListener('input', saveToLocalStorage);
padInput.addEventListener('scroll', toggleHeaderShadow);
padInput.addEventListener('input', saveToLocalStorage);
window.addEventListener('load', loadFromLocalStorage);