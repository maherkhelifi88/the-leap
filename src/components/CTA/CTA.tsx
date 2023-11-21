import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypeSecondar } from './Button_StateNormalTypeSecondar/Button_StateNormalTypeSecondar';
import classes from './CTA.module.css';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
/* @figmaId 70:1940 */
export const CTA: FC<Props> = memo(function CTA(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.title}>
        <div className={classes.scheduleAFreeConsultation}>Book a free consultation session</div>
        <div className={classes.weHaveConsideredOurSolutionsTo}>
          Meet our team members to discuss your need and decide if we could help you with the next steps of your product development.
        </div>
      </div>
      <Button_StateNormalTypeSecondar
        hide={{
          iconOutlineCheckCircle: true,
          iconOutlineArrowRight: true,
        }}
        text={{
          getStartedNow: <div className={classes.getStartedNow}>Get Started For Free </div>,
        }}
      />
    </div>
  );
});
