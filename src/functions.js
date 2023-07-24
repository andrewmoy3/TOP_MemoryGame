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

export function shuffleArray(array) {
    var m = array.length, t, i;
  
    // Create a copy of the original array to avoid mutating the state directly
    const newArray = [...array];

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = newArray[m];
      newArray[m] = newArray[i];
      newArray[i] = t;
    }
  
    return newArray;
  }

export function calcTotalScore(n){
    var score = 4;
    while(n>4){
        score += n;
        n = n - 2;
    }
    return score
}