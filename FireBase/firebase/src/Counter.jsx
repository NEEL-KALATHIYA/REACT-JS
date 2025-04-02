import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig"; // Ensure you have configured Firebase
import { doc, getDoc, setDoc } from "firebase/firestore";



const Counter = () => {
  const [count, setCount] = useState(0);
  const counterRef = doc(db, "counters", "counter1");

  useEffect(() => {
    const fetchCounter = async () => {
      const docSnap = await getDoc(counterRef);
      if (docSnap.exists()) {
        setCount(docSnap.data().value);
      } else {
        await setDoc(counterRef, { value: 0 });
      }
    };
    fetchCounter();
  }, []);

  const updateCounter = async (newValue) => {
    setCount(newValue);
    await setDoc(counterRef, { value: newValue });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Firebase Counter</h1>
      <p className="text-xl">Count: {count}</p>
      <div className="flex gap-2">
        <Button onClick={() => updateCounter(count + 1)}>Increment</Button>
        <Button onClick={() => updateCounter(count - 1)}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
