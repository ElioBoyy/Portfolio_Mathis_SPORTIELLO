const mainPresentation = document.getElementById('mainPresentation');
const mainContainer = document.getElementById('mainContainer');
const afficheApres = document.getElementsByClassName('afficheApres');
const menuSelector = document.getElementsByClassName('menuSelector');

console.log(afficheApres)

var mainClick = false;

mainPresentation.addEventListener('click', (event) => {
    if (mainClick == false){
        mainClick = true;

        mainPresentation.style.fontSize = "20px";
        mainPresentation.style.borderWidth = "3px";
        mainPresentation.style.width = "210px";

        mainContainer.style.display = "inline bloc";
        mainContainer.style.top = "38px";
        mainContainer.style.left = "108px";
        mainContainer.style.margin = "20px";

        setTimeout(() => {
            for (let i = 0; i < afficheApres.length; i++) {
                setTimeout(() => {
                    afficheApres[i].style.display = "flex";
                }, i * 300)
            }
        }, 600)
    }

    else{
        scroll(0,0);
        console.log("Scroll00");
    }    
})