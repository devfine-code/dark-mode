// #################  ex.2 -------------- without localstorage ############################

// let switcher = document.querySelector('.switcher');
// let switcherWrap = document.querySelector('.switcher__wrap');
// let sun = false;

// switcher.addEventListener('click', () => {
//     if(!sun) {
//     switcherWrap.style.transform = "translateX(-68px)"; 
//     document.body.setAttribute('data-theme', 'dark');
//     sun = true;
//     }
//     else{
//         switcherWrap.style.transform = "translateX(0px)"; 
//         sun = false;
//         document.body.setAttribute('data-theme', 'light');
//     }
    
// });


// ########################### ex.1 ---------- remember state in local storage ##########################

let switcher = document.querySelector('.switcher');
let switcherWrap = document.querySelector('.switcher__wrap');
let sun;

document.addEventListener('DOMContentLoaded', () => {
    sun = localStorage.getItem('sun');
 if(sun == undefined){
    document.body.setAttribute('data-theme', 'light');
    sun = false; 
 }
 else{
     sun = true;
     document.body.setAttribute('data-theme', 'dark');
     switcherWrap.style.transform = "translateX(-68px)";
 }
}); 

switcher.addEventListener('click', () => {
    if(!sun) {
        switcherWrap.style.transform = "translateX(-68px)";
        document.body.setAttribute('data-theme', 'dark');
        sun = true;
        localStorage.setItem('sun', 'false');
    }
    else{
        switcherWrap.style.transform = "translateX(0px)";
        sun = false;
        document.body.setAttribute('data-theme', 'light');
        localStorage.removeItem('sun');
    }
});