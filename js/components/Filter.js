class Filter{
    constructor(selector){
        this.selector = selector;
        this.toggle = true;
        this.filterBlock = document.querySelector(this.selector);
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
    }

    resizeFilter(){
        if(window.innerWidth < 800 && !this.toggle)
            this.filterBlock.style.height = '270px';
        else if(window.innerWidth < 1200 && !this.toggle)
            this.filterBlock.style.height = '170px';
        else if(!this.toggle)
            this.filterBlock.style.height = '125px';
    }
}

export { Filter }