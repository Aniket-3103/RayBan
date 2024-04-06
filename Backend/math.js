const sum=(a,b)=> a+b;
const multiplication=(a,b)=> a*b;
const g=9.8;
const pi=3.14;


//if we're not exporting anything, an empty object will be returned.
// module.exports=123;

let obj={
    sum:sum,
    mul:multiplication,
    g:g,
    pi:pi
}

// module.exports=obj;
export const name="Aniket";