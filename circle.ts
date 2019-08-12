import {shape} from './shapes';
export class circle implements shape
{
    constructor(r:number)
    {
        this.radius=r
    }
    radius:number;
public draw():string
{
    return "i am a circle";
}
public area():number
{
    return (3.14) * this.radius * this.radius;
}
}
