
function solution(n) {
    const arr = [];
    for(let i=0; i < n; i++) arr.push([])
    
    let cnt = 1;
    let startX = 0;
    let startY = 0;
    let endX = n-1;
    let endY = n-1;
    
    while(startY <= endY && startX <= endX) {
        
        // 우측으로 이동, 시작 행은 아래로 한칸 내려옴
        for(let i = startX ; i <= endX ; i ++) {
            arr[startY][i] = cnt++
        }
        startY++
        
        // 하단으로 이동, 끝나는 열은 한칸 왼쪽으로 줄어듦
        for(let i = startY ; i <= endY ; i ++) {
            arr[i][endX] = cnt++
        }
        endX--
        
        // 좌측으로 이동, 끝나는 행은 위로 한칸 줄어듦
        for(let i = endX ; i >= startX ; i --) {
            arr[endY][i] = cnt++
        }
        endY--
        
        // 상단으로 이동, 시작 열은 우측으로 한칸 줄어듦
        for(let i = endY ; i >= startY ; i --) {
            arr[i][startX] = cnt++
        }startX++
    }
    return arr
}


//function solution(n) {
//     let map = Array.from({length:n},()=>Array.from({length:n},()=>0));

//     let [x,y] = [0,-1];
//     let [max,temp] = [n,0];
//     let len = Math.ceil(n/2);

    //[0,0]-[0,4]//[행,열+1]
    //[1,4]-[4,4]//[행+1,열]
    //[4,3]-[4,0]//[행,열-1]
    //[3,0]-[1,0]//[행-1,열]
    
    // while문을  Math.ceil(n/2) 번 돌면 끝나는 조건문으로 끝내기 
    // 점점 하나씩 행과 열이 줄어드는 for문으로 작성하기
    
    
//     while(len > 0){
//         for(let i=0; i<max; i++) map[x][++y] = ++temp;
//         for(let i=0; i<max-1; i++) map[++x][y] = ++temp;
//         for(let i=0; i<max-1; i++) map[x][--y] = ++temp;
//         for(let i=0; i<max-2; i++) map[--x][y] = ++temp;
//         len --;
//         max-=2;
//     }

//     return map;
// }
//[행,열][i,j]
//[0,0]-[0,4]//[행,열+1]
//[1,4]-[4,4]//[행+1,열]
//[4,3]-[4,0]//[행,열-1]
//[3,0]-[1,0]//[행-1,열]
//[1,1]-[1,3]//[행,열+1]

//for문을 n번 돌면 끝나는 조건문으로 끝내기
//점점 하나씩 행과 열이 줄어드는 for문으로 작성하기