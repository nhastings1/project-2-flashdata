function showHide() {
  const showHide = document.querySelectorAll('show-hide');

  if (showHide.style.display === 'none') {
    showHide.style.display = 'block';
  } else {
    showHide.style.display = 'none';
  }
}

document.querySelectorAll('toggle-btn').addEventListener('click', showHide);
