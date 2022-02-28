import { useState } from 'react';
type NameType = {
  first: string;
  last: string;
};

const UseState2 = () => {
  const [name, setName] = useState<NameType>({ first: '', last: '' });
  return (
    <>
      <form>
        <input type='text' value={name.first} onChange={(e) => setName({ ...name, first: e.target.value })} />
        <input type='text' value={name.last} onChange={(e) => setName({ ...name, last: e.target.value })} />
      </form>
      <p>苗字:{name.first}</p>
      <p>名前:{name.last}</p>
    </>
  );
};

export default UseState2;
