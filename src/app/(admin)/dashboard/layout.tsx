import Aside from "@/components/Layout/Aside";
import Header from "@/components/Layout/Header";

export default async function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Aside />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="flex items-start p-4 sm:px-6 sm:py-0 ">
          {children}
        </main>
      </div>
    </div>
  );
}
