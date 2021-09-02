// takes in a funciton, returns a function that will call itslef with a delay

const debounce = (func, delay = 1000) => {
  let timerId;

  return function debouncedFunc(...args) {
    const later = () => {
      clearTimeout(timerId);
      func(...args);
    };

    clearTimeout(timerId);
    timerId = setTimeout(later, delay);
  };
};

export default debounce;
