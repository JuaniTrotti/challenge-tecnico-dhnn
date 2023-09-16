import './style.css'

//generate cards
const imgurl = ["gente", "avion", "asientos"]

function createCard(imgurl) {
    const cardContainer = document.querySelector(".card-container");

    const card = document.createElement("div");
    card.className = "card flex";

    const cardImageContainer = document.createElement("div");
    cardImageContainer.className = "card-image-container flex";

    const image = document.createElement("img");
    image.src = `/img/${imgurl}.jpg`;
    image.alt = "imagen card";
    image.className = "card-image"

    cardImageContainer.appendChild(image);

    const divider = document.createElement("span");
    divider.className = "divider-black";

    const textActionsContainer = document.createElement("div");
    textActionsContainer.className = "text-actions-container flex";

    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.textContent = "Lorem ipsum";

    const cardSubtitle = document.createElement("h3");
    cardSubtitle.className = "card-subtitle";
    cardSubtitle.textContent = "Quisque vel dictum magna";

    const callToAction = document.createElement("a");
    callToAction.className = "call-to-action-text";
    callToAction.textContent = "Call to action";

    textActionsContainer.appendChild(cardTitle);
    textActionsContainer.appendChild(cardSubtitle);
    textActionsContainer.appendChild(callToAction);

    card.appendChild(cardImageContainer);
    card.appendChild(divider);
    card.appendChild(textActionsContainer);

    cardContainer.appendChild(card);
}

imgurl.forEach((value) => {
    console.log("valor", value)
    createCard(value)
})

//expand hero
const heroSection02 = document.querySelector(".hero-section-02");
const cardHeroContainer = document.querySelector(".card-hero-container")
const button = document.querySelector(".open-hero-container");
const hero = document.querySelector(".title-section-container");
let expanded = false;
let expandContainer = null;

function expandHero() {
    cardHeroContainer.style.height = "90%";
    hero.style.height = "55vh";
    button.innerHTML = '<img src="/svg/closeArrow.svg" alt="">';
    expandContainer = document.createElement("div");
    
    expandContainer.className = "expand-container flex";
    expandContainer.style.display = "flex";
    
    const buttonCall = document.createElement("button");
    buttonCall.className = "call-to-action-button-fill";
    buttonCall.textContent = "Call to action";
    
    const expandText = document.createElement("p"); 
    expandText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna";
    
    const dividir = document.createElement("span");
    dividir.className = "divider-blue";
    
    expandContainer.appendChild(dividir);
    expandContainer.appendChild(expandText);
    expandContainer.appendChild(buttonCall);
    
    heroSection02.appendChild(expandContainer);
}

function toggleHeroSection() {
    if (expanded) {
        cardHeroContainer.style.height = "65%";
        hero.style.height = "29vh";
        button.innerHTML = '<img src="/svg/arrow.svg" alt="">';

        if (expandContainer) {
            expandContainer.remove();
            expandContainer = null;
        }
    } else {
        expandHero();
    }
    expanded = !expanded;
}
button.addEventListener("click", toggleHeroSection);

//hamburger menu
const hamButton = document.querySelector(".hamburger-container");
const menuHam = document.querySelector(".header-hamburger");
let hamExtend = false;

function toggleHamSection() {
    if (hamExtend) {
        menuHam.style.top = "-100%";
    } else {
        menuHam.style.top = "0";
    }
    hamExtend = !hamExtend;
}
hamButton.addEventListener("click", toggleHamSection);

//slide cards
const buttonContainer = document.querySelector(".button-container");
const pagesContainer = document.querySelector(".pages-container");
const cardContainer = document.querySelector(".card-container");

const pageNumberMin = document.createElement("p");
const pageNumberDash = document.createElement("p");
const pageNumberMax = document.createElement("p");
pageNumberMin.textContent = "01";
pageNumberMin.className = "min-number";
pageNumberDash.textContent = "/";
pageNumberDash.className = "dash";
pageNumberMax.textContent = "03";
pageNumberMax.className = "max-number";
pagesContainer.appendChild(pageNumberMin);
pagesContainer.appendChild(pageNumberDash);
pagesContainer.appendChild(pageNumberMax);

const leftButton = document.createElement("button");
const leftImage = document.createElement("img");
leftImage.src = "/svg/leftArrow.svg";
leftImage.alt = "";
leftImage.className = "left-arrow-img"
leftButton.className = "slide-arrow left-arrow"

const rightButton = document.createElement("button");
const rightImage = document.createElement("img");
rightImage.src = "/svg/rightArrowActivated.svg";
rightImage.alt = "";
rightImage.className = "right-arrow-img"
rightButton.className = "slide-arrow right-arrow"

leftButton.appendChild(leftImage);
rightButton.appendChild(rightImage);

buttonContainer.appendChild(leftButton);
buttonContainer.appendChild(rightButton);

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
    updateScrollArrows();
    cardContainer.scrollLeft -= 200;
})

rightArrow.addEventListener("click", () => {
    updateScrollArrows();
    cardContainer.scrollLeft += 200;
})

function updateScrollArrows() {
    const cardContainer = document.querySelector(".card-container");
    const leftArrow = document.querySelector(".left-arrow-img");
    const rightArrow = document.querySelector(".right-arrow-img");

    if (cardContainer.scrollLeft === 0) {
        leftArrow.src = "/svg/leftArrow.svg";
    } else {
        leftArrow.src = "/svg/leftArrowActivated.svg";
    }
    if (cardContainer.scrollLeft + cardContainer.clientWidth >= cardContainer.scrollWidth) {
        rightArrow.src = "/svg/rightArrow.svg";
    } else {
        rightArrow.src = "/svg/rightArrowActivated.svg";
    }
}

