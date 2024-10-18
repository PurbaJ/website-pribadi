// toggle class active

const navbarNav = document.querySelector('.navbar-nav');

// ketika menu di klik
document.querySelector('#web-menu').onclick =  () => {
    navbarNav.classList.toggle('active')
};

// klik di luar navbar untuk keluar dari navbar

const web =  document.querySelector('#web-menu');

document.addEventListener('click', function(e) {
    if(!web.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }

} )

// Efek saat navbar di click dan digulir
let section=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset && top<offset +height){
            navLinks.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}




     
