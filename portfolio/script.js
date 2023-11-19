const header = document.querySelector("nav");

window.addEventListener("scroll", function(){
    header.classList.toggle( "sticky", this.window.scrollY >50);
});

let menu = document.querySelector('#burger-menu');
let navlist = document.querySelector('.nav-content');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scrolled');
      }
    });
  });

  let sections = document.querySelectorAll('div');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight ;

      if (top >= offset && top < offset + height){
        sec.classList.add('show-animate');
      }
      else{
        sec.classList.remove('show-animate')
      }
    })
  }

  const observerr = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show-items");
      }else{
        entry.target.classList.remove("show-items");
      }
    });
  });

  const scrollScale = document.querySelectorAll(".scroll-scale");
  scrollScale.forEach((el)=> observerr.observe(el));
  
  
  const scrollBottom = document.querySelectorAll(".scroll-bottom");
  scrollBottom.forEach((el)=> observerr.observe(el));
  
  const scrollTop= document.querySelectorAll(".scroll-top");
  scrollTop.forEach((el)=> observerr.observe(el));
 