function solution(s) {
    var answer = '';
    var split = s.split(" ").map((x,i) => {
    var Word = x.split("").map((y,i) =>{
        if(i % 2 === 0)return y.toUpperCase()
            else return y.toLowerCase()
    })
      return Word.join('');
    })
    return split.join(' ');
}