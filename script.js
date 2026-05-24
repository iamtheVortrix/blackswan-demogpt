const cards = document.querySelectorAll(
'.story-card,.service-card,.gallery-card,.review-card,.experience-step'
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';
entry.target.style.transform='translateY(0)';

}

});

},{
threshold:.15
});

cards.forEach(card=>{

card.style.opacity='0';
card.style.transform='translateY(40px)';
card.style.transition='all .8s ease';

observer.observe(card);

});