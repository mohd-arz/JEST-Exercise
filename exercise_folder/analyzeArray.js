function analyzeArray(arr) {
  const average = (arr.length === 0) ? 0 : (arr.reduce((prev, current) => prev + current, 0)) / arr.length;
  const min = (arr.length === 0) ? 0 : Math.min(...arr);
  const max = (arr.length === 0) ? 0 : Math.max(...arr);
  return {
    average,
    min,
    max,
    length: arr.length,
  };
}
export default analyzeArray;
