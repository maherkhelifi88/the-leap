import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Content3.module.css';
import { IconOutlineArrowRight } from './IconOutlineArrowRight/IconOutlineArrowRight';
import { IconOutlineCheckCircle } from './IconOutlineCheckCircle/IconOutlineCheckCircle';
import img from '/assets/linkedin.png'
interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
/* @figmaId 1:4431 */
export const Content3: FC<Props> = memo(function Content3(props = {}) {
  return (
    <>
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.bg}></div>
      <div className={classes.text}>
        <div className={classes.title}>
          <div className={classes.title2}>
            <div className={classes.tag}>
              <div className={classes.nEWMARKETINGANALYTICS}>NEW: MARKETING ANALYTICS</div>
            </div>
            <div className={classes.weFocusOnYourUltimateGoalToCom}>We focus on your ultimate goal to complete</div>
          </div>
          <div className={classes.creatingAccountToOurWebsiteAnd}>
            Creating account to our website and use it for your required time. We are always ready to give you support
            all the time to grow business.
          </div>
        </div>
        <Button_StateNormalTypePrimary
          hide={{
            iconOutlineCheckCircle: true,
            iconOutlineArrowRight: true,
          }}
          text={{
            getStartedNow: <div className={classes.getStartedNow}>Explore More About Nexo</div>,
          }}
        />
      </div>
     
          <img src={img} className={classes.linkedinSalesSolutions1A8yP_5m}></img>
      
      </div>
    </>
  );
});
