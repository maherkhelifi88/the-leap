import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconOutlineArrowRight.module.css';
import { IconOutlineArrowRightIcon } from './IconOutlineArrowRightIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 70:50 */
export const IconOutlineArrowRight: FC<Props> = memo(function IconOutlineArrowRight(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconOutlineArrowRightIcon className={classes.icon2} />}</div>
    </div>
  );
});
