import { notFound } from "next/navigation";
import Image from "next/image";
import ProductCard from "@/app/(rotas)/lista-produtos/components/product-card";

const adminProdutores = [
  {
    id: 1,
    nome: "Francisco Ferreira Filho Florêncio",
    cidade: "Moreilândia",
    estado: "Pernambuco",
    produtos: 1,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/Produtor 1.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    products: [
      {
        imageSrc: "/foto-produto.svg",
        title: "Cilindro alveolador doméstico",
        description:
          "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
        status: "Estado de novo",
      },
      {
        imageSrc: "/placeholder-image.svg",
        title: "Mel Puro",
        description:
          "Mel 100% puro e natural, colhido diretamente das melhores floradas. Sabor e qualidade incomparáveis.",
        status: "Novo",
      },
    ],
  },
  {
    id: 2,
    nome: "João Silva",
    cidade: "Juazeiro do Norte",
    estado: "Ceará",
    produtos: 0,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/images/default-user.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    products: [],
  },
  {
    id: 3,
    nome: "Maria Pereira",
    cidade: "Cajazeiras",
    estado: "Pernambuco",
    produtos: 3,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/images/default-user.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    products: [
      {
        imageSrc: "/foto-produto.svg",
        title: "Cera de Abelha",
        description:
          "Cera de abelha pura, ideal para a fabricação de velas, cosméticos e uso apícola.",
        status: "Novo",
      },
      {
        imageSrc: "/placeholder-image.svg",
        title: "Própolis Verde",
        description:
          "Extrato de própolis verde de alta qualidade, reconhecido por suas propriedades medicinais.",
        status: "Novo",
      },
      {
        imageSrc: "/foto-produto.svg",
        title: "Geleia Real",
        description:
          "Geleia real fresca, um superalimento rico em nutrientes para a saúde e bem-estar.",
        status: "Usado - Pouco uso",
      },
    ],
  },
];

export default function ProdutorPage({ params }: { params: { id: string } }) {
  const produtor = adminProdutores.find((p) => p.id === Number(params.id));
  if (!produtor) return notFound();

  return (
    <div className="h-full flex flex-col mt-15 max-w-3xl mx-auto justify-center p-10">
      <div className="w-full h-full flex max-md:flex-col md items-center gap-4 text-center">
        <div className="flex flex-col items-center w-full">
          <Image
            src={produtor.foto}
            alt={produtor.nome}
            width={250}
            height={250}
            className=" object-cover w-60 h-60 rounded-md"
          />
          <div className="flex flex-col items-start mt-4 border-t pt-4 text-gray-700">
            <h1 className="font-bold text-2xl">Contatos</h1>
            <p>
              <strong>Telefone:</strong> {produtor.telefone}
            </p>
            <p>
              <strong>Email:</strong> {produtor.email}
            </p>
          </div>
        </div>
        <div className="w-auto flex flex-col items-start justify-center p-6 gap-1 text-left">
          <h1 className="text-2xl font-bold">{produtor.nome}</h1>
          <p className="text-gray-600">
            {produtor.cidade} - {produtor.estado}
          </p>
          <p className="text-gray-500 text-sm">
            Membro desde {produtor.membroDesde}
          </p>
          <p>
            <strong>Produtos cadastrados:</strong> {produtor.produtos}
          </p>
          <article className="flex flex-col items-start">
            <h1 className="text-xl font-bold">Biografia:</h1>
            <p className="text-[16px] text-wrap text-left">{produtor.description}</p>
          </article>
        </div>
      </div>
      {produtor.products && produtor.products.length > 0 && (
        <section className="w-full flex flex-col items-center mt-10">
          <h2 className="text-3xl font-bold mb-6">Produtos do Produtor</h2>
          <div className="max-w-230 w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtor.products.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                status={product.status}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
