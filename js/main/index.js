import { Filter } from "../components/Filter.js";
import { Gallery } from "../components/Gallery.js";
import { galleryData } from "../data/galleryData.js";
import { changeMode, hoverChangeMode, loadCookies } from "../mode.js";

const filter = {
    search: undefined,
    sort: undefined,
    type: undefined,
    price: undefined,
    age: undefined,
    order: undefined,
}

function updateFilter(){
    filter.search = document.getElementById('search_bar').value;
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
    loadCookies();
}

const g = new Gallery(galleryData, '#gallery_container', filter);
const f = new Filter('#filter_form', '#gallery_container');

//Filter apply button

updateFilter();

const searchEvent = document.querySelector('#btn-search');
const btnEvent = document.querySelector('#btn-apply');

btnEvent.addEventListener('click', updateFilter);
searchEvent.addEventListener('click', updateFilter);

//Filter expander

const expandEvent = document.querySelector('#filter_expander');
expandEvent.addEventListener('click', () => f.expandFilter());

window.addEventListener('resize', () => f.resizeFilter());
window.addEventListener('resize', () => f.resizeGallery());

//Night/Day mode

const modeEvent = document.querySelector('#mode-changer')
const hoverEvent = document.querySelectorAll('.hover-color-change');

loadCookies();

modeEvent.addEventListener('click', changeMode)
for(const hover of hoverEvent)
    hover.addEventListener('mouseover', (e) => e.target.style.backgroundColor = '#358989');

for(const hover of hoverEvent)
    hover.addEventListener('mouseout', hoverChangeMode);



