import { Spin } from 'antd';

const Loading = () => (
  <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-[99999] bg-white">
    <Spin size="large" />
  </div>
);

export default Loading;
