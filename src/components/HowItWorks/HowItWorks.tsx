import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse962Icon2 } from './Ellipse962Icon2.js';
import { Ellipse962Icon3 } from './Ellipse962Icon3.js';
import { Ellipse962Icon } from './Ellipse962Icon.js';
import classes from './HowItWorks.module.css';
import { IconOutlineCheveronRight } from './IconOutlineCheveronRight/IconOutlineCheveronRight';
import { IconOutlineCheveronRightIcon2 } from './IconOutlineCheveronRightIcon2.js';
import { IconOutlineCheveronRightIcon } from './IconOutlineCheveronRightIcon.js';
import { Vector658Icon2 } from './Vector658Icon2.js';
import { Vector658Icon } from './Vector658Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 70:3876 */
export const HowItWorks: FC<Props> = memo(function HowItWorks(props = {}) {
  return (
    <>
      <div className={classes._1}>
        <div className={classes.no}>
          <div className={classes.ellipse962}>
            <Ellipse962Icon className={classes.icon3} />
          </div>
          <div className={classes._12}>01</div>
        </div>
        <div className={classes.text}>
          <div className={classes.uploadYourVideos}>Refine your idea</div>
          <div className={classes.creatingAccountToOurWebsiteAnd}>
          Creating account to our website and use it for your required time. We always ready to give you support all
            the time.
          </div>
        </div>
      </div>
      <div className={classes._2}>
        <div className={classes.no2}>
          <div className={classes.ellipse9622}>
            <Ellipse962Icon2 className={classes.icon4} />
          </div>
          <div className={classes._22}>02</div>
        </div>
        <div className={classes.text2}>
          <div className={classes.getOurExpertsFeeback}>Test your market fit</div>
          <div className={classes.creatingAccountToOurWebsiteAnd2}>
            Creating account to our website and use it for your required time. We always ready to give you support all
            the time.
          </div>
        </div>
      </div>
      <div className={classes._3}>
        <div className={classes.no3}>
          <div className={classes.ellipse9623}>
            <Ellipse962Icon3 className={classes.icon5} />
          </div>
          <div className={classes._32}>03</div>
        </div>
        <div className={classes.text3}>
          <div className={classes.receiveNewSocialContent}>Outline your product plan</div>
          <div className={classes.creatingAccountToOurWebsiteAnd3}>
            Creating account to our website and use it for your required time. We always ready to give you support all
            the time.
          </div>
        </div>
      </div>
      <div className={classes.vector658}>
        <Vector658Icon className={classes.icon6} />
      </div>
      <IconOutlineCheveronRight
        className={classes.iconOutlineCheveronRight}
        swap={{
          icon: <IconOutlineCheveronRightIcon className={classes.icon} />,
        }}
      />
      <div className={classes.vector6582}>
        <Vector658Icon2 className={classes.icon7} />
      </div>
      <IconOutlineCheveronRight
        className={classes.iconOutlineCheveronRight2}
        swap={{
          icon: <IconOutlineCheveronRightIcon2 className={classes.icon2} />,
        }}
      />
      <div className={classes.howKanteenWorks}>Test your next feature</div>
    </>
  );
});
