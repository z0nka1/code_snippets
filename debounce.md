function debounce() {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => 
