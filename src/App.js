import React, { useState } from "react";

let id = 0;
const makeId = () => id++;

const Shop = () => {
  const [tasks, setTasks] = useState([
    { id: makeId(), val: 0 },
    { id: makeId(), val: 0 },
    { id: makeId(), val: 0 },
  ]);
  const [total, setTotal] = useState(0);

  const increase = (id) => {
    setTotal(total + 1);
    setTasks(
      tasks.map((task) => {
        if (task.id === id) return { ...task, val: task.val + 1 };
        return task;
      })
    );
  };
  const remove = (id, val) => {
    if (val > 0) setTotal(total - 1);
    setTasks(
      tasks.map((task) => {
        if (task.id === id) return { ...task, val: task.val - 1 };
        return task;
      })
    );
    if (val < 1) setTasks(tasks.filter((t) => id !== t.id));
  };
  const reset = () => {
    setTotal(0);
  };
  return (
    <>
      <h1>سبد خرید{total}</h1>
      <button onClick={reset}>ریستار</button>
      {tasks.map((task) => (
        <li key={task.id}>
          <button onClick={() => increase(task.id)}>افزایش</button>
          <button onClick={() => remove(task.id, task.val)}>حذف</button>
          <p>{task.val}</p>
        </li>
      ))}
    </>
  );
};

export default Shop;
