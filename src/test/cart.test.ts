import { describe, it, expect } from "vitest";
import { addCartItem, buildCheckoutMessage, cartTotal, checkoutUrl } from "@/lib/cart";

describe("cart", () => {
  const items = [
    { name: "Pijama Americano Longo Vinho", price: "119,90", qty: 1 },
    { name: "Pijama Americano Curto Preto", price: "99,90", qty: 1 },
  ] as const;
  it("sums total", () => expect(cartTotal(items)).toBeCloseTo(219.8));
  it("builds message", () => {
    const m = buildCheckoutMessage(items);
    expect(m).toContain(" 1x Pijama Americano Longo Vinho - R$ 119,90\n 1x Pijama Americano Curto Preto - R$ 99,90");
    expect(m).toContain("Total: R$ 219,80");
  });
  it("multiplies quantity", () => {
    expect(buildCheckoutMessage([{ name: "X", price: "99,90", qty: 2 }])).toContain("2x X - R$ 199,80");
  });
  it("keeps different sizes of the same product separate", () => {
    const first = addCartItem([], { ...items[0], size: "M" });
    const result = addCartItem(first, { ...items[0], size: "G" });
    expect(result.map(({ size, qty }) => ({ size, qty }))).toEqual([{ size: "M", qty: 1 }, { size: "G", qty: 1 }]);
  });
  it("combines quantities only for the same product and size", () => {
    const item = { ...items[0], size: "M" as const };
    expect(addCartItem([item], item)).toEqual([{ ...item, qty: 2 }]);
  });
  it("sends the selected size in the WhatsApp order", () => {
    const url = new URL(checkoutUrl([{ ...items[0], size: "M" }]));
    expect(url.searchParams.get("text")).toContain("1x Pijama Americano Longo Vinho (Tam: M) - R$ 119,90");
  });
});
