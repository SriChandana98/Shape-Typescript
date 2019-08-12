import {shape} from './shapes';
import { circle} from './circle';
import {square} from './square';
import {rectangle} from './rectangle';

var cir:circle=new circle(7);
var squ:square=new square(2);
var rec:rectangle=new rectangle(3,2);
console.log(cir.draw());
console.log(cir.area());
console.log(squ.draw());
console.log(squ.area());
console.log(rec.draw());
console.log(rec.area());
