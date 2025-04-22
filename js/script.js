// Click to flip javascript... Code developed with the help of W3Schools How To- Flip Card (https://www.w3schools.com/howto/howto_css_flip_card.asp) and Code Pen (https://codepen.io/mondal10/pen/WNNEvjV)

document.querySelectorAll('.card-container').forEach(container => {
  const card = container.querySelector('.card');

  container.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

// Attempt at making the flip effect keyboard accessible
  container.setAttribute('tabindex', '0');
  container.setAttribute('role', 'button');
  container.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
  });
});
