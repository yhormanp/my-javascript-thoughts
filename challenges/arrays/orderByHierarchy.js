// create a function that will arrange the records of the following array in a new array but in a hierarchical and alphabetical order
// the first item must be the parent, after that the first child , followed by it's child , and so on,
// afther that the second child, followed by it's childs and so on.
// parent
// child 1
//   grandson 1
//   grandson 2
//     grandgrandson 1
//     grandgrandson 2
// child 2
//   grandson 3
//   grandosn 4

const arr2 = [
  {
    code: 'abcd123',
    name: 'abcd123',
    description: 'abc123',
    type: 'Global',
    depth: 1,
    hierarchy: ['abc123 abc123'],
  },
  ,
  {
    code: 'abcd1234',
    name: 'abcd1234',
    description: 'son of abc123',
    type: 'Global',
    depth: 1,
    hierarchy: ['abc123 abc123', 'abcd1234 abcd1234'],
  },
  {
    code: 'minion123',
    name: 'minion123',
    description: 'son of abc123',
    type: 'Global',
    depth: 1,
    hierarchy: ['abc123 abc123', 'minion123 minion123'],
  },
  {
    code: 'zebra123',
    name: 'zebra123',
    description: 'son of abc123',
    type: 'Global',
    depth: 1,
    hierarchy: ['abc123 abc123', 'zebra123 zebra123'],
  },
  {
    code: 'abcde12345',
    name: 'abcde12345',
    description: 'son of abcd1234, grandson of abc123',
    type: 'Global',
    depth: 2,
    hierarchy: ['abc123 abc123', 'abcd1234 abcd1234', 'abcde12345 abcde12345'],
  },
  {
    code: 'sminion1234',
    name: 'sminion1234',
    description: 'son of minion123',
    type: 'Global',
    depth: 2,
    hierarchy: [
      'abc123 abc123',
      'minion123 minion123',
      'sminion1234 sminion1234',
    ],
  },
  {
    code: 'zebra12345',
    name: 'zebra12345',
    description: 'son of abcd1234',
    type: 'Global',
    depth: 2,
    hierarchy: ['abc123 abc123', 'abcd1234 abcd1234', 'zebra12345 zebra12345'],
  },
  {
    code: 'abcdef123456',
    name: 'abcdef123456',
    description: 'son of abcde12345',
    type: 'Global',
    depth: 3,
    hierarchy: [
      'abc123 abc123',
      'abcd1234 abcd1234',
      'abcde12345 abcde12345',
      'abcdef123456 abcdef123456',
    ],
  },
  {
    code: 'minion12345',
    name: 'minion12345',
    description: 'son of abcde12345',
    type: 'Global',
    depth: 3,
    hierarchy: [
      'abc123 abc123',
      'abcd1234 abcd1234',
      'abcde12345 abcde12345',
      'minion12345 minion12345',
    ],
  },
  {
    code: '654321alfa',
    name: '654321alfa',
    description: 'son of abcdef123456',
    type: 'Global',
    depth: 4,
    hierarchy: [
      'abc123 abc123',
      'abcd1234 abcd1234',
      'abcde12345 abcde12345',
      'abcdef123456 abcdef123456',
      '654321alfa 654321alfa',
    ],
  },
  {
    code: 'abcdefg1234567',
    name: 'abcdefg1234567',
    description: 'son of abcdef123456',
    type: 'Global',
    depth: 4,
    hierarchy: [
      'abc123 abc123',
      'abcd1234 abcd1234',
      'abcde12345 abcde12345',
      'abcdef123456 abcdef123456',
      'abcdefg1234567 abcdefg1234567',
    ],
  },
  {
    code: 'adaad test910',
    name: 'adaad test910',
    description: 'son of abcdef123456',
    type: 'Global',
    depth: 4,
    hierarchy: [
      'abc123 abc123',
      'abcd1234 abcd1234',
      'abcde12345 abcde12345',
      'abcdef123456 abcdef123456',
      'adaad test910 adaad test910',
    ],
  },
];

const orderByHierarchy = (items) => {
  return items.sort((a, b) => {
    console.log(
      'items initial',
      a.name,
      a.hierarchy.length,
      b.name,
      b.hierarchy.length
    );

    for (let i = 0; i < Math.min(a.hierarchy.length, b.hierarchy.length); i++) {
      console.log(
        'items to compare: ',
        a.hierarchy[i],
        b.hierarchy[i],
        '-I:',
        i
      );
      if (a.hierarchy[i] !== b.hierarchy[i]) {
        //compare by string
        console.log('comparing by string');
        a.hierarchy[i].localeCompare(b.hierarchy[i]);
      } else {
        console.log('same parent, nothing to do');
      }
    }

    return a.hierarchy.length - b.hierarchy.length;
  });
};

// const orderByHierarchy2 = (items) =>{
//   return items.sort((a, b) => {
//     return a.hierarchy.length - b.hierarchy.length
//   });

// }

const orderByHierarchy2 = (items) => {
  return items.sort((a, b) => {

    orderByHierarchyContent(a, b);
    return a.hierarchy.length - b.hierarchy.length;
  });
};

const orderByHierarchyContent = (itemA, itemB) => {
  for (
    let i = 0;
    i < Math.min(itemA.hierarchy.length, itemB.hierarchy.length);
    i++
  ) {
    if (itemA.hierarchy[i] !== itemB.hierarchy[i]) {
      itemA.hierarchy[i].localeCompare(itemB.hierarchy[i]);
    }
  }
};

// const orderByHierarchy2 = (items) => {
//   let itemsSort = [];
//   itemsSort = orderByHierarchyLenght(items);
//   itemsSort = orderByHierarchyContent(itemsSort);
//   return itemsSort;
// };

console.log('elements ordered', orderByHierarchy2(arr2));
