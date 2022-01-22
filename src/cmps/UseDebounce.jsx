import React, { useState, useEffect } from 'react'

export default function UseDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      }
    }, [value] 
  )

  return debouncedValue;
}