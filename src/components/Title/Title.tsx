import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Title.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:4300 */
export const Title: FC<Props> = memo(function Title(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.getInTouchStayConnectedFast}>
        <div className={classes.textBlock}>Get in touch.</div>
        <div className={classes.textBlock2}>Stay connected fast.</div>
      </div>
      <div className={classes.theWorldAsWeKnowIsNoLongerTheS}>
        The world as we know is no longer the same, and changes now occur in days and months, not for years. We always
        ready to give you support.
      </div>
    </div>
  );
});
