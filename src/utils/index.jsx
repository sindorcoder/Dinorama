import { Spin, Flex } from "antd";
import { Suspense } from "react";

const Loading = () => {
  return (

    <div className="w-full h-screen flex items-center justify-center">
      <Flex align="center" gap="middle">
        <Spin tip="Loading..." size="large" />
      </Flex>
    </div>
    
  );
};

const SuspenseElement = ({ children }) => {
  return <Suspense fallback={<Loading />}> {children} </Suspense>;
};

const Container = ({ children }) => {
  return <div className="max-w-[1440px] px-5 mx-auto"> {children} </div>;
};

export { SuspenseElement, Loading, Container };
