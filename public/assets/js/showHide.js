function showHide(id) {
  console.log('test', id);
  const el = document.getElementById(id);
  if (el.style.visibility === 'hidden') {
    el.style.visibility = 'visible';
  } else {
    el.style.visibility = 'hidden';
  }
}
