import Footer from "@/components/custom/layout/Footer";
import Header from "@/components/custom/layout/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto h-dvh flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 bg-gray-100/10">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
