// BURGER COMPONENT //

const Burger = ({ openNav }) => {
  return (
    <img src={require('../../images/hamburger-menu2.png')} alt="menu" className="nav__burger" onClick={openNav} tabIndex="0" />
  );
}

export default Burger;