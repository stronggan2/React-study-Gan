import React from "react";

function DefaultProps({ name }) {
  return <div>안녕하세요. 제 이름은 {name}입니다.</div>;
}
DefaultProps.defaultProps = {
  name: "이름없음",
};
export default DefaultProps;
