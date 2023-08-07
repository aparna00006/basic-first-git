console.log('Person1: shows Ticket');
console.log('person2: shows Ticket');

const preMovie = async ()=> {

    const promiseWifeBringingTickets = new Promise((resolve, reject)=> {
           setTimeout(()=>resolve('ticket'), 3000)
       });

//let ticket = await promiseWifeBringingTickets;

const getPopcorn= new Promise((resolve,reject)=>resolve(`PopCorn`));
const getButter= new Promise((resolve,reject)=>resolve(`Butter`));
const getColdDrinks= new Promise((resolve,reject)=>resolve(`ColdDrink`));

let ticket = await promiseWifeBringingTickets;

console.log(`wife: i have ${ticket}`);
console.log('husband: we should go in');
console.log('wife: no i am hungry');

let popcorn = await getPopcorn;
console.log(`husband: i got some ${popcorn}`)
console.log('wife: i need butter on my PopCorn');

let butter = await getButter;
console.log(`husband: i got some ${butter} on popcorn`)
console.log('husband: anything else darling')

let coldDrink = await getColdDrinks
console.log('wife: i need a coldrink');
console.log(`husband: take it ${coldDrink}`)
console.log(`husband: anything else darling`)
console.log('wife:we are getting late. lets go')

let [Popcorn, Butter, Cold]= await Promise.all([getPopcorn,getButter,getColdDrinks])
console.log(`${popcorn}, ${Butter}, ${Cold}`)

return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('Person4: shows Ticket');
console.log('Person5: shows Ticket');



// const promiseWifeBringingTicks = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });
// const getPopcorn = promiseWifeBringingTicks.then((t)=>{
//     console.log('wife: i have the tics')
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
// });

// const getButter = getPopcorn.then((t)=> {
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject)=> resolve(`${t} butter`));
// });

// getButter.then((t) => console.log(t))

//console.log('Person4: shows Ticket');
//console.log('Person5: shows Ticket');