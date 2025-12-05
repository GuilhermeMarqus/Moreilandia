import PostList from "@/app/(rotas)/posts/components/post_list";
import { Button } from "@/components/ui/button";

const Postagens = () => {
  return (
    <main className="min-h-screen bg[#FAFBFB] text-white p-15">
      <h1 className="text-center text-4xl font-bold text-amber-600 mb-10 mt-16">
        Todas as Postagens
      </h1>

      <PostList />
    </main>
  );
};

export default Postagens;
