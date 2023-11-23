import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconOutlineArrowRight } from '../IconOutlineArrowRight/IconOutlineArrowRight';
import { IconOutlineCheckCircle } from '../IconOutlineCheckCircle/IconOutlineCheckCircle';
import classes from './Button_StateNormalTypePrimary.module.css';
import { IconOutlineArrowRightIcon } from './IconOutlineArrowRightIcon.js';
import { IconOutlineCheckCircleIcon } from './IconOutlineCheckCircleIcon.js';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
  text?: {
    getStartedNow?: ReactNode;
  };
}
/* @figmaId 70:60 */
export const Button_StateNormalTypePrimary: FC<Props> = memo(function Button_StateNormalTypePrimary(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
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
