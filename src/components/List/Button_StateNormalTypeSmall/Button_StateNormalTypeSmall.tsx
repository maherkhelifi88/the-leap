import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconOutlineArrowRight } from '../IconOutlineArrowRight/IconOutlineArrowRight';
import { IconOutlineCheckCircle } from '../IconOutlineCheckCircle/IconOutlineCheckCircle';
import classes from './Button_StateNormalTypeSmall.module.css';
import { IconOutlineArrowRightIcon } from './IconOutlineArrowRightIcon.js';
import { IconOutlineCheckCircleIcon } from './IconOutlineCheckCircleIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
  text?: {
    getStartedNow?: ReactNode;
  };
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
/* @figmaId 159:2590 */
export const Button_StateNormalTypeSmall: FC<Props> = memo(function Button_StateNormalTypeSmall(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
      onClick={props.onClick} >
      {!props.hide?.iconOutlineCheckCircle && (
        <IconOutlineCheckCircle
          className={classes.iconOutlineCheckCircle}
          swap={{
            icon: <IconOutlineCheckCircleIcon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.getStartedNow != null ? (
        props.text?.getStartedNow
      ) : (
        <div className={classes.getStartedNow}>Get Started Now</div>
      )}
      {!props.hide?.iconOutlineArrowRight && (
        <IconOutlineArrowRight
          className={classes.iconOutlineArrowRight}
          swap={{
            icon: <IconOutlineArrowRightIcon className={classes.icon2} />,
          }}
        />
      )}
    </button>
  );
});
