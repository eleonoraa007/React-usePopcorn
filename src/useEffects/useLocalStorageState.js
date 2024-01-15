import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  //runs each time the watched movies are updated
  useEffect(
    function () {
      //we don't have to create a new array, using useEffect it
      //will rerender every time
      //localStorage.setItem("watched", JSON.stringify(watched));

      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
