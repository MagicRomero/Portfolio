
/**
 * 
 * @example const myData = {
      someProperty: {
        deeperProperty: 'thing'
      }
    },
    getDescendantProp(myData, 'someProperty.deeperProperty');
    return 'thing';
 */
export const getDescendantProp = (target, descendant, splitCharacter = ".") => {
  const arr = descendant.split(splitCharacter);

  while (arr.length && (target = target[arr.shift()]));

  return target;
};
