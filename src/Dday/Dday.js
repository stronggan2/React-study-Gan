import React from 'react';

const { dDayName, date } = props.info;
  const [hover, setHover] = useState(false);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const today = new Date();
    const dday = new Date(`${date} 00:00:00`);
    const gapNum = dday - today;
    setDays(Math.ceil(gapNum / (1000 * 60 * 60 * 24)));
  }, [date]);
  

const Dday = () => {
  return (
    <div>
      
    </div>
  );
};

export default Dday;