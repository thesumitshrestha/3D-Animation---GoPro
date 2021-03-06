//Movement animation to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const description = document.querySelector('.info h3');
const purchase = document.querySelector('.purchase button');
const sizes = document.querySelector('.sizes');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})
;

//Animate In
container.addEventListener('mouseenter', (e) =>{
  card.style.transition = 'none';
  // Popout
title.style.transform= 'translateZ(100px)';
sneaker.style.transform= 'translateZ(200px) rotateZ(-5deg)';
description.style.transform= 'translateZ(125px)';
sizes.style.transform= 'translateZ(100px)';
purchase.style.transform = 'translateZ(75px)';
});

//Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all 0.5s ease';
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
title.style.transform= 'translateZ(0)';
sneaker.style.transform= 'translateZ(0) rotateZ(0)';
description.style.transform= 'translateZ(0)';
sizes.style.transform= 'translateZ(0)';
purchase.style.transform= 'translateZ(0)';
});
