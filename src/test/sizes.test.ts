import { describe, expect, it } from "vitest";
import { sizeChart } from "@/lib/sizes";

describe("official OPON size chart", () => {
  it("maps Slim sizes to their official clothing numbers", () => {
    expect(sizeChart.Slim).toEqual([
      { size: "P", fits: "36/38" }, { size: "M", fits: "40" },
      { size: "G", fits: "42/44" }, { size: "GG", fits: "46/48" },
    ]);
  });
  it("maps Plus sizes to their official clothing numbers", () => {
    expect(sizeChart.Plus).toEqual([
      { size: "4G", fits: "50" }, { size: "5G", fits: "52" },
      { size: "6G", fits: "54" }, { size: "7G", fits: "56" },
    ]);
  });
});