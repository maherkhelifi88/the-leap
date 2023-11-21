import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Team.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:150 */
export const Team: FC<Props> = memo(function Team(props = {}) {
  return (
    <>
      <div className={classes.bg}></div>
      <div className={classes.team}>
        <div className={classes._1}>
          <div className={classes.text}>
            <div className={classes.hyeonVivek}>Hyeon Vivek</div>
            <div className={classes.cEOFounder}>CEO &amp; Founder</div>
          </div>
          <div className={classes.rectangle415}></div>
        </div>
        <div className={classes._2}>
          <div className={classes.text2}>
            <div className={classes.sarahTaylor}>Sarah Taylor</div>
            <div className={classes.cTO}>CTO</div>
          </div>
          <div className={classes.rectangle4152}></div>
        </div>
        <div className={classes._3}>
          <div className={classes.rectangle4153}></div>
          <div className={classes.text3}>
            <div className={classes.danielJackson}>Daniel Jackson</div>
            <div className={classes.cMO}>CMO</div>
          </div>
        </div>
        <div className={classes._4}>
          <div className={classes.rectangle4154}></div>
          <div className={classes.text4}>
            <div className={classes.laurenThompson}>Lauren Thompson</div>
            <div className={classes.cOO}>COO</div>
          </div>
        </div>
      </div>
      <div className={classes.ourTeamBehindAllTheSuccessWeHa}>Our team behind all the success we have</div>
    </>
  );
});
