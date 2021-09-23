//interface
interface Profile {
    name: string;
    age?: number;
}

let profile: Profile = {
    name: 'Galaxy',
};

//Index Signature
interface A{
    someProp: string;
    [key: string]: number | string;
 }
const a: any = {someProp: 'Some Prop'};
    a.x = 1;
    a.y = 2;

//Call Signature
interface Sum{
    (a: number, b: number): number;
    prop1: string;
}
const sum: Sum = (a,b) => a + b;
sum.prop1 = 'Some Prop';


// Extending interface
interface GrandParent{
 y: string;
}
interface Parent{
    x: string;
}

interface Child extends GrandParent, Parent{}
let child: Child = {x: 'Ram', y: 'Manohar'}