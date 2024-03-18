"use strict";

let content = document.getElementById('content');
const exportButton = document.getElementById('export');

function generateElement(tagName) {
  tagName != 'hr' ? content.innerHTML += `<${tagName} contenteditable="true">Voici le ${tagName}</${tagName}>`: content.innerHTML += `<${tagName}>`;
}

function addEventListenersToButtons(buttonIds) {
  buttonIds.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      generateElement(buttonId);
    });
  });
}

addEventListenersToButtons(['h1', 'h2', 'h3', 'p', 'hr']);

function exportHtml() {
  let data = content.innerHTML;
  let blob = new Blob([data], { type: 'text/plain' });
  let url = window.URL.createObjectURL(blob);
  let a = document.createElement('a');
  a.href = url;
  a.download = 'export.html';
  a.click();
  window.URL.revokeObjectURL(url);
}

exportButton.addEventListener('click', exportHtml);
  
