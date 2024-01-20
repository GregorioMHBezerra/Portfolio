const estiloReset = `
  m-0  /* Define margem como 0 */
  p-0  /* Define preenchimento como 0 */
`;

// -------------  HEADER  ----------------
const estiloHeader = `
  pt-8  /* Define preenchimento superior como 8 unidades */
  h-32  /* Define altura como 32 unidades */
  mb-15  /* Define margem inferior como 15 unidades */
`;

// verificar se animate-subindo-1 está funcionando
const estiloHeaderDiv = `
  w-32  /* Define largura como 32 unidades */
  mx-auto  /* Define margem horizontal automática (centralizado) */
  bg-gradient-to-r from-cor1 via-cor2 to-cor3  /* Define gradiente de cores */
  rounded-full  /* Define borda arredondada */
  flex  /* Define flex container */
  p-2  /* Define preenchimento como 2 unidades */
  animate__animated  /* Adiciona animação (classe personalizada) */
  animate__fadeIn  /* Adiciona animação de fade in (classe personalizada) */
  hover:scale-110  /* Aplica escala ao passar o mouse */
`;

const estiloHeaderImg = `
  rounded-full  /* Define borda arredondada */
  w-full  /* Define largura como 100% */
`;

// -------------  NAV  ----------------

const estiloSectionNav = `
  bg-cor4  /* Define fundo de cor 4 */
  p-24  /* Define preenchimento como 24 unidades */
  md:p-15  /* Define preenchimento como 15 unidades em telas médias e grandes */
  border-radius-8  /* Define borda arredondada com raio 8 */
`;

const estiloSectionNavButton = `
  border-radius-4  /* Define borda arredondada com raio 4 */
  p-5  /* Define preenchimento como 5 unidades */
  bg-rgba-20-23-173-0-664  /* Define fundo com cor RGBA */
  text-white  /* Define cor do texto como branco */
  text-20  /* Define tamanho do texto como 20 unidades */
  border-ridge-0-2px-cor4  /* Define borda com relevo (ridge) e cor 4 */
  shadow-2-2-4-1  /* Define sombra */
  md:mx-5  /* Define margem horizontal como 5 unidades em telas médias e grandes */
`;

// -------------  Body/Main  ----------------

// inserir na mão o caminho da imagem: style={{ backgroundImage: `url(../assets/imagem-de-fundo2-1240x1800.jpg)` }}
const estiloBody = `
  bg-cover  /* Define a imagem de fundo para cobrir o elemento */
  bg-center  /* Define o centro da imagem de fundo como ponto de referência */
  bg-no-repeat  /* Evita repetição da imagem de fundo */
  bg-#010204  /* Define a cor de fundo como #010204 */
  text-white  /* Define cor do texto como branco */
  font-var(--fonte-padrao)  /* Define a fonte conforme variável --fonte-padrao */
  leading-160  /* Define o espaçamento entre as linhas de texto como 160% */
  h-2000  /* Define altura como 2000 unidades */
`;

const estiloMain = `
  max-w-560  /* Define largura máxima como 560 unidades */
  w-90  /* Define largura como 90% */
  mx-auto  /* Define margem horizontal como automática (centralizado) */
  grid  /* Define um layout de grade (grid) */
  gap-24  /* Define o espaçamento entre os elementos como 24 unidades */
  mt-32  /* Define margem superior como 32 unidades */
`;
// -------------  CARD  ----------------

const estiloMainSection = `
  bg-gradient-to-r  /* Define gradiente de cores da direita para a esquerda */
  from-cor1  /* Define a cor inicial como cor1 */
  via-cor2  /* Define a cor intermediária como cor2 */
  to-cor3  /* Define a cor final como cor3 */
  pt-4  /* Define o preenchimento superior como 4 unidades */
  border-radius-10  /* Define o raio do arredondamento da borda como 10 unidades */
`;

const estiloSectionDiv = `
  bg-cor4  /* Define o fundo com cor4 */
  p-24  /* Define o preenchimento como 24 unidades */
  md:p-15  /* Define o preenchimento em telas médias como 15 unidades */
  border-radius-8  /* Define o raio do arredondamento da borda como 8 unidades */
`;

const estiloH1 = `
  pb-10  /* Define o preenchimento inferior como 10 unidades */
`;

const estiloMinhaDescricao = `
  text-justify  /* Define o alinhamento do texto como justificado */
`;

const estiloUl = `
  list-none  /* Remove os marcadores de lista */
  flex  /* Define um contêiner flexível */
  flex-wrap  /* Permite a quebra de linha de itens flexíveis */
  gap-16  /* Define o espaçamento entre os itens como 16 unidades */
  mt-24  /* Define a margem superior como 24 unidades */
`;

const estiloLi = `
  transition-transform  /* Define uma transição na transformação */
  duration-300  /* Define a duração da transição como 300ms */
  hover:scale-110  /* Aplica uma escala ao passar o mouse */
`;

const estiloH2 = `
  text-24  /* Define o tamanho do texto como 24 unidades */
  font-bold  /* Define a fonte como negrito */
  tracking-wider  /* Define o espaçamento entre os caracteres como mais amplo */
`;

const estiloP = `
  text-16  /* Define o tamanho do texto como 16 unidades */
  font-normal  /* Define a fonte como normal */
  tracking-wide  /* Define o espaçamento entre os caracteres como amplo */
  text-cor0  /* Define a cor do texto como cor0 */
`;

const estiloImagem = `
  max-w-50  /* Define a largura máxima como 50 unidades */
  min-w-50  /* Define a largura mínima como 50 unidades */
  min-h-50  /* Define a altura mínima como 50 unidades */
  rounded-10  /* Define o raio do arredondamento da borda como 10 unidades */
`;

// -------------  FOOTER  ----------------

const estiloFooter = `
  bg-cor5  /* Define o fundo como cor5 */
  text-white  /* Define a cor do texto como branco */
  text-center  /* Centraliza o texto */
  text-0-8em  /* Define o tamanho do texto como 0.8em */
  py-5  /* Define o preenchimento superior e inferior como 5 unidades */
`;

const estiloFooterLink = `
  text-white  /* Define a cor do texto como branco */
  no-underline  /* Remove o sublinhado do link */
`;

// -------------  CARD  ----------------
// -------------  CARD  ----------------
// -------------  CARD  ----------------
