import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { LetterU1Icon } from './LetterU1Icon.js';
import classes from './OriginalLogo_TypeMain.module.css';

interface Props {
  className?: string;
}
/* @figmaId 646:1254 */
export const OriginalLogo_TypeMain: FC<Props> = memo(function OriginalLogo_TypeMain(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.heading}>The Leap</div>
      <div className={classes.letterU1}>
      
      </div>
    </div>
  );
});
