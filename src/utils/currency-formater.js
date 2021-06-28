const formater = new Intl.NumberFormat('ru-RU', {currency: 'RUB', style: 'currency'})

export function currency(value) {
  return formater.format(value)
}