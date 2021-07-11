export const getTime = (UTCdate: Date) => {
  const date = new Date(Number(UTCdate) * 1000);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${hour}:${minutes}`;
};
