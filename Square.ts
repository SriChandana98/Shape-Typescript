import {IShape} from './IShape';
export class Square implements IShape{
    draw()
   {
console.log("We're drawing a Square");
   } 
   area(r: number)
   {
        console.log(r*r);
   }
}
var c= new Square();
c.draw();
c.area(2);