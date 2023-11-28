import { memo } from 'react';
import type { FC } from 'react';
import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Header } from './components/Header/Header';
import { Form } from './components/FormAssistant/Form';
import { Footer } from './components/Footer2/Footer';
interface Props {
  className?: string;
}
export const Assistant: FC<Props> = memo(function Assistant(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Header/>      
      <Form/>
    
    </div>
  );
});

