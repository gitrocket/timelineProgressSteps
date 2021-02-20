
const months = document.querySelectorAll('.month');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const images = document.querySelectorAll('img');

let count = 0;

next.addEventListener('click', () => {
        count++;
        if(count > months.length -1) {
            count = 0;
        }
        removeClass();
        removeActive();
        months[count].classList.add('add-border');
        images[count].classList.add('active');
        
});

prev.addEventListener('click', () => {
        count--;
        if(count < 0) {
            count = months.length -1;
        }
        removeClass();
        removeActive();
        months[count].classList.add('add-border');
        images[count].classList.add('active');
})


function removeClass() {
    months.forEach(month => {
    month.classList.remove('add-border');
    })
}

function removeActive() {
    images.forEach(image => {
        image.classList.remove('active');
    })
}
