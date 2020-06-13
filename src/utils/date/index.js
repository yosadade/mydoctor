export const getChatTime = date => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = oldDate => {
  const year = oldDate.getFullYear();
  const mount = oldDate.getMonth() + 1;
  const date = oldDate.getDate();
  return `${year}-${mount}-${date}`;
};
