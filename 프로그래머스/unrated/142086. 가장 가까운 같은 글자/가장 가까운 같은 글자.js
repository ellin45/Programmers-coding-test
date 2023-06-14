const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
      console.log(count,i, char)
    return count < 0 ? count : i - count;
      
  });

//lastIndexOf() === 일치하는 인덱스가 없을 경우 -1을반환
//그 문자의 인덱스를 반환하고, 이 때 count 값은 그 인덱스가 됩니다
