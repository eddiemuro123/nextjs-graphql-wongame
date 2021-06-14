export function formatPrice(price: number | bigint): string {
  return price > 0
    ? new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
      }).format(price)
    : 'Gratuito'
}
