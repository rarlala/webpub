const $menu = document.getElementById('main-header');

const MouseScroll = () => {
    const yOffset = window.pageYOffset;
    $menu.style.background = yOffset != 0 ? 'darkblue' : 'transparent';
    $menu.style.transition = yOffset != 0 ? '1s background' : '';
};

const moveTop = () => {
    window.scroll({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
};

window.onscroll = MouseScroll;