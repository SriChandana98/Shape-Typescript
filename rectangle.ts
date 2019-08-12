import {shape} from './shapes';
import {square} from './square';
export class rectangle extends square implements shape
{   l:number;
    b:number;
    constructor(length:number,breath:number)
    {
        super(length);
        this.l=length;
        this.b=breath;
    }
   
public draw():string
{
    return "i am a rectangle";
}
public area():number
{
    return this.l*this.b;
}
}
