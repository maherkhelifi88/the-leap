import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Header/Header';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { CTA } from './components/CTA/CTA';
import { CTAB } from './components/CTAB/CTA';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Content3 } from './components/Content3/Content3';
import { Content4 } from './components/Content4/Content3';
import { Team } from './components/Team/Team';
import { Group427318988} from './components/Group427318988/Group427318988';
interface Props {
  className?: string;
}
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Header />      
      <CTA />
      <Content3/>
      <Content4/>
      <Hero />
      <HowItWorks />
      <Team/>
      <Group427318988/>
      <CTAB />
      <Footer />
    </div>
  );
});
