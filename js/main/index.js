import { Gallery } from "../components/Gallery.js";
import { galleryData } from "../data/galleryData.js";

const filter = {
    sort: undefined,
    type: undefined,
    price: undefined,
    age: undefined,
}

const g = new Gallery(galleryData, '#gallery_container', filter);

const btnEvent = document.querySelector('#btn-apply');
btnEvent.addEventListener('click', updateFilter);

function updateFilter(){
    filter.sort = document.getElementById('sort').value;
    filter.type = document.getElementById('c-type').value;
    filter.price = document.getElementById('price-gap').value;
    filter.age = document.getElementById('c-age').value;
    
    g.renderGallery(filter);
}