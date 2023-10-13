// LANDING COMPONENT //

import { Link } from "react-scroll";

const Landing = ({setOpen}) => {
  return (
    <section onClick={() => {setOpen(false)}} className="landing">
      <div className="landing__header">
        <h2 className="landing__text">FROM PEAK TO POCKET</h2>
        <Link to="products" activeClass="active" spy={true} smooth={true} offset={-95} duration={500} className="landing__button">Explore</Link>
      </div>
    </section>
  )
};

export default Landing;