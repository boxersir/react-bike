import { Spin } from "antd";
function Loading<T>(props: T): JSX.Element {
  console.log(props);
  return (
    <div className="">
      <Spin tip="加载中..." size="large" fullscreen />
    </div>
  );
}

export default Loading;
