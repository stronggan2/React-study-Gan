const today = new Date();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();
const todayDate = today.getDate();
const todayDay = today.getDay();
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
export default function Today() {
  return (
    <TodayStyle>
      <TodayYear>{todayYear}년 </TodayYear>
      <TodayMonthnDate>
        {todayMonth + 1}월 {todayDate}일 {DAYS[todayDay]}요일
      </TodayMonthnDate>
    </TodayStyle>
  );
}