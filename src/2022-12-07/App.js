// import { createContext, useContext } from "react";
// // MyContext 객체 생성
// const MyContext = createContext();

// function App() {
//   return (
//     <MyContext.Provider value="Hello World!">
//       <GrandParent />
//     </MyContext.Provider>
//   );
// }

// function GrandParent() {
//   return <Parent />;
// }
// function Parent() {
//   return <Child />;
// }
// function Child() {
//   return <Message />;
// }

// function Message() {
//   // 전달받은 데이터 꺼내서 쓰겠습니다.
//   const value = useContext(MyContext);
//   return <div>전달받은 데이터 : {value}</div>;
// }
// export default App;
