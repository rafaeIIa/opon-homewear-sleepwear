export const sizeChart = {
  Slim: [
    { size: "P", fits: "36/38" },
    { size: "M", fits: "40" },
    { size: "G", fits: "42/44" },
    { size: "GG", fits: "46/48" },
  ],
  Plus: [
    { size: "4G", fits: "50" },
    { size: "5G", fits: "52" },
    { size: "6G", fits: "54" },
    { size: "7G", fits: "56" },
  ],
} as const;

export type SizeLine = keyof typeof sizeChart;
export type Size = (typeof sizeChart)[SizeLine][number]["size"];