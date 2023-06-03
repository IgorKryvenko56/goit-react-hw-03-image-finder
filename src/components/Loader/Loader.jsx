import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import 'components/Loader/Loader.css';

const Loader = () => {
  return (
    <div className="Spinner">
      {/* <Discuss
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      /> */}
      <ThreeDots
        height={80}
        width={80}
        radius={9}
        color="#000000"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
