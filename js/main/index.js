import { Filter } from "../components/Filter.js";
import { Gallery } from "../components/Gallery.js";
import { galleryData } from "../data/galleryData.js";

const filter = {
    sort: undefined,
    type: undefined,
    price: undefined,
    age: undefined,
    order: undefined,
}

function updateFilter(){
    filter.sort = document.getElementById('sort').value;
    filter.type = document.getElementById('c-type').value;
    filter.price = document.getElementById('price-gap').value;
    filter.age = document.getElementById('c-age').value;
    const radioObj = document.querySelectorAll('input[name="radio-input"]');
    
    for(const radio of radioObj){
        if(radio.checked){
            filter.order = radio.value;
            break;
        }
    }

    g.renderGallery(filter);
}

const g = new Gallery(galleryData, '#gallery_container', filter);
const f = new Filter('#filter_form');

const btnEvent = document.querySelector('#btn-apply');
btnEvent.addEventListener('click', updateFilter);

const expandEvent = document.querySelector('#filter_expander');
expandEvent.addEventListener('click', () => f.expandFilter());

window.addEventListener('resize', () => f.resizeFilter());




