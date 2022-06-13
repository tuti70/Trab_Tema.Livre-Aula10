const aLink = document.querySelectorAll('a');
const navBar = document.querySelector('.navBar');
const dropNav = document.querySelector('ul.nav');
// console.log(navBar, dropNav)


aLink.forEach(function(e){
  e.addEventListener('click',function(e){
    e.preventDefault()
  })      
});

navBar.addEventListener('click', function(){
  // console.log(dropNav)
  dropNav.classList.toggle('active');
});


const navLink = document.querySelectorAll('.navLink');
const content = document.querySelectorAll('.content');

// console.log(navLink);
navLink.forEach(function(e){
  // console.log(e)
  e.addEventListener('click', function(e){
    let myPage = e.target.dataset.target;
    // console.log(myPage);
    const contents = document.querySelectorAll('.content');
    contents.forEach(function(item){
      item.classList.remove('active')
    })
    document.querySelector(myPage).classList.toggle('active');
  });
})