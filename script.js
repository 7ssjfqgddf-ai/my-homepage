document.getElementById('toggle').addEventListener('click', () => {
  const box = document.getElementById('msg');
  box.style.display = (box.style.display === 'none') ? '' : 'none';
});
