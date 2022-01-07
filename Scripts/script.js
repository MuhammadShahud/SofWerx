const containerDOM = document.getElementsByClassName('container')


let ChangeDisplay = (changeSlider, hideSlider) => {
    
    containerDOM[changeSlider].classList.remove("container-hide")
    containerDOM[hideSlider].classList.add("container-hide")

}
setTimeout(()=>{ChangeDisplay(1,0)}, 3000);