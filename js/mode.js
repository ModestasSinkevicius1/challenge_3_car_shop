const itemBlocks = document.querySelectorAll('.mode-color');
    const galleryBlocks = document.querySelectorAll('.gallery-item');
    const footerBlock = document.querySelector('.footer-mode');
    const categoryBlocks = document.querySelectorAll('.category-list>h2');
    const categoryLinkBlocks = document.querySelectorAll('.category-list>a');
    const headerBlock = document.getElementById("header-container");

function changeModeColor(blocks, ...color){
    if(color.length>1){
        for(const block of blocks){
            block.style.backgroundImage = `linear-gradient(${color[0]}, ${color[1]})`;
        }
    }
    else{
        for(const block of blocks){
            block.style.backgroundColor = color;
        }
    }
}

function saveCookie(key, value){
    sessionStorage.setItem(key, value);
}

function loadCookies(key){
    headerBlock.style.backgroundColor = sessionStorage.getItem('header-block');
    changeModeColor(itemBlocks, sessionStorage.getItem('item-block-1'), sessionStorage.getItem('item-block-2'));
    changeModeColor(galleryBlocks, sessionStorage.getItem('gallery-block'));
    changeModeColor(categoryBlocks, sessionStorage.getItem('category-block'));
    changeModeColor(categoryLinkBlocks, sessionStorage.getItem('category-link-block'));
    footerBlock.style.backgroundImage = `linear-gradient(${sessionStorage.getItem('footer-block-1')}, ${sessionStorage.getItem('footer-block-2')})`;
}

function changeMode(e){
    const dark = 'rgb(13, 13, 13)';
    const light = 'rgb(15, 123, 190)';
    
    


    if(headerBlock.style.backgroundColor === dark){
        changeModeColor(itemBlocks, 'var(--main-color)', 'rgb(19, 52, 89)');
        changeModeColor(galleryBlocks, '#205896');
        changeModeColor(categoryBlocks, '#00418b');
        changeModeColor(categoryLinkBlocks, '#205896');
        footerBlock.style.backgroundImage = `linear-gradient(#133459, #030b14)`;
    
        e.target.classList.remove('fa-sun-o');
        e.target.classList.add('fa-moon-o');
        headerBlock.style.backgroundColor = light;

        saveCookie('header-block', light);
        saveCookie('item-block-1', 'var(--main-color)');
        saveCookie('item-block-2', 'rgb(19, 52, 89)');
        saveCookie('gallery-block', '#205896');
        saveCookie('category-block', '#00418b');
        saveCookie('category-link-block', '#205896');
        saveCookie('footer-block-1', '#133459');
        saveCookie('footer-block-2', '#030b14');
    }
    else{
        changeModeColor(itemBlocks, '#1c1d1e', '#1b1c1d');
        changeModeColor(galleryBlocks, '#292d31');
        changeModeColor(categoryBlocks, '#27282a');
        changeModeColor(categoryLinkBlocks, '#363d46');
        footerBlock.style.backgroundImage = `linear-gradient(#1b1c1d, #1c1d1e)`;

        e.target.classList.remove('fa-moon-o');
        e.target.classList.add('fa-sun-o');
        headerBlock.style.backgroundColor = dark;

        saveCookie('header-block', dark);
        saveCookie('item-block-1', '#1c1d1e');
        saveCookie('item-block-2', '#1b1c1d');
        saveCookie('gallery-block', '#292d31');
        saveCookie('category-block', '#27282a');
        saveCookie('category-link-block', '#363d46');
        saveCookie('footer-block-1', '#1b1c1d');
        saveCookie('footer-block-2', '#1c1d1e');
    }
}

export { changeMode, loadCookies }