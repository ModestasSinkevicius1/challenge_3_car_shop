class Gallery{
    constructor(data, selector, filter){
        this.data = data;
        this.selector = selector;
        this.DOM = null;
        this.filter = filter;

        this.init();
    }
    
    init(){
        this.renderGallery();
    }

    setDefault(filter){
        if(this.filter.type === undefined){
            this.filter.type = 'both';
        }
        if(this.filter.price === undefined){
            this.filter.price = 'any';
        }
        if(this.filter.age === undefined){
            this.filter.age = 'any';
        }
        return this.filter;
    }

    splitTwoValues(strValue){
        return strValue.split(' - ');
    }

    renderGallery(){
        this.DOM = document.querySelector(this.selector);
        let HTML = '';

        this.setDefault(this.filter);

        const price = this.splitTwoValues(this.filter.price);
        const age = this.splitTwoValues(this.filter.age);

        for(let i = 0;i<25;i++){
            const galleryData = this.data[0];
            if((galleryData.mechanical === this.filter.type || this.filter.type === 'both')&&
            ((galleryData.initial_price >= price[0] && galleryData.initial_price <= price[1]) || this.filter.price === 'any')&&
            (galleryData.age >= age[0] && galleryData.age <= age[1] || this.filter.age === 'any')){
                HTML += `<div class="gallery-item">
                            <img src=${galleryData.image}>
                            <div class="flag-container">
                                <p class=${galleryData.flag}></p>
                            </div>  
                            <p><b>${galleryData.model}</b></p>
                            <p>${galleryData.horse_power}rpm</p>
                            <p>${galleryData.initial_price}&euro;</p>
                            <hr>
                            <div class="rating">
                                <div class="comment-container">
                                    <i class="fa fa-comment comment"></i>
                                    <p class="comment-txt">0</p>
                                </div>
                                <div class="favorite-container">
                                    <i class="fa fa-star favorite"></i>
                                </div>
                                <div class="like-container">
                                    <i class="fa fa-thumbs-up like"></i>
                                    <p class="like-txt">0</p>
                                </div>                  
                            </div>
                        </div>`;
            }
        }

        this.DOM.innerHTML = HTML;
    }
}

export { Gallery }