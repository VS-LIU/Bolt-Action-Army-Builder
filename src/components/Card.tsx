import { useEffect, useState } from 'react'




function Card() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log('Count updated:', count);
  // }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="card">
      <button onClick={handleClick}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}


export default Card
