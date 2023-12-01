// function solution(phone_book) {
//     let answer;
    
//     phone_book.forEach((el,idx)=>{
//         let duplicateWord = phone_book[0]; // 접두사
//         let checkduplicate = el.concat(0,duplicateWord.length) // 접두사인지 확인
//         // console.log("checkduplicate",checkduplicate[idx]);
//         // console.log("duplicateWord",duplicateWord[idx]);
        
//         return answer = (duplicateWord[idx] === checkduplicate[idx]) ? false: true;
        
//     })
//     return answer;
// }

//배열의 첫번째 문자열이 다른 배열의 문자열과 일치하는 경우 => false
//문자열과 일치하는게 없을 경우 -> true
//hash -> hash값이랑 상관없이 key값을 만들고
//key값과 일치하는 다른 key값이 있기만 하면 바로 false
//중복해서 전화번호가 없으니까 hash값이 중복될 일이 없음
//각각의 전화번호 길이는 20으로 제한

//접두어 : phone_book의 첫번째 배열
//접두사 : phone_book의 첫번째 배열과 일치하는 문자열이 맨 처음에 있을때 접두사가됨


function solution(phoneBook) {
  const table = {};

  for (const number of phoneBook) {
    table[number] = true;
  };

  for (const number of phoneBook) {
    for (let i = 1; i < number.length; i += 1) {
      const prefix = number.slice(0, i);
      if (table[prefix]) return false;  
    };
  };

  return true;
}