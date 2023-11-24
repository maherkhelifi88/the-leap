import { memo, useState } from 'react';
import type { FC } from 'react';
import resets from '../_resets.module.css';
import { Button_StateNormalTypeSmall } from './Button_StateNormalTypeSmall/Button_StateNormalTypeSmall';
import { Button_StateNormalTypeSmall2 } from './Button_StateNormalTypeSmall/Button_StateNormalTypeSmall2';
import classes from './Header.module.css';
import { OriginalLogo_TypeMain } from './OriginalLogo_TypeMain/OriginalLogo_TypeMain';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Leap from '/assets/LEAP.png'
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}

export const Header: FC<Props> = memo(function Header(props = {}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/contact');
  };
  const handleOpen1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate('/assistant');
  };
  const navigateHome = () => {
    navigate('/');
  };

  return (
    <Navbar expand="lg" className={`${resets.storybrainResets} ${classes.root}`}>
    <Navbar.Brand className={classes.logo} onClick={navigateHome}>
        <img src={Leap} className={classes.img} alt="Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleMenu} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <div className={classes.button2}>
          <Button_StateNormalTypeSmall
          onClick={handleOpen}
            className={classes.button}
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
          />
          
        </div>
        <div className={classes.button3}>
          <Button_StateNormalTypeSmall2
          onClick={handleOpen1}
            className={classes.button}
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
          />
          
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
});
