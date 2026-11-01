import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, MessageCircle, Menu, X, Ruler, Sparkles, Send } from "lucide-react";
import hero from "@/assets/hero.jpg";
import longo from "@/assets/longo.jpg";
import curto from "@/assets/curto.jpg";
import coracoes from "@/assets/coracoes.jpg";

const IG = "https://www.instagram.com/useopon/";
const WA_GENERAL =
  "https://wa.me/5521984113654?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20OPON%20e%20gostaria%20de%20fazer%20um%20pedido";
const waProduct = (name: string) =>
  `https://wa.me/5521984113654?text=${encodeURIComponent(`Olá! Gostaria de comprar o Conjunto ${name}`)}`;

const products = [
  { name: "Pijama Americano Longo Vinho", old: "129,90", price: "119,90", img: longo },
  { name: "Pijama Americano Longo Rosa-bebê", old: "129,90", price: "119,90", img: longo },
  { name: "Pijama Americano Longo Turquesa", old: "129,90", price: "119,90", img: longo },
  { name: "Pijama Americano Longo Estampa de Luas e Estrelas", old: "129,90", price: "119,90", img: longo },
  { name: "Pijama Americano Longo Azul-bebê", old: "129,90", price: "119,90", img: longo },
  { name: "Pijama Americano Longo Azul-marinho", old: "129,90", price: "119,90", img: longo },
  { name: "Pijama Americano Curto Plus Size Estampa de Corações Coloridos", old: "119,90", price: "109,90", img: coracoes },
  { name: "Pijama Americano Curto Plus Size Estampa de Corações Rosas", old: "119,90", price: "109,90", img: coracoes },
  { name: "Pijama Americano Curto Estampa de Estrelinhas Douradas", old: "109,90", price: "99,90", img: curto },
  { name: "Pijama Americano Curto Xadrez Azul", old: "109,90", price: "99,90", img: curto },
  { name: "Pijama Americano Curto Preto", old: "109,90", price: "99,90", img: curto },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OPON — Pijamas e Homewear com conforto e elegância" },
      { name: "description", content: "Conheça a coleção OPON de pijamas americanos longos e curtos. Peça pelo WhatsApp." },
      { property: "og:title", content: "OPON — Pijamas e Homewear" },
      { property: "og:description", content: "Aconchego, estilo e bem-estar para os seus momentos em casa." },
    ],
  }),
  component: Index,
});

const btnPrimary =
  "inline-flex items-center justify-center gap-2 bg-primary px-7 py-3.5 text-sm tracking-wider uppercase text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5";
const btnOutline =
  "inline-flex items-center justify-center gap-2 border border-foreground/70 px-7 py-3.5 text-sm tracking-wider uppercase text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground";

function Index() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#colecao", label: "Coleção" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#inicio" className="font-display text-3xl font-semibold tracking-[0.3em] text-primary">OPON</a>
          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary">{l.label}</a>
            ))}
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram @useopon" className="inline-flex items-center gap-2 border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-4 w-4" /> @useopon
            </a>
          </nav>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t px-6 py-6 md:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base hover:text-primary">{l.label}</a>
            ))}
            <a href={IG} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary"><Instagram className="h-4 w-4" /> @useopon</a>
          </nav>
        )}
      </header>

      <section id="inicio" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="order-2 md:order-1">
          <p className="mb-6 text-xs tracking-[0.35em] uppercase text-primary">Homewear & Sleepwear</p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
            O conforto de casa, <em className="text-primary">vestido com elegância.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg font-light text-muted-foreground">
            Pijamas pensados para os seus momentos mais seus — macios, bonitos e feitos para desacelerar.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#colecao" className={btnPrimary}>Explorar Coleção</a>
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className={btnOutline}>
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src={hero} alt="Mulher a usar pijama OPON vinho" width={1280} height={1600} className="aspect-[4/5] w-full object-cover" />
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-6 text-xs tracking-[0.35em] uppercase text-primary">Sobre a OPON</p>
          <h2 className="font-display text-4xl md:text-5xl">Feito para os momentos em casa</h2>
          <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
            A OPON nasceu do desejo de levar aconchego, estilo e bem-estar para o dia a dia. Cada peça é escolhida
            para que se sinta bem desde o primeiro café da manhã até ao último capítulo antes de dormir — porque estar
            em casa também merece elegância.
          </p>
        </div>
      </section>

      <section id="colecao" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs tracking-[0.35em] uppercase text-primary">Coleção</p>
          <h2 className="font-display text-4xl md:text-5xl">Pijamas em destaque</h2>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="group flex flex-col">
              <div className="overflow-hidden bg-card">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={1000} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 flex-1 font-display text-xl leading-snug">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-sm text-muted-foreground line-through">R$ {p.old}</span>
                <span className="text-xl font-semibold">R$ {p.price}</span>
              </div>
              <a href={waProduct(p.name)} target="_blank" rel="noopener noreferrer" className={`${btnOutline} mt-5 w-full`}>
                <MessageCircle className="h-4 w-4" /> Comprar no WhatsApp
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl">Como fazer o seu pedido</h2>
            <p className="mx-auto mt-6 max-w-xl font-light opacity-85">
              Todos os pedidos, escolha de tamanhos e personalizações são finalizados diretamente pelo nosso atendimento no WhatsApp.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              { icon: Send, t: "Envie uma mensagem", d: "Escolha o seu pijama e fale connosco." },
              { icon: Ruler, t: "Escolha o tamanho", d: "Ajudamos a encontrar o ajuste ideal." },
              { icon: Sparkles, t: "Personalize", d: "Combinamos todos os detalhes consigo." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="border border-primary-foreground/25 p-8 text-center">
                <Icon className="mx-auto h-6 w-6" />
                <h3 className="mt-4 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-sm font-light opacity-80">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-foreground px-8 py-4 text-sm tracking-wider uppercase text-primary transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
          <span className="font-display text-2xl font-semibold tracking-[0.3em] text-primary">OPON</span>
          <nav className="flex gap-8 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary">{l.label}</a>
            ))}
          </nav>
          <div className="flex gap-4">
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-primary"><MessageCircle className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} OPON. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
