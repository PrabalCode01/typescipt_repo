function addNumber(num: number) {
  return num + 2;
}

function getUppercase(val: string) {
  return val.toUpperCase();
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

loginUser("prabal", "abc#");

getUppercase("prabal");

addNumber(5);

export {};
