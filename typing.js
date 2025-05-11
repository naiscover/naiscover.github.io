document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.typing');
  const text = element.textContent;
  element.textContent = '';
  let i = 0;

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  };
  type();
});
