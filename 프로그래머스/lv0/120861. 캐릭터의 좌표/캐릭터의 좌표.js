function solution(keyinput, board) {
   //1.x와 y의 변수를 정해준다.
    let x=0;
    let y=0;
    
    //2.범위를 설정해준다.
    const range = [Math.abs(Math.floor(board[0] / 2 )),
                  Math.abs(Math.floor(board[1] / 2))]
    //3.key input을 넣을때의 경우의 수를 넣어준다
    for(let k of keyinput){
        switch(k){
            case "left" : x--;break;
            case "right" : x++;break;
            case "up" : y++;break;
            case "down" : y--;break;
        }
        //4.최대 값의 범위를 설정해준다.
        if(Math.abs(x)>range[0]){
            x=x>0 ? range[0]:range[0]*-1;
        }
        if(Math.abs(y)>range[1]){
            y=y>0 ? range[1]: range[1]*-1;
            
        }
    }
    return [x,y]
}