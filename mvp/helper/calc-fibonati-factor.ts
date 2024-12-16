export default function calcAddFactor(
  startValue: number,
  repetitions: number,
  targetValue: number,
): number {
  // Berechne den Unterschied zwischen Zielwert und Startwert
  const totalDifference = targetValue - startValue;

  // Berechne den Wert, der in jeder Iteration hinzugefügt werden muss
  const additionFactor = totalDifference / repetitions;

  return additionFactor;
}
