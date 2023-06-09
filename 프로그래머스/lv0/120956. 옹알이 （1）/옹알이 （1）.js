function solution(babbling) {
    // const babyLanguage = ["aya","ye","woo","ma"]
    //매치를 써서 되는지 확인을 해보쟈
   const regex = /^(aya|ye|woo|ma)+$/;
     let cnt = 0;
    //이렇게 확인하고
    //맞는지 순회를돌면서 확인하자.
    //먼저 babbling안에 있는 regex조건을 만족하는 애들을 하나씩 맞다면 cnt를 올려주면 되지않을까
    babbling.forEach((value)=>{
        if(regex.test(value)){
            cnt++;
        }
    })
   
    //하나씩 비교해주는거 아닌가
    //그냥 replaceAll 해서 풀어야되나욤
    
    return cnt; 
}
//babbling은 최대 한번씩만 등장합니다.

