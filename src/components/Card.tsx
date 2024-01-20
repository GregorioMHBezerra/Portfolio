import { LinkList } from '../types/LinkList';

type CardProps = {
  ulist?: LinkList;
  title: string;
  paragraph: string
};

// eslint-disable-next-line react/require-default-props
function Card({ ulist, title, paragraph }: CardProps) {
  const estiloMainSection = `
  bg-gradient-to-r  /* Define gradiente de cores da direita para a esquerda */
  from-cor1  /* Define a cor inicial como cor1 */
  via-cor2  /* Define a cor intermediária como cor2 */
  to-cor3  /* Define a cor final como cor3 */
  pt-4  /* Define o preenchimento superior como 4 unidades */
  rounded-lg  /* Define o raio do arredondamento da borda como 10 unidades */
`;
  const styleH2 = `
    text-2xl 
    font-black 
    tracking-tighter 
    leading-none
  `;
  const estiloSectionDiv = `
  bg-cor4  /* Define o fundo com cor4 */
  p-24  /* Define o preenchimento como 24 unidades */
  md:p-15  /* Define o preenchimento em telas médias como 15 unidades */
  border-radius-8  /* Define o raio do arredondamento da borda como 8 unidades */
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
  const estiloP = `
  text-16  /* Define o tamanho do texto como 16 unidades */
  font-medium  /* Define a fonte como normal */
  tracking-wide  /* Define o espaçamento entre os caracteres como amplo */
  text-cor0  /* Define a cor do texto como cor0 */
  `;
  const estiloImagem = `
  rounded-lg
  w-20
  h-20
`;
  return (
    <section className={ estiloMainSection }>
      <div className={ estiloSectionDiv }>

        <h2 className={ styleH2 }>
          {title}
        </h2>

        <p className={ estiloP }>
          {paragraph}
        </p>

        {ulist && (
          <ul className={ estiloUl }>
            {ulist.map((item) => (
              <li key={ item[0] } className={ estiloLi }>
                <a href={ item[0] } target="blank">
                  <img
                    className={ estiloImagem }
                    src={ item[1] }
                    alt="ícone ou logo representativo do link"
                  />
                </a>
              </li>
            ))}
          </ul>
        )}

      </div>
    </section>
  );
}

export default Card;
