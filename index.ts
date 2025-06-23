// Array with alphabet letters
const DICT: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const getDock = (index: number): string => {
  // console.log("index", index);
  if (index < 0) {
    throw new Error("Index must be positive");
  }
  const N = DICT.length;
  if (index < N) {
    return DICT[index];
  }
  const q = Math.floor(index / N);
  // console.log("index / N", index / N, " - math.floor", Math.floor(index / N));
  const r = index % N;
  // console.log("index % N", index % N);
  return `${getDock(q - 1)}${DICT[r]}`;
};
for (let i = 0; i < 26 * 26; i++) {
  console.log(i, getDock(i));
}
