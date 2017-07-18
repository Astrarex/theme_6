window.sr = ScrollReveal();
 sr.reveal('hr',{
   duration: 700,
   origin: 'right',
   distance: '1000px'
 });
 sr.reveal('h1',{
   duration: 700,
   //delay: 900,
   origin: 'bottom',
   distance: '10px'
 });
 sr.reveal('.navbar-header',{
   duration: 700,
   origin: 'top',
   distance: '0px'
 });
 
// sr.reveal('.col-b',{
//   duration: 700,
//   origin: 'bottom',
//   distance: '1000px'
// });
// sr.reveal('.col-c',{
//   duration: 700,
//   origin: 'right',
//   distance: '1000px'
// });
//
// sr.reveal('hr',{  //works with HR
//   duration: 700,
//   origin: 'right',
//   distance: '1000px'
// });
$('.carousel').carousel({
  interval: 2000
});
