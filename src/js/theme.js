export default document
  .querySelector('.themetoggle')
  .addEventListener('click', event => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    addDarkClassToHTML();
  });

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document
        .querySelector('.footer__container')
        .classList.add('dark__footer');
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
      document.querySelector('body').classList.add('dark');
      document.querySelector('.modal').classList.add('dark');
      document
        .querySelector('.member__link')
        .classList.add('dark_theme-text');
      document.querySelector('.header__title').classList.add('dark_theme-title');
      console.log('text', document.querySelector('.header__title'));
      console.log('dark');
    } else {
      console.log('light');
      document
        .querySelector('.footer__container')
        .classList.remove('dark__footer');
      document.querySelector('.themetoggle span').textContent = 'wb_sunny';
      document.querySelector('body').classList.remove('dark');
      document.querySelector('.modal').classList.remove('dark');
      document
        .querySelector('.member__link')
        .classList.remove('dark_theme-text');
      document.querySelector('.header__title').classList.remove('dark_theme-title');
    }
  } catch (err) {}
}

addDarkClassToHTML();