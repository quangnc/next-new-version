export const formatNumber = (num: number): string => {
  return Intl.NumberFormat('en-US').format(num)
}
