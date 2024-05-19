// events
// olay kontrolü

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);

    if (count > 100) {
      setCount(0);
    }
  };

  return (
    <div className="bg-indigo-800 text-white py-10 flex justify-center items-center gap-4 text-3xl">
      <button onClick={handleIncrease}>+</button>

      <p
        onMouseOver={() => setCount(count + 1)}
        onDoubleClick={() => setCount(count + 10)}
      >
        {count}
      </p>

      <button onClick={() => setCount(count - 1)}>-</button>

      <img src="./images/woman.jpg" alt="" />
    </div>
  );
};
export default Counter;
