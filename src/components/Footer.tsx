type FooterProps = {
  link: string
};

// eslint-disable-next-line react/require-default-props
function Footer({ link }: FooterProps) {
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

  return (
    <footer className={ estiloFooter }>
      <p>
        Feito por
        {' '}
        <a className={ estiloFooterLink } href="https://github.com/GregorioMHBezerra">Gregório</a>
        {' '}
        © 2022
      </p>
    </footer>
  );
}

export default Footer;
