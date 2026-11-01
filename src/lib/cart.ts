export type CartItem = { name: string; price: string; qty: number };

export const toNumber = (p: string) => Number(p.replace(/\./g, "").replace(",", "."));
export const formatBRL = (n: number) =>
  "R$ " + n.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const cartTotal = (items: CartItem[]) =>
  items.reduce((s, i) => s + toNumber(i.price) * i.qty, 0);

export function buildCheckoutMessage(items: CartItem[]) {
  const lines = items.map((i) => ` ${i.qty}x ${i.name} - ${formatBRL(toNumber(i.price) * i.qty)}`);
  return (
    "Olá, OPON! Gostaria de finalizar meu pedido do site:\n\n" +
    lines.join("\n") +
    `\n\n*Total: ${formatBRL(cartTotal(items))}*\n\nAguardo para combinarmos o pagamento e a entrega!`
  );
}

export const checkoutUrl = (items: CartItem[]) =>
  `https://wa.me/5521984113654?text=${encodeURIComponent(buildCheckoutMessage(items))}`;
