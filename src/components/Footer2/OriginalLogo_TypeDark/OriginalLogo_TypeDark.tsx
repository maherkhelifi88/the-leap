import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { LetterU1Icon } from './LetterU1Icon.js';
import classes from './OriginalLogo_TypeDark.module.css';

interface Props {
  className?: string;
}
/* @figmaId 70:271 */
export const OriginalLogo_TypeDark: FC<Props> = memo(function OriginalLogo_TypeDark(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.heading}>The Leap</div>
      <div className={classes.letterU1}>
      </div>
    </div>
  );
});
