interface IceCreamArray{
    [index:number]:string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);

//
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const postList:Post[]=[];
