import mixColors from "./mixColors";

export default function findColorCombosWithDepth(set, target, depth) {
  const result = [],
    currentSet = [];

  findColorComboWithDepth(set, target, currentSet, result, depth);

  return result;
}

function findColorComboWithDepth(set, target, currentSet, result, depth) {
  if (depth === 0) return;

  if (mixColors(currentSet) === target) {
  }

  for (let color of set) {
    findColorComboWithDepth(
      set,
      target,
      [...currentSet, color],
      result,
      depth - 1
    );
  }
}
