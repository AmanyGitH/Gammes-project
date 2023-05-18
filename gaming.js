// Get the navigation elements and sections on the page
const nav = document.querySelector('header .nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".animex");
const tatalSection = allSection.length;
//resposive navbar
let menuBar=document.querySelector("header .togglemenu");
menuBar.onclick=() =>{
menuBar.classList.toggle("fa-times");
nav.classList.toggle("active");
}
let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header .nav a');
window.onscroll=() =>{
  menuBar.classList.remove('fa-times');
  nav.classList.remove('active')

}
section.forEach(sec => {
let top=window.scrollY;
let height=sec.offsetHeight;
let offset=sec.offsetTop - 150;
let id=sec.getAttribute('id');

if(top >= offset && top > height){
  navLinks.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header .nav a[href*='+id+']').classList.add('active');
  })
}
});
// Add click event listener to each navigation link
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');

  a.addEventListener('click', function() {
    // Remove "back-section" class from all sections
    removeBackSection();

    // Add "back-section" class to previously active section (if any)
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);  
      }
      // Remove "active" class from all navigation links
      navList[j].querySelector("a").classList.remove("active");
    }
    // Add "active" class to clicked navigation link
    this.classList.add("active");
    // Show corresponding section on page
    showSection(this);
  });
}

// Remove "back-section" class from all sections
function removeBackSection() {
  for (let i = 0; i < tatalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

// Add "back-section" class to a specific section
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

// Show a specific section on the page
function showSection(element) {
  // Remove "active" class from all sections
  for (let i = 0; i < tatalSection; i++) {
    allSection[i].classList.remove("active")
  }
  // Get the ID of the target section
  const target = element.getAttribute("href").split("#")[1];
  // Add "active" class to target section
  document.querySelector("#" + target).classList.add("active");
} 

// Update navigation links based on current section
function updateNav(ele) {
  for (let i = 0; i < totalNavList; i++) {
    // Remove "active" class from all navigation links
    navList[i].querySelector("a").classList.remove("active");
    const target = ele.getAttribute("href").split("#")[1];
    // Add "active" class to navigation link corresponding to current section
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
//sticky navbar
window.addEventListener('scroll', () =>{
    let header=document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0)
});
// JavaScript code to trigger the animation on scroll
function handleScroll() {
  const sections = document.querySelectorAll('.animex');

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('appear');
    }
  });
}
// Event listener to trigger the animation on scroll
window.addEventListener('scroll', handleScroll);
//filtration of card
let list = document.querySelectorAll(".list");
let card = document.querySelectorAll(".card");
for(let item of list) {
    item.addEventListener('click', function() {  
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        let datfilter = this.getAttribute('data-filter');   
        let card = document.querySelectorAll(".card");
        for (let k = 0; k < card.length; k++) {
            card[k].classList.remove('active');
            card[k].classList.add('hide');
            if (card[k].getAttribute('data-item') == datfilter || datfilter == 'all') {
                card[k].classList.remove('hide');
                card[k].classList.add('active');
            }
        }
    });
}
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
      }
      function fadeOut(){
        setInterval(loader, 3000);
      }
      window.onload=fadeOut; 



