/* eslint-disable max-len */
import { arraysDeLinksTech,
  arraysDeLinksTools, arraysDeLinksRedes } from '../assets/Links';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function Home() {
  const estiloMain = `
  max-w-560  /* Define largura máxima como 560 unidades */
  w-90  /* Define largura como 90% */
  mx-auto  /* Define margem horizontal como automática (centralizado) */
  grid  /* Define um layout de grade (grid) */
  gap-24  /* Define o espaçamento entre os elementos como 24 unidades */
  mt-32  /* Define margem superior como 32 unidades */
`;
  const estiloBody = `
  bg-cover  /* Define a imagem de fundo para cobrir o elemento */
  bg-center  /* Define o centro da imagem de fundo como ponto de referência */
  bg-no-repeat  /* Evita repetição da imagem de fundo */
  bg-#010204  /* Define a cor de fundo como #010204 */
  text-white  /* Define cor do texto como branco */
  font-var(--fonte-padrao)  /* Define a fonte conforme variável --fonte-padrao */
  leading-160  /* Define o espaçamento entre as linhas de texto como 160% */
  h-2000  /* Define altura como 2000 unidades */
  bg-black
  `;
  return (
    <body
      className={ estiloBody }
    >
      <main className={ estiloMain }>
        <Nav links={ [{ text: 'link', url: 'https://reactrouter.com/en/main/hooks/use-navigation' }] } />
        <Card
          title="Gregório Bezerra"
          paragraph="Brasileiro e morador de Recife-PE, sou arqueólogo de formação e estudante de Desenvolvimento Web. Já trabalhei como arqueólogo no setor público e privado durante mais de 10 anos (desempenhando atividades de prospecção, resgate e monitoramento arqueológico, levantamento topográfico, revisão de relatórios e projetos, fiscalização e gestão do patrimônio cultural). Mudei minha área de atuação para poder trabalhar de casa e passar mais tempo com a família. "
        />
        <Card
          ulist={ arraysDeLinksTech }
          title="Minhas tecnologias"
          paragraph="Principais tecnologias que utilizo"
        />
        <Card
          ulist={ arraysDeLinksTools }
          title="Canais e Sites"
          paragraph="Links de auxílio para trabalho e estudo"
        />
        <Card
          ulist={ arraysDeLinksRedes }
          title="Minhas Redes"
          paragraph="Me encontre nas redes abaixo"
        />
        <Footer link="https://github.com/GregorioMHBezerra" />
      </main>
    </body>
  );
}

export default Home;
