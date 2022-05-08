import currency from 'currency.js';

function format(currency) {
  return `${currency.dollars()}.${currency.cents()}`;
}

export function handleTotalItemPrice(price, quantity) {
  return currency(price * quantity, { format }).format();
}