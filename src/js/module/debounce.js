export default function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    const later = () => {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    func.apply(context, args);
  };
};