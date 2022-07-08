function changeMode(){
    const x = document.getElementById("header-container");
    const dark = '#180b40';
    const light = '#23a3a3';
    
    if(x.style.backgroundColor === dark)
        x.style.backgroundColor = light;
    else
        x.style.backgroundColor = dark;
}