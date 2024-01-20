import { useNavigate } from 'react-router-dom';
import { NavButtons } from '../types/LinkList';

type NavProps = {
  buttons?: NavButtons;
  links: NavButtons;
};

// eslint-disable-next-line react/require-default-props
function Nav({ buttons, links }: NavProps) {
  const navigate = useNavigate();

  const estiloNav = `
  bg-cor4
  p-4
  flex
  justify-between
  items-center
`;

  return (
    <nav>
      {buttons && (buttons.map((button, index) => (
        <button key={ index } onClick={ () => navigate(button.url) }>
          {button.text}
        </button>
      )))}
      {links.map((link, index) => (
        <a key={ index } href={ link.url }>
          {link.text}
        </a>))}
    </nav>
  );
}

export default Nav;
