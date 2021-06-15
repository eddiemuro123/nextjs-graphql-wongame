export function formatPrice(price: number | bigint): string {
  return price > 0
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    : 'Free'
}
