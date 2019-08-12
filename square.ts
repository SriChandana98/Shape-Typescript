import {shape} from './intf';
export class square  implements shape{
        side:number;
        constructor(side:number){
            this.side=side;
        }
        public draw():string{
            return "I am from square class";
        }
        public area(): number{
            return this.side*this.side;;
        }
}