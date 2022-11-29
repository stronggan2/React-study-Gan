import { useRef, useState } from "react";
import "./DiaryEditor.css";

const DiaryEditor = (onCreate) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({ author: "", content: "", emotion: 1 });

  const handleChangestate = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.emotion, state.emotion);
    alert("저장 성공");
    setState({
      author:"", contect:"", emotion:1
    })
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          type="text"
          value={state.author}
          onChange={handleChangestate}
        />
        {/* <input onChange={handleChangestate} /> */}
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangestate}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangestate}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
