const containerDOM = document.getElementsByClassName('container')


let ChangeDisplay = (changeSlider, hideSlider) => {
    
    containerDOM[hideSlider].classList.add("container-hide");
    containerDOM[45].classList.remove("container-hide");
    setTimeout(() => {
    containerDOM[changeSlider].classList.remove("container-hide");
    containerDOM[45].classList.add("container-hide");
    }, 800);
    
}

setTimeout(()=>{
    containerDOM[0].classList.add("container-hide");
    containerDOM[1].classList.remove("container-hide");
    }, 3000);