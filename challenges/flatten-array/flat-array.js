const flattenArray = (array) => {

  const flattenedArray = array.reduce((newArray, item) => {

    const flattenedItem = Array.isArray(item) ? flattenArray(item) : [item];
    return newArray.concat(flattenedItem);

  }, []);

  return flattenedArray;

};

export default flattenArray;
