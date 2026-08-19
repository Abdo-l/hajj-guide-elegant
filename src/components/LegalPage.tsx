import type { ReactNode } from "react";

type Props = {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-2xl font-semibold text-primary">{title}</h2>
      <div className="space-y-3 leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_li]:list-disc">
        {children}
      </div>
    </section>
  );
}

const LegalPage = ({ title, intro, updated, children }: Props) => (
  <div className="bg-background py-16">
    <div className="container mx-auto max-w-3xl px-4">
      <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gold">{updated}</p>
      <h1 className="mb-5 text-4xl font-bold text-primary md:text-5xl">{title}</h1>
      <p className="mb-12 text-lg leading-relaxed text-muted-foreground">{intro}</p>
      {children}
    </div>
  </div>
);

export default LegalPage;
