import { describe, it, expect } from "vitest";
import { buildCheckoutMessage, cartTotal } from "@/lib/cart";

describe("cart", () => {
  const items = [
    { name: "Pijama Americano Longo Vinho", price: "119,90", qty: 1 },
    { name: "Pijama Americano Curto Preto", price: "99,90", qty: 1 },
  ];
  it("sums total", () => expect(cartTotal(items)).toBeCloseTo(219.8));
  it("builds message", () => {
    const m = buildCheckoutMessage(items);
    expect(m).toContain(" 1x Pijama Americano Longo Vinho - R$ 119,90\n 1x Pijama Americano Curto Preto - R$ 99,90");
    expect(m).toContain("Total: R$ 219,80");
  });
  it("multiplies quantity", () => {
    expect(buildCheckoutMessage([{ name: "X", price: "99,90", qty: 2 }])).toContain("2x X - R$ 199,80");
  });
});
