import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './CTA.module.css';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
/* @figmaId 1:4261 */
export const CTAB: FC<Props> = memo(function CTA(props = {}) {
  return (
    <>
      <div className={classes.bg}></div>
      <div className={classes.text}>
        <div className={classes.title}>
          <div className={classes.letSAutomateSimplifyYourPerfor}>Let’s automate &amp; simplify your performance</div>
          <div className={classes.letUsManageYourBusinessForYouS}>
            Let us manage your business for you so that you can get back to doing what you do best and we look in the
            future.
          </div>
        </div>
        <div className={classes.button2}>
          <Button_StateNormalTypePrimary
            className={classes.button}
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
          />
        </div>
      </div>
    </>
  );
});
