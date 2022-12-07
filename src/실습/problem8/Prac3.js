import React, { useReducer, useState } from "react";

const Prac3 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return {
          count: state.count + 1,
          member: [
            ...state.member,
            action.payload,
            // {
            //   name: action.payload.name,
            //   age: action.payload.age,
            //   address: action.payload.address,
            // },
          ],
        };
      case "delete":
        return {
          count: state.count - 1,
          member: [
            // ...state.member.filter(
            //   (person) => person !== action.payload
            // )
            // 동일한 객체끼리의 비교가 안되는 이유, 삭제가 안되는 이유는???
            ...state.member.filter(
              (person) =>
                person.name !== action.payload.name &&
                person.age !== action.payload.age &&
                person.address !== action.payload.address
            ),
          ],
        };
      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
    member: [],
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [members, dispatch] = useReducer(reducer, initialState);
  const regex = /[^0-9]/g;
  return (
    <div>
      <h2>
        전체 회원 수 : {members.count}
        <br />
      </h2>
      <h2>이름 : </h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>나이 : </h2>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value.replace(regex, ""))}
      />
      <h2>주소 : </h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          dispatch({
            type: "add",
            payload: {
              name: name,
              age: age,
              address: address,
            },
          });
        }}
      >
        추가
      </button>
      <br />
      {members.member.map((person) => (
        <div key={person.name}>
          <div>{person.name}</div>
          <div>{person.age}</div>
          <div>{person.address}</div>
          <button
            onClick={() => {
              dispatch({
                type: "delete",
                payload: {
                  name: person.name,
                  age: person.age,
                  address: person.address,
                },
              });
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default Prac3;
