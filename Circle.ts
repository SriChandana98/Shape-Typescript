import {Shape} from './Shape';
export class Circle implements Shape{
    draw_shape()
    {
        return "Drawing a circle";
    }
    Area(){
        var area:number=0.314*this.radius*this.radius;
        return area;
    }
    radius:number;
    constructor(r:number){
        this.radius=r;
    }

}
