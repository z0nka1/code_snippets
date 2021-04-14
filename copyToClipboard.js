function copyToClipboard (text, cb) {
  const input = document.createElement('input');
  input.setAttribute('readonly', 'readonly');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.setSelectionRange(0, input.value.length);
  input.select();
  if (document.execCommand('copy') && typeof cb === 'function') {
    cb();
  }
  document.body.removeChild(input);
}
