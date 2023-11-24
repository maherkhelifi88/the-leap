import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StateNormalTypePrimary } from './Button_StateNormalTypePrimary/Button_StateNormalTypePrimary';
import { Ellipse19Icon } from './Ellipse19Icon.js';
import classes from './Hero.module.css';
import { IconOutlineArrowRight } from './IconOutlineArrowRight/IconOutlineArrowRight';
import { IconOutlineCheckCircle } from './IconOutlineCheckCircle/IconOutlineCheckCircle';
import { IconOutlinePlusCircle } from './IconOutlinePlusCircle/IconOutlinePlusCircle';
import { IconOutlinePlusCircleIcon } from './IconOutlinePlusCircleIcon.js';
import { ImageIcon2 } from './ImageIcon2.js';
import { ImageIcon3 } from './ImageIcon3.js';
import { ImageIcon } from './ImageIcon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    iconOutlineArrowRight?: boolean;
    iconOutlineCheckCircle?: boolean;
    iconOutlineArrowRight2?: boolean;
  };
}
/* @figmaId 7715:2402 */
export const Hero: FC<Props> = memo(function Hero(props = {}) {
  return (
    <>
     <div className="main-container">
       <div className={classes.bg}></div>
      <img src='/assets/logo.png'className={classes.video}/>
      <div className={classes.bg2}></div>
      <div className={classes.text}>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon3} />
        </div>
        <div className={classes.YouMadeItSoSimp}>
         We help you build your ideas... 
        </div>
      </div>
      <div className={classes.bg3}></div>
      <div className={classes.list}>
        <div className={classes._1}>
          <div className={classes.profile}>
            <div className={classes.image}>
              <ImageIcon className={classes.icon4} />
            </div>
            <div className={classes.freddy}>Sarahh</div>
          </div>
          <button className={classes.button2}>
            <div className={classes.marketing}>UX engineering</div>
          </button>
        </div>
        <div className={classes.line205}></div>
        <div className={classes._2}>
          <div className={classes.profile2}>
            <div className={classes.image2}>
              <ImageIcon2 className={classes.icon5} />
            </div>
            <div className={classes.fiona}>Mike</div>
          </div>
          <button className={classes.button3}>
            <div className={classes.design}>Design</div>
          </button>
        </div>
        <div className={classes.line206}></div>
        <div className={classes._3}>
          <div className={classes.profile3}>
            <div className={classes.ellipse19}>
              <Ellipse19Icon className={classes.icon6} />
            </div>
            <div className={classes.juliana}>Chai</div>
          </div>
          <button className={classes.button4}>
            <div className={classes.finance}>HR</div>
          </button>
        </div>
      </div>
      <div className={classes.ourExpertTeam}>Our Expert Team</div>
      <div className={classes.bg4}></div>
      <div className={classes.profile4}>
        <div className={classes.image3}>
          <ImageIcon3 className={classes.icon7} />
        </div>
        <div className={classes.text2}>
          <div className={classes.codyFisher}>Research</div>
          <div className={classes.weProvideYouEverythingYouNeedF}>We turn your leap of faith into successful products</div>
        </div>
        <Button_StateNormalTypePrimary
          className={classes.button}
          swap={{
            iconOutlineCheckCircle: (
              <IconOutlinePlusCircle
                className={classes.iconOutlinePlusCircle}
                classes={{ icon: classes.icon }}
                swap={{
                  icon: (
                    <div className={classes.icon}>
                      <IconOutlinePlusCircleIcon className={classes.icon2} />
                    </div>
                  ),
                }}
              />
            ),
          }}
          hide={{
            iconOutlineArrowRight: true,
          }}
          text={{
            getStartedNow: <div className={classes.getStartedNow}>Add to List</div>,
          }}
        />
      </div>
      <div className={classes.text3}>
        <div className={classes.mainTitle}>
          <div className={classes.tag}>
            <div className={classes.contentCreation}>BUILDING USER-CENTERED PRODUCTS</div>
          </div>
          <div className={classes.title}>
            <div className={classes.connectWithCustomersSmartly}>UX Engineering Studio.</div>
            <div className={classes.nexoProvidesYouEverythingYouNe}>
              We help innovators test, design, and build the products and services of tomorrow.
            </div>
          </div>
        </div>
        <Button_StateNormalTypePrimary
          hide={{
            iconOutlineCheckCircle: true,
            iconOutlineArrowRight: true,
          }}
          text={{
            getStartedNow: <div className={classes.getStartedNow2}>Get Started For Free</div>,
          }}
        />
      </div>
      </div>
    </>
  );
});
