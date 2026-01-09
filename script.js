// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Dark mode toggle
function toggleDarkMode(){
    document.body.classList.toggle('dark-mode');
}

// Scroll animations
const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('.card');

const options = { threshold:0.1 };
const observer = new IntersectionObserver(function(entries){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, options);

sections.forEach(section => observer.observe(section));
cards.forEach(card => observer.observe(card));

// Header scroll effect
window.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    if(window.scrollY>50){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }

    // Active menu
    let current='';
    sections.forEach(section=>{
        const sectionTop = section.offsetTop-80;
        if(scrollY>=sectionTop) current = section.getAttribute('id');
    });

    document.querySelectorAll('nav ul li a').forEach(link=>{
        link.classList.remove('active');
        if(link.getAttribute('href').includes(current)) link.classList.add('active');
    });
});
