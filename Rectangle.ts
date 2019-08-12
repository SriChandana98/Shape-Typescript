import {IShape} from './IShape';
export class Rectangle implements IShape{
    draw()
   {
console.log("We're drawing a Rectangle");
   } 
   area(l: number, b:number)
   {
        console.log(l*b);
   }
}
var c= new Rectangle();
c.draw();
c.area(2,3);