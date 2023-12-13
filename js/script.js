const header = document.querySelector('header.main-nav');

function addBoxShadow() {
    header.style.boxShadow = '1px 1px 5px -3px #000000';
}

function removeBoxShadow() {
    header.style.boxShadow = 'none';
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        addBoxShadow();
    } else {
        removeBoxShadow();
    }
});

const likeListData = [
    "The Best Online Meal Delivery Services for a Hassle-Free Thanksgiving Dinner",
    "Jidenna Dishes On Past Behaviour With Women: 'I'm Ashamed Of It'",
    "EXCLUSIVE: Louis Vuitton Extends COntract of Nicolas Ghesquiere",
    "Las Vegas Grand Prix Adds F1-Sized Wrinkle to UNH Women Hoops' Visit"
];

const ulElement = document.getElementById('like-list');

likeListData.forEach(item => {
    const liElement = document.createElement('li');
    liElement.textContent = item;
    ulElement.appendChild(liElement);
});

ulElement.style.display = 'flex';
ulElement.style.flexDirection = 'column';
ulElement.style.justifyContent = 'space-evenly';
ulElement.style.paddingLeft = '0';

const listItems = ulElement.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.textDecoration = 'underline';
    listItems[i].style.fontWeight = 'bolder';
    listItems[i].style.marginLeft = '20px';
    listItems[i].style.marginBottom = '12px';
}


const icon = document.querySelector('.nav-button');
const content = document.querySelector('.center-nav');


icon.addEventListener('click', function () {
    content.classList.toggle('center-nav');
    console.log('you click');
});