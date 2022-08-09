class Filter{
    constructor(selector, gallerySelector){
        this.selector = selector;
        this.gallerySelector = gallerySelector;
        this.toggle = true;
        this.filterBlock = document.querySelector(this.selector);
        this.galleryBlock = document.querySelector(this.gallerySelector);
    }

    expandFilter(){
        
        if(this.toggle){  
            this.filterBlock.style.paddingBottom = '10px';
            this.toggle = false;
        }
        else{
            this.filterBlock.style.height = '0';
            this.filterBlock.style.paddingBottom = '0';
            this.toggle = true;
        }
        this.resizeFilter();
        this.resizeGallery();
    }

    resizeFilter(){
        if(window.innerWidth < 800 && !this.toggle)
            this.filterBlock.style.height = '270px';
        else if(window.innerWidth < 1200 && !this.toggle)
            this.filterBlock.style.height = '170px';
        else if(!this.toggle)
            this.filterBlock.style.height = '125px';
    }

    resizeGallery(){
        if(window.innerWidth < 800 && !this.toggle)
            this.galleryBlock.style.height = '48.5%';
        else if(window.innerWidth < 1200 && !this.toggle)
            this.galleryBlock.style.height = '62.0%';
        else if(!this.toggle)
            this.galleryBlock.style.height = '68.0%';
        else
            this.galleryBlock.style.height = '85.8%';
    }
}

export { Filter }