function showHide(id) {
  console.log('test', id);
  const el = document.getElementById(id);
  if (el.style.visibility === 'hidden') {
    el.style.visibility = 'visible';
  } else {
    el.style.visibility = 'hidden';
  }
  // for (let i = 0; i < toggleBtn.length; i++) {
  //   const showHide = document.getElementsByClassName('show-hide')[i];

  //   if (showHide.style.display === 'none') {
  //     showHide.style.display = 'block';
  //   } else {
  //     showHide.style.display = 'none';
  //   }
  // }
}
// var toggleBtn = document.querySelectorAll('.toggle-btn');
// for (let i = 0; i < toggleBtn.length; i++) {
//   toggleBtn[i].addEventListener('click', showHide);
// }
