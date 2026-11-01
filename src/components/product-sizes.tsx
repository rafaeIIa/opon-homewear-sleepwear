import { useState } from "react";
import { Ruler, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { sizeChart, type Size, type SizeLine } from "@/lib/sizes";

export function ProductSizes({ name, onAdd }: { name: string; onAdd: (size: Size) => void }) {
  const [line, setLine] = useState<SizeLine>(name.includes("Plus Size") ? "Plus" : "Slim");
  const [size, setSize] = useState<Size>();
  const [error, setError] = useState(false);

  return (
    <div className="mt-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div role="group" aria-label="Linha" className="flex border-b">
          {(["Slim", "Plus"] as const).map((option) => (
            <Button key={option} variant="ghost" size="sm" aria-pressed={line === option}
              className={`rounded-none border-b-2 ${line === option ? "border-primary text-primary" : "border-transparent text-muted-foreground"}`}
              onClick={() => { setLine(option); setSize(undefined); setError(false); }}>
              {option}
            </Button>
          ))}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" size="sm" className="h-auto px-0 text-xs"><Ruler /> Tabela de medidas</Button>
          </DialogTrigger>
          <DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto bg-card">
            <DialogTitle className="font-display text-3xl">Tabela de medidas OPON</DialogTitle>
            <DialogDescription>Numerações equivalentes por tamanho.</DialogDescription>
            {(["Slim", "Plus"] as const).map((group) => (
              <div key={group}>
                <h3 className="mb-2 font-display text-2xl text-primary">Linha {group}</h3>
                <table className="w-full text-left text-sm">
                  <thead><tr className="border-b"><th className="py-2 font-medium">Tamanho</th><th className="py-2 font-medium">Veste</th></tr></thead>
                  <tbody>{sizeChart[group].map((row) => <tr key={row.size} className="border-b"><td className="py-2">{row.size}</td><td className="py-2">{row.fits}</td></tr>)}</tbody>
                </table>
              </div>
            ))}
          </DialogContent>
        </Dialog>
      </div>
      <div role="group" aria-label={`Tamanho de ${name}`} className="mt-3 grid grid-cols-4 gap-2">
        {sizeChart[line].map((row) => (
          <Button key={row.size} variant={size === row.size ? "default" : "outline"}
            aria-pressed={size === row.size} title={`Veste ${row.fits}`} className="h-10 px-0"
            onClick={() => { setSize(row.size); setError(false); }}>{row.size}</Button>
        ))}
      </div>
      <div className="mt-1 min-h-6 text-xs text-muted-foreground" aria-live="polite">
        {error ? <span className="text-destructive">Selecione um tamanho.</span> : size ? `Tamanho ${size} · veste ${sizeChart[line].find((row) => row.size === size)?.fits}` : "Tamanho"}
      </div>
      <Button variant="outline" className="mt-2 h-auto w-full whitespace-normal rounded-none border-foreground/70 bg-transparent px-3 py-3.5 text-xs uppercase tracking-wider"
        onClick={() => { if (!size) { setError(true); return; } onAdd(size); }}>
        <ShoppingBag /> Adicionar ao Carrinho
      </Button>
    </div>
  );
}