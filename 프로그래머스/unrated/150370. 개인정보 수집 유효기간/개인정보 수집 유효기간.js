function solution(today, terms, privacies) {
    let map = new Map();
    let ans = [];

    let [todayYear, todayMonth, todayDay] = today.split('.');
    let todaySum = (+todayYear * 28 * 12) + (+todayMonth * 28) + +todayDay;

    terms.forEach((item)=>{
        const [type, month] = item.split(' ');
        map.set(type, +month);
        console.log(type)
    });

    privacies.forEach((item,i)=>{
        let [date, type] = item.split(' ');
        let [year, month, day] = date.split('.');
        let privaciesSum = (+year * 28 * 12) + ((+month + map.get(type)) * 28) + +day;


        if(privaciesSum<= todaySum) ans.push(i+1);
    })
  return ans;
}



//개인정보 수집 기간 : privacies + terms의 유효기간 
//개인 정보 수집 기간 > 유효기간 ? 파기해야할 정보 : 파기하지 말아야할 정보
//return 값은 파기해야할 개인정보의 번호의 idx 정보

//1.today 날짜를 기준으로 terms 날짜를 더했을때의 날짜를 확인한다.
//1-1 terms의 날짜를 확인하려면 공백을 기준으로 앞 의 문자가 약관 번호이고 뒤의 문자가 개월 수 이다.
//년/월/일 순으로 년*12*30 / 월 * 30 / 일 
//2.privacies 날짜를 넘는지 확인한다.
//privacies의 공백 다음 문자도 약관 종류를 가르키기 때문에 terms의 약관종류를 비교하여 
//2-1 privacies 가 유효기간을 넘는다면 false값 //map
//2-2 날짜를 넘지 않는다면 true 값을 넘겨줘서
//2-3 true값의 idx를 넘겨 받아서



