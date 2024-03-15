let aside= document.querySelector('aside');
let sidebarBtn=document.querySelector('#sidebarBtn');
let MoblieMenu=document.querySelector('#MoblieMenu');
let Mobile_menu_dropdown=document.querySelector('.Mobile_menu_dropdown');


sidebarBtn.addEventListener('click',()=>{
  aside.classList.toggle('asideToggle');
  document.querySelector('.profile_info').classList.toggle('toggleProfile')
 document.querySelector('.nav-item').classList.toggle('toggleProfile');
 document.querySelector('.nav-item2').classList.toggle('toggleProfile');
 document.querySelector('.nav-item3').classList.toggle('toggleProfile');
 document.querySelector('.nav-item4').classList.toggle('toggleProfile');

});

MoblieMenu.addEventListener('click',()=>{
  Mobile_menu_dropdown.classList.toggle('showMobileMenu')
})

//slider 

onload = start;

function start() {
  var i = 1;
  function Move() {
    i = (i % 4) + 1; // 4 is the Number of image in slider
    document.getElementById('i' + i).checked = true;
  }
  setInterval(Move, 3000); //change img in 3 sec
}


//content hide and show

let home =document.querySelector('#Home');
let about =document.querySelector('#about');
let service =document.querySelector('#service');
let contact =document.querySelector('#contact');
let Mobile_Menu =document.querySelector('#Mobile_Menu');

// home 
let homelink =document.querySelector('#homeLink');
homelink.addEventListener('click',function(){
home.classList.remove('hide');
about.classList.add('hide');
service.classList.add('hide');
contact.classList.add('hide');
homelink.classList.add('active');
aboutLink.classList.remove('active');
serviceLink.classList.remove('active');
contactLink.classList.remove('active');
});

// about 
let aboutLink=document.querySelector('#aboutLink');
aboutLink.addEventListener('click',()=>{
  about.classList.remove('hide');
  home.classList.add('hide');
  service.classList.add('hide');
  contact.classList.add('hide');
  aboutLink.classList.add('active');
  homelink.classList.remove('active');
  serviceLink.classList.remove('active');
  contactLink.classList.remove('active');
})
// service
let serviceLink=document.querySelector('#serviceLink');
serviceLink.addEventListener('click',()=>{
  service.classList.remove('hide');
  home.classList.add('hide');
  about.classList.add('hide');
  contact.classList.add('hide');
  serviceLink.classList.add('active');
  aboutLink.classList.remove('active');
  homelink.classList.remove('active');
  contactLink.classList.remove('active');
})
// contact
let contactLink=document.querySelector('#contactLink');
contactLink.addEventListener('click',()=>{
  contact.classList.remove('hide');
  home.classList.add('hide');
  about.classList.add('hide');
  service.classList.add('hide');
  contactLink.classList.add('active');
  aboutLink.classList.remove('active');
  serviceLink.classList.remove('active');
  homelink.classList.remove('active');
})


// MobileHome 
let MobileHomeLink =document.querySelector('#MobileHomeLink');
MobileHomeLink.addEventListener('click',function(){
home.classList.remove('hide');
about.classList.add('hide');
service.classList.add('hide');
contact.classList.add('hide');
Mobile_Menu.classList.remove('showMobileMenu');
});

// Mobileabout 
let MobileAboutLink=document.querySelector('#MobileAboutLink');
MobileAboutLink.addEventListener('click',()=>{
  about.classList.remove('hide');
  home.classList.add('hide');
  service.classList.add('hide');
  contact.classList.add('hide');
  Mobile_Menu.classList.remove('showMobileMenu');
})
// Mobileservice
let MobileServiceLink=document.querySelector('#MobileServiceLink');
MobileServiceLink.addEventListener('click',()=>{
  service.classList.remove('hide');
  home.classList.add('hide');
  about.classList.add('hide');
  contact.classList.add('hide');
  Mobile_Menu.classList.remove('showMobileMenu');
})
// MobileContact
let MobileCotactLink=document.querySelector('#MobileCotactLink');
MobileCotactLink.addEventListener('click',()=>{
  contact.classList.remove('hide');
  home.classList.add('hide');
  about.classList.add('hide');
  service.classList.add('hide');
  Mobile_Menu.classList.remove('showMobileMenu');
})
