const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
    document.querySelector('nav').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('fa-solid');
    mobileNavToggleBtn.classList.toggle('fa-x');

    if (mobileNavToggleBtn.children[0].classList.contains('fa-solid')) {
        mobileNavToggleBtn.children[0].classList.remove('fa-bars');
        mobileNavToggleBtn.children[0].classList.remove('fa-solid');
    }
    else {
        mobileNavToggleBtn.children[0].classList.add('fa-bars');
        mobileNavToggleBtn.children[0].classList.add('fa-solid');
    }
}
mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('.navmenu a').forEach(nav => {
    nav.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
            mobileNavToogle();
        }
    });

});