import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import resets from '../_resets.module.css';
import { Button_StateNormalTypeSmall } from './Button_StateNormalTypeSmall/Button_StateNormalTypeSmall';
import classes from './List.module.css';
import { TextIcon2 } from './TextIcon2.js';
import { TextIcon } from './TextIcon.js';

interface Props {
  className?: string;
  hide?: {
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight?: boolean;
    iconOutlineCheckCircle2?: boolean;
    iconOutlineArrowRight2?: boolean;
  };
}

export const List: FC<Props> = memo(function List(props = {}) {
  const navigate = useNavigate();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate('https://calendly.com/maher-officehours/30min');
  };

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes._1}>
        <div className={classes.text}>
          <div className={classes.icon}>
            <TextIcon className={classes.icon2} />
          </div>
          <div className={classes.text2}>
            <div className={classes.needHelp}>Schedule a free consultation</div>
            <div className={classes.weAreTheFastestAndEasiestWayTo}>
              We are the fastest and easiest way to launch an attractive and feature-complete SaaS.
            </div>
          </div>
          <Button_StateNormalTypeSmall
            className={classes.button}
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
            text={{
              getStartedNow: <div className={classes.getStartedNow}>
                <a className="linkBlack" href='https://calendly.com/maher-officehours/30min'>
                  Schedule</a>
              </div>,
            }}
          />
        </div>
      </div>
      <div className={classes._2}>
        <div className={classes.text3}>
          <div className={classes.icon3}>
            <TextIcon2 className={classes.icon4} />
          </div>
          <div className={classes.text4}>
            <div className={classes.bookALiveEditingSesion}>Submit a new research request</div>
            <div className={classes.weAreTheFastestAndEasiestWayTo2}>
              We are the fastest and easiest way to launch an attractive and feature-complete SaaS.
            </div>
          </div>
          <Button_StateNormalTypeSmall
            className={classes.button2}
            hide={{
              iconOutlineCheckCircle: true,
              iconOutlineArrowRight: true,
            }}
            text={{
              getStartedNow: <div className={classes.getStartedNow2}>Submit Research Inquiry</div>,
            }}
          />
        </div>
      </div>
    </div>
  );
});
