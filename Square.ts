import {Shape} from './Shape';
export class Square implements Shape{
    draw_shape()
    {
        return "Drawing a square";
    }
    Area(){
        var area:number=this.side*this.side;
        return area;
    }
    side:number;
    constructor(side:number){
        this.side=side;
    }

}
