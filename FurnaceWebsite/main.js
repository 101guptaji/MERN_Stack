
/**
   * Mobile nav toggle
   */
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
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
document.querySelectorAll('.nav a').forEach(nav => {
    nav.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
            mobileNavToogle();
        }
    });

});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll('.nav .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
    });
});


/*
*   Contact-form submit action
*/
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var name = document.getElementById('name').value;

    // Show alert with confirmation message
    alert(`Thank you ${name}!\nWe got your query.\nWe will get back to you soon.`);

    // Reset the form
    this.reset();
});