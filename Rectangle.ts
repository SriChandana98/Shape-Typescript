import {Shape} from './Shape';
export class Rectangle implements Shape{
    draw_shape()
    {
        return "Drawing a rectangle";
    }
    Area(){
        var area:number=this.length*this.breadth;
        return area;
    }
    length:number;
    breadth:number;
    constructor(len:number,breadth:number){
        this.length=len;
        this.breadth=breadth;
    }

}
