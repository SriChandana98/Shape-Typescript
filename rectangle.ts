import {shape} from './intf';
import {square} from './square'
export class rectangle extends square implements shape{
        length:number;
        breadth:number;
        
        constructor(length:number,breadth:number){
            super(length);
            this.length=length;
            this.breadth=breadth;
        }
        public draw():string{
            return "I am from rectangle class";
        }
        public area(): number{
            return this.length*this.breadth;
        }
}