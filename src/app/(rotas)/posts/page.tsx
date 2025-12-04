import Cartao from "@/app/components/cartao";
import { Button } from "@/components/ui/button";

const Postagens = () => {
  return (
    <main className="min-h-screen bg[#FAFBFB] text-white p-15">
      <h1 className="text-center text-4xl font-bold text-amber-600 mb-10 mt-16">
        Todas as Postagens
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mb-10">
        <Cartao
          title={"Lorem ips un dolor"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."
          }
          titleColor="#fafbfb"
          descriptionColor="#742406"
        />
      </div>

      <div className="flex justify-center mt-8">
        <Button className="bg-transparent hover:bg-[#0B97E4] hover:text-white text-[#0B97E4] border-1 border-[#0B97E4] px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
          Veja mais
        </Button>
      </div>
    </main>
  );
};

export default Postagens;
