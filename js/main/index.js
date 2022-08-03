import { Gallery } from "../components/Gallery.js";
import { galleryData } from "../data/galleryData.js";

const filter = {
    type: undefined,
    price: undefined,
    age: undefined,
}

const g = new Gallery(galleryData, '#gallery_container', filter);

const btnEvent = document.querySelector('#btn-apply');
btnEvent.addEventListener('click', updateFilter);

function updateFilter(){
    filter.type = document.getElementById('c-type').value;
    filter.price = document.getElementById('price-gap').value;
    filter.age = document.getElementById('c-age').value;
    console.log(filter.age);

    g.renderGallery(filter);
}