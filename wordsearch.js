const filteredArr = function(letters) {
//converts the vertical line into a horizontal array
  let newArr = [];
  const row = letters.length;
  const col = letters[0].length;
    
  for (let i = 0; i < col; i++) {
    newArr.push([]);
  }
    
  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      newArr[y].push(letters[x][y]);
    }
  }
  
  return newArr;

};

const wordSearch = (letters, word) => {
  const verticalJoin = filteredArr(letters).map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};


module.exports = wordSearch;