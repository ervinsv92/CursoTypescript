interface Client{
    name:string;
    age:number;
}

interface StarClient extends Client{
    point:number;
}

const ervin:Client = {
    name:'Ervin',
    age:30
}

const ErvinStarClient:StarClient = {
    name:'Ervin Solano',
    age:29,
    point:10
}

function printClient(client:Client, starClient:StarClient){
    console.log(client, starClient);
}