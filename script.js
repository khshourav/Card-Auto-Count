let navbar= document.getElementById('nav');

window.onscroll = () => {
    let scrollY = window.scrollY;
    if(scrollY){
        // navbar.style.backgroundColor='blue';
        // navbar.style.borderBottom = '4px solid green';
        navbar.classList.remove('bg-light');
        navbar.classList.add('bg-success');
        document.getElementsByTagName('a').style.color=white;
    }
    else{
        navbar.classList.remove('bg-primary');
        navbar.classList.add('bg-light');
    }
}

// Our Achievements code

let projects = document.getElementById('projects');

let cards = document.querySelectorAll('.dgit');
cards.forEach((card, index)=>{
    let endNumber = parseInt(card.innerHTML);
    autoCount(card, endNumber);
})

function autoCount(card, endNumber){
    let startNumber = endNumber-100;
    let count = setInterval(() =>{
        if(startNumber <= endNumber){
            card.innerText = startNumber;
            startNumber++;
        }
        else{
            clearInterval(count);
        }
    }, 20);

}

