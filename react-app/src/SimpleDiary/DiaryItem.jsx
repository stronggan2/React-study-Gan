const DiaryItem = ({ author, contect, create_date, id, emotion }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정 점수 : {emotion} |{" "}
        </span>
        <br />
        <span className="date">{new Date(create_date).toLocaleString()}</span>
      </div>
      <div className="content">{contect}</div>
      <button
        onClick={() => {
          console.log(id);
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;
