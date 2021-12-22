export const formatCurrency = (amount: number, precision = 2): string => {
  const roundedAmount = Math.round((amount + Number.EPSILON) * 100) / 100
  return `$${roundedAmount.toFixed(precision)}`
}
