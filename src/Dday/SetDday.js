const [isSubmit, setIsSubmit] = useState(false);
  const [list, setList] = useState([]);
  const [userInputs, setUserInputs] = useState({
    dDayName: '',
    date: '',
  });
  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInputs.dDayName === '' || userInputs.date === '') {
      return;
    } else {
      setIsSubmit(true);
      setList([...list, userInputs]);
    }
    for (let i = 0; i < 2; i++) {
      e.target[i].value = '';
    }
    setUserInputs({ dDayName: '', date: '' });
  };
  const deleteItem = (e) => {
    const key = e.target.id;
    list.splice(key, 1);
    setList([...list]);
  };