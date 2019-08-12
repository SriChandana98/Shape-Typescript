import {shape} from './intf';
export class circle implements shape{
        radius:number;
        constructor(radius:number){
            this.radius=radius;
        }
        public draw():string{
            return "I am from circle class";
        }
        public area(): number{
            return (3.14)*this.radius*this.radius;
        }
}