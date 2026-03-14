import { Footer } from "@/content/footer";
import { Header } from "@/content/header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-4 font-mono">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
