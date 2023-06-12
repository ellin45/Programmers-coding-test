function solution(A, B) {
    // A.slice(0,-1); //hell
    // A.slice(-1); //o
 
     if(A===B) return 0;
    for(let i=0; i<A.length; i++){
        A = A.slice(-1) + A.slice(0,-1)
    if(A===B) return i+1
        }
    return -1;
}
    
  
