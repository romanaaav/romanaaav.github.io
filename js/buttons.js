const homeLink = document.getElementById("homeButton").addEventListener("click",llevarAHome)
const aboutLink = document.getElementById("aboutButton").addEventListener("click",llevarAAbout);
const portfolioLink = document.getElementById("portfolioButton").addEventListener("click",llevarAPortfolio);
const contactLink = document.getElementById("contactButton").addEventListener("click",llevarAContacto);
const contactButton = document.getElementsByClassName("btn-ghost")[0].addEventListener("click",llevarAContacto);
const portfolioButton = document.getElementsByClassName("btn-full")[0].addEventListener("click",llevarAPortfolio);

function llevarAHome(e){
    e.preventDefault();
    scrollEffect('#home',1000);
}

function llevarAAbout(e){
    e.preventDefault();
    scrollEffect('#about',1000);
}

function llevarAPortfolio(e){
    e.preventDefault();
    scrollEffect('#portfolio',1000);

}

function llevarAContacto(e){
    e.preventDefault();
    scrollEffect('#contact',1000);
}

function scrollEffect(target,duration){
    var target = document.querySelector(target);
    var offset = 0;

    if(target != document.querySelector('#home')) {
        offset = -75;
    }

    var targetPosition = target.getBoundingClientRect().top + offset;
    console.log('TargetPosition=' + targetPosition);
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;

    var startTime = null;

    function scrollAnimation(currentTime){
        if (startTime === null){
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,targetPosition,duration);

        window.scrollTo(startPosition,run);

        if (timeElapsed < duration){
            requestAnimationFrame(scrollAnimation);
        }
    }


    function ease(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t + 1) + b;
    };
    window.requestAnimationFrame(scrollAnimation);

    console.log("Posicion inicial: " +startPosition+ ". Posicion Final: " + targetPosition + ". Distancia: " + distance )
}