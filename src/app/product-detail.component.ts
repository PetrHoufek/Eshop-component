import {Component} from '@angular/core';
import {Product} from './product.model'

const SPRITE_ITEM_HEIGHT = 29;

/**
 * Normally i would have a list of phones/products and after clicking on one of them
 * you would be redirected to the ProductDetail component with the id of the product as
 * a parameter, using this ID you would pull up the data about the right phone from the
 * database and render it.
 */
@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.scss']
})
export class ProductDetailComponent{

    product: Product;
    model: any;
    selectedColour: string;
    selectedMemory: string;

    /**
     * Again, since i don't have a list of phones from which i would route into a detailed
     * phone description, i'm gonna hardcode the "[0]". (i take colors and memory differences
     * as properties of SUB-models).
     */
    ngOnInit(){
        this.product = require('../assets/data/phones.json')[0];
        this.model = this.product.deviceSummary[0];
        this.selectedColour = this.model.colourName;
        this.selectedMemory = this.model.memory;
    }

    setModel(){
        if(!this.product || !this.product.deviceSummary){
            return;
        }
        this.model = this.product.deviceSummary.find(e => {
            return (e.colourName == this.selectedColour) && (e.memory == this.selectedMemory);
        })
    }

    selectColor(color: string){
        if(this.selectedColour == color){
            return;
        }
        this.selectedColour = color;
        this.setModel();
    }

    selectMemory(memory: string){
        if(this.selectedMemory == memory){
            return;
        }
        this.selectedMemory = memory;
        this.setModel();
    }

    /**
     * I had to download a sprite with stars in it and then spend half an hour repositioning it
     * and adjusting its size, its not important for this test so i won't have half a stars here
     * but ill round it instead.
     */
    getSpritePosition(){
        let rating: number = Math.round(this.product.rating);
        if(rating < 0){
            rating = 0;
        }
        if(rating > 0){
            rating--;
        }
        if(rating >= 5){
            rating = 4;
        }
        return -SPRITE_ITEM_HEIGHT * rating;
    }

    /**
     * I'm gonna assume that all of the colors are available with the same memory options
     */
    getColorVariations(): any[]{
        return this.product.deviceSummary.filter(e => {
            return e.memory == this.selectedMemory; 
        });
    }

    getMemoryVariations(): any[]{
        return this.product.deviceSummary.filter(e => {
            return e.colourName == this.selectedColour;
        });
    }

    /**
     * This method shouldn't even be here, for more info look at comment in product-detail.component.html
     * line 41.
     */
    getMemoryNumber(value: string): string{
        return value.replace("GB", "");
    }

    getPrice(value: string): string{
        return value? value:"-----";
    }

}