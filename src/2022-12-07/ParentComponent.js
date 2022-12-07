import ChildComponent from "./ChildComponent";
import { MyContext } from "./Context";

const ParentComponent = () => {
  return (
    <div>
      <MyContext.Provider value="안녕하세요">
        <ChildComponent />
      </MyContext.Provider>
    </div>
  );
};

export default ParentComponent;
