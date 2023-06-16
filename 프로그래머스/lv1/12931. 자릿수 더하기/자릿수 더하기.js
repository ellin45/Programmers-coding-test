function solution(n)
{
   return(n+"").split("").reduce((acc,curr) => acc + parseInt(curr),0)
     
}

// var answer = 0;
//     var a =String(n);
//     for(var i=0; i<a.length; i++){
//         answer += parseInt(a[i]);
//         console.log(answer);