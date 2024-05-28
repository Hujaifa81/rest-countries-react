const get=()=>{
    if(localStorage.getItem('key')){
        return JSON.parse(localStorage.getItem('key'));
    }
    else{
        return [];
    }
}
const set=(name)=>{
    const ar=get();
    ar.push(name);
    const stringifiedAr=JSON.stringify(ar);
    localStorage.setItem('key',stringifiedAr);

}
const remove=(name)=>{
const ar=get();
const removedArray=ar.filter((n)=>n!==name);
const stringifiedAr=JSON.stringify(removedArray);
    localStorage.setItem('key',stringifiedAr);
}
export {get,set,remove};