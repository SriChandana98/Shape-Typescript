import {shape} from './shapes';
export class square implements shape
{side:number;
    constructor(side:number)
    {
        this.side=side;
    }

public draw():string
{
    return "i am a square";
}
public area():number
{
    return this.side * this.side;
}


}
