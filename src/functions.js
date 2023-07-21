export function generateId(numIds, num){
    let arr = [];
    while(arr.length<numIds){
        const n = Math.floor(Math.random() * (num)) + 1;
        if(!arr.includes(n)){
            arr.push(n)
        }
    }
    return arr;
}