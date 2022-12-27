export const randomNumber = (name: string) => {
  return `${name}님의 행운의 번호는 ${Math.floor(Math.random() * 100)}`;
};
