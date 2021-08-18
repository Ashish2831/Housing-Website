const pathname = window.location.pathname.split('.')[0].replace('/', '');
const link = document.getElementById(pathname);
link.classList.add('active');

const scrollFunction = () => {
    const topId = document.getElementById('top');
    if (document.documentElement.scrollTop > 500) {
        topId.style.display = "inline";
    } else {
        topId.style.display = "none";
    }
}

window.onscroll = () => {scrollFunction()};
