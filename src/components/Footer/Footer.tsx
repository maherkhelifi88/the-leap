import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Footer.module.css';
import { OriginalLogo_TypeDark } from './OriginalLogo_TypeDark/OriginalLogo_TypeDark';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
/* @figmaId 70:1551 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <>
     <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.bg}></div>
      <div className={classes.copyright2023FinestDevsAllRigh}>Copyright © 2023 The Leap. All Rights Reserved</div>
      <div className={classes.line4}></div>
      <div className={classes.col}>
        <div className={classes.col1}>
          <OriginalLogo_TypeDark />
          <div className={classes.welcomeToAPlaceOfRefinementAnd}>
            Welcome to a place of refinement and beauty. This is Furnixo, we made for all furniture stores &amp; brands.
          </div>
        </div>
        <div className={classes.col10}>
        <div className={classes.col2}>
          <div className={classes.company}>Company</div>
          <div className={classes.list}>
            <div className={classes.about}>About</div>
            <div className={classes.pricing}>Pricing</div>
            <div className={classes.blog}>Blog</div>
            <div className={classes.careers}>Careers</div>
          </div>
        </div>
        <div className={classes.col3}>
          <div className={classes.product}>Product</div>
          <div className={classes.list2}>
            <div className={classes.saasCompany}>Saas Company</div>
            <div className={classes.marketplace}>Marketplace</div>
            <div className={classes.aPI}>API</div>
          </div>
        </div>
        </div>
        <div className={classes.col11}>
        <div className={classes.col4}>
          <div className={classes.resources}>Resources</div>
          <div className={classes.list3}>
            <div className={classes.helpCenter}>Help Center</div>
            <div className={classes.partnerProgram}>Partner Program</div>
            <div className={classes.whatIsSaaS}>What is SaaS?</div>
            <div className={classes.saaSComparison}>SaaS Comparison</div>
          </div>
        </div>
        <div className={classes.col5}>
          <div className={classes.support}>Support</div>
          <div className={classes.list4}>
            <div className={classes.community}>Community</div>
            <div className={classes.knowledgeBase}>Knowledge Base</div>
            <div className={classes.academy}>Academy</div>
            <div className={classes.newsletter}>Newsletter</div>
          </div>
        </div>
        </div>
      </div>
      <div className={classes.cTA}>
        <div className={classes.title}>
          <div className={classes.getStartedWithNexo}>Get Started With The Leap</div>
          <div className={classes.weHaveConsideredOurSolutionsTo}>
            We have considered our solutions to support every stage of your growth. We are the fastest and easiest way
            to launch SaaS showcase for our customers.
          </div>
        </div>
        <Button_StateNormalTypePrimary
          hide={{
            iconOutlineCheckCircle: true,
            iconOutlineArrowRight: true,
          }}
          text={{
            getStartedNow: <div className={classes.getStartedNow}>Get Started For Free</div>,
          }}
        />
      </div>
      </div>
    </>
  );
});
