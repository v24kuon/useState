import { useState } from 'react';

const UseState1 = () => {
  const style: { [key: string]: string } = { marginBottom: '5rem' };
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  return (
    <div>
      <div {...{ style }}>
        <button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
          }}
        >
          Count
        </button>
        <p>{count}</p>
        <p>2足す処理をしているがカウントされない</p>
      </div>
      <div {...{ style }}>
        <button
          onClick={() => {
            setCount2((pre) => pre + 1);
            setCount2((pre) => pre + 1);
          }}
        >
          Count
        </button>
        <p>{count2}</p>
        <p>変数に入れることで2足される</p>
      </div>
    </div>
  );
};

export default UseState1;
