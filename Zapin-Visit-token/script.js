let singleForms = [...document.querySelectorAll(".single-form")];
let len = singleForms.length;

let goToPrevSection = (e) => {
    let btn = e.target;
    let parent = btn.parentElement.parentElement; 
    let index = singleForms.indexOf(parent);
    if (index === 0)
        return;
    singleForms[index-1].style.display = "block";
    singleForms[index].style.display = "none";
}

let goToNextSection = (e) => {
    console.log("nxt")
    let btn = e.target;
    let parent = btn.parentElement.parentElement; 
    let index = singleForms.indexOf(parent);
    if (index === len-1)
        return;
    singleForms[index+1].style.display = "block";
    singleForms[index].style.display = "none";
}