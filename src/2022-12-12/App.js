import React, { useEffect } from "react";
import { db } from "./Firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  setDoc
} from "firebase/firestore";

const App = () => {
  const fruitCollection = collection(db, "fruits");

  // useEffect(() => {
    // async function getFruits() {
      // 데이터 여러 개 가져오는 코드
      //   const data = await getDocs(fruitCollection);
      //   console.log(data);
      // }

      // 데이터 한 개 가져오는 코드
      // const docRef = doc(fruitCollection, "수박");
      // const data = await getDoc(docRef);

      // 조건 검색하기 (계절 = 가을)
      // const data = query(fruitCollection, where("season", "==", "가을"));
      // const querySnapshot = await getDocs(data);

      // 조건 검색하기 (가격 > 10000)
      // const data = query(fruitCollection, where("price", ">", 10000));
      // const querySnapshot = await getDocs(data);

      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, " : ", doc.data());
      // });

      // 예외처리
      // if (data.exists()) {
      //   console.log("결과 : ", data.data());
      // } else {
      //   console.log("결과 없음");
      // }
  //   }
  //   getFruits();
  // }, []);

  // 데이터 추가하기
  async function setFruit() {
    await setDoc(doc(fruitCollection, "바나나"), {
    season: "봄",
    color: "노랑",
    taste: "달콤",
    price: 3000,
    });
    }

  return <div>
    <button onClick={setFruit}>과일 추가</button></div>;
};

export default App;
