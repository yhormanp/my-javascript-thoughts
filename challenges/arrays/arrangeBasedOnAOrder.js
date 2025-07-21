
// having the array  list, where each object has a property called colId, try to arrange the array list based on another
// array of strings that will provide the order or the records that will be defined for the  array list

const list = [
  { colId: 'a', value: 1 },
  { colId: 'b', value: 2 },
  { colId: 'c', value: 3 },
  { colId: 'd', value: 4 }
];

const order = ['c','a','b'];

// const arrangeArray = (list, order) => {
//   const orderMap = new Map(order.map((item, index) => [item.colId, index]));
//   return list.sort((a, b) => {
//     const aIndex = orderMap.get(a.colId);
//     const bIndex = orderMap.get(b.colId);
    
//     // If both colIds are not in the order array, keep their original order
//     if (aIndex === undefined && bIndex === undefined) return 0;
    
//     // If only one of them is in the order array, it should come first
//     if (aIndex === undefined) return 1;
//     if (bIndex === undefined) return -1;
    
//     // Otherwise, sort based on their indices in the order array
//     return aIndex - bIndex;
//   });
// };

const arrangeArray = (list, order) => {
  const orderMap = new Map(order.map((colId, index) => [colId, index]));
  
  return list.sort((a, b) => {
    const aIndex = orderMap.get(a.colId);
    const bIndex = orderMap.get(b.colId);
    
    // If both colIds are not in the order array, keep their original order
    if (aIndex === undefined && bIndex === undefined) return 0;
    
    // If only one of them is in the order array, it should come first
    if (aIndex === undefined) return 1;
    if (bIndex === undefined) return -1;
    
    // Otherwise, sort based on their indices in the order array
    return aIndex - bIndex;
  });
}


console.log('array ordered', arrangeArray(list, order));