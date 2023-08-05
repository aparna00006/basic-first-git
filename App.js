let userActive =[]
let user ={
    userName:"xyz",
    lastActivetime: 0,
};
function updateLasteUseractivityTime() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            user.lastActivetime = new Date().getTime();
            resolve(user.lastActivetime);
        }, 1000);
    });
}
function createpost(value){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            user.userName = value;
            resolve(user.userName);
        });
    });
}
function deletePost(){
    return new Promise((res, rej)=>{
        setTimeout(()=> {
            userActive.pop();
            res()
        }, 1000);
    });
}
Promise.all([updateLasteUseractivityTime(),createpost("aparna")]).then(
(userName)=>{
    //printDetails();
    userActive.push(user);
    console.log(userName);
}
);
//deletePost().then((post)=>{
  //console.log(post)
  //});
  console.log(userActive);
  console.log(user.userName);
  
