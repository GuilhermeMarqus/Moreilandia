import ProductDisplay from './components/product-display';

const ProductPage = () => {
  const productData = {
    id: '1',
    name: 'Cilindro alvelolador doméstico',
    condition: 'novo',
    description: 'Cilindro alvelolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência. Tamanho: 28,5 cm de comprimento e 3,9 cm de diâmetro de cada rolo. Produz alvéolos de 5,25mm, próprias para abelhas africanizadas, que é uma média entre as africanas(4,8mm) e as europeias(5,5mm).',
    characteristics: [
      'Com 2 parafusos de regulagem de fácil manuseio.',
      'Cilindros com 28 cm de comprimento e 3,9 cm de diâmetro.',
      'Rolos de alta resistência confeccionados com material à base de resina de poliéster, reforçados com uma alma de aço.',
      'Único cilindro produzido no Brasil com as dimensões do alvéolo adaptados às abelhas mestiças brasileiras que tem alvéolos ligeiramente menores que os das europeias, e maiores do que as africanas, medindo 5,25mm.',
      'Mancais e engrenagens de nylon (nylon), montados numa base de de alumínio.',
    ],
    observations: 'Observações: Os produtos da APIC estão presentes a mais de 30 anos no mercado e são testadas antes do envio, por isso, possuem garantia de 1 ano contra defeitos de fabricação e desgaste do cilindro.',
    includes: 'O produto vem com um livreto sobre a cera de abelha que possui instruções de uso.',
    images: [
      '/honeycomb.svg', // Placeholder para a imagem do cilindro
      '/honeycomb.svg', // Placeholder para as miniaturas do cilindro
      '/honeycomb.svg',
      '/honeycomb.svg',
      '/honeycomb.svg',
    ],
    apicultorImage: '/Apicultor png.png',
    apicultorName: 'Francisco Ferreira Filho Florêncio',
    apicultorLocation: 'Moreilândia - Pernambuco',
    apicultorProductsCount: '1',
    apicultorPhone: '87 9 9999-9999',
    apicultorEmail: 'produtor@email.com',
    memberSince: '2025',
  };

  return <ProductDisplay product={productData} />;
};

export default ProductPage;
