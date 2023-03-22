function solution(s){
    var countP = 0
    var countY = 0;
  for(let i=0; i<s.length;i++){
      if(s[i] === 'p' || s[i] === 'P')
  {countP++;
  }else if(s[i] === 'y' || s[i] === 'Y'){
   {countY++;
   }   
  }
  }
    return (countP === countY) ? true : false;

}
