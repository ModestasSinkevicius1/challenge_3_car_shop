const headerBlock = document.getElementById("mode-changer");
headerBlock.addEventListener('click', changeMode);

function changeMode(e){
    const dark = 'rgb(24, 11, 64)';
    const light = 'rgb(15, 123, 190)';
    
    const headerBlock = document.getElementById("header-container");
    if(headerBlock.style.backgroundColor === dark){
        e.target.classList.remove('fa-sun-o');
        e.target.classList.add('fa-moon-o');
        headerBlock.style.backgroundColor = light;
    }
    else{
        e.target.classList.remove('fa-moon-o');
        e.target.classList.add('fa-sun-o');
        headerBlock.style.backgroundColor = dark;
    }
}