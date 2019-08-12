import {IShape} from './IShape';
export class Circle implements IShape{
    draw()
   {
console.log("We're drawing a circle");
   } 
   area(r: number)
   {
        console.log(0.34*r*r);
   }
}
var c= new Circle();
c.draw();
c.area(2);