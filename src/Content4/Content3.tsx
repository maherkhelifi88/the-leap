import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import classes from './Content3.module.css';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
  };
}
/* @figmaId 1:4449 */
export const Content3: FC<Props> = memo(function Content3(props = {}) {
  return (
    <>
      <div className={classes.bg}></div>
      <div className={classes.image}></div>
      <div className={classes.text}>
        <div className={classes.content}>
          <div className={classes.title}>
            <div className={classes.customMadeReportsToMakeGreatDe}>Custom-made reports to make great decisions</div>
            <div className={classes.weHaveConsideredOurSolutionsTo}>
              We have considered our solutions to support every stage of your growth. We are the fastest and easiest way
              to launch SaaS.
            </div>
          </div>
          <Button_StateNormalTypePrimary
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
            text={{
              getStartedNow: <div className={classes.getStartedNow}>Explore Nexo Now</div>,
            }}
          />
        </div>
        <div className={classes.list}>
          <div className={classes._1}>
            <div className={classes._20}>20%</div>
            <div className={classes.increaseInRetention}>Increase in retention</div>
          </div>
          <div className={classes.line249}></div>
          <div className={classes._2}>
            <div className={classes._15X}>1.5X</div>
            <div className={classes.userBaseGrowth}>User base growth</div>
          </div>
        </div>
      </div>
    </>
  );
});
