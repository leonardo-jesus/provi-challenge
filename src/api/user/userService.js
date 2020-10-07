export const getUserData = async () => {
  const req = await fetch('http://www.mocky.io/v2/5c923b0932000029056bce39');
  const res = await req.json();

  return res.name;
};