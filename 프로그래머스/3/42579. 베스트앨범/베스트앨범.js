function solution(genres, plays) {
  // 1. 하나의 수록 순위를 담을 해시를 만들고
  let ranking = {};

  // 2. 각 장르의 총 재생 횟수를 계산하여 ranking 객체에 저장
genres.forEach((genre,idx)=>{
    if(!ranking[genre]){
        ranking[genre] = 0;
    }
    // console.log("ranking더하기전",!ranking[genre])
    ranking[genre] += plays[idx];
    // console.log(ranking[genre]);
})
 

  // 3. ranking 객체를 재생 횟수에 따라 내림차순으로 정렬
 let sortedgenre = Object.keys(ranking).sort((a,b)=>
     ranking[b]-ranking[a])

  // 4. 각 장르별로 해당하는 노래들을 재생 횟수에 따라 내림차순으로 정렬하고,
  //    고유 번호를 배열에 담아 반환
 
const result = [];
    sortedgenre.forEach((genre)=>{
        const genreIndexes = [];
        for(let i = 0; i < genres.length; i++){
            if(genres[i] === genre){
                genreIndexes.push(i);
                console.log("genres[i]",genres[i]);
                console.log("genre",genre);
                console.log("genreIndexes",genreIndexes);
                
            }
        }
        
        genreIndexes.sort((a,b)=> plays[b]-plays[a]);
        console.log("genreIndexes2",genreIndexes);
        
        result.push(...genreIndexes.slice(0,2));
        console.log("genreIndexes3",genreIndexes);
        
    })
 return result
}