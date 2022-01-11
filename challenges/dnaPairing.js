/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

inputs
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/

function pairElement(str) {
  const at = "AT";
  const cg = "CG";

  return str.split("").map((value) => {
    if (at.includes(value)) {
      return validateGroup(at, value);
    } else {
      return validateGroup(cg, value);
    }
  });
}

function validateGroup(group, value) {
  const index = group.indexOf(value);
  if (index > 0) {
    return [value, group.charAt(0)];
  } else {
    return [value, group.charAt(1)];
  }
}

console.log(pairElement("GCG"));
console.log(pairElement("TTGAG"))

// OPTION 2

function pairElement2(str){

    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    }

    return str.split("").map(value => [value, pairs[value]]);
}

console.log(pairElement2("GCG"));
console.log(pairElement2("TTGAG"))