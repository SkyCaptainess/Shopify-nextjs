export const addZeroIfNeeded = (num, size) => {
  const s = `000000000${num}`;
  return s.substr(s.length - size);
};
