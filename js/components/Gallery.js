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

    sortItems(filter){
        const arrayData = [...this.data];

        if(filter.sort === 'new'){
            let temp = null;
            
            //Bubble Sort algorithm
            // for(let j = 0;j < arrayData.length;j++){
            //     for(let i = j + 1 ;i < arrayData.length; i++){
            //         if(arrayData[j].age > arrayData[i].age){
            //             temp = arrayData[j];
            //             arrayData[j] = arrayData[i];
            //             arrayData[i] = temp;
            //         }
            //     }
            // }

            arrayData.sort((a, b) => a.age - b.age);
        }
        if(filter.order === 'descend'){
            arrayData.reverse();
        }
        return arrayData;
    }

    checkFilter(galleryData, price, age){
        if ((galleryData.mechanical === this.filter.type || this.filter.type === 'both')&&
           ((galleryData.initial_price >= price[0] && galleryData.initial_price <= price[1]) || this.filter.price === 'any')&&
            (galleryData.age >= age[0] && galleryData.age <= age[1] || this.filter.age === 'any')&&
            (galleryData.model === this.filter.search || '' === this.filter.search )){
            return true;
        }
        else{
            return false;
        }
    }

    renderGallery(){
        this.DOM = document.querySelector(this.selector);
        let HTML = '';

        this.setDefault(this.filter);  
        const sortedData = this.sortItems(this.filter);

        const price = this.splitTwoValues(this.filter.price);
        const age = this.splitTwoValues(this.filter.age);

        for(let i = 0;i<this.data.length;i++){
            const galleryData = sortedData[i];
            if(this.checkFilter(galleryData, price, age)){
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