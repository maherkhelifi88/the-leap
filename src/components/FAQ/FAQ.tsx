import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './FAQ.module.css';

interface Props {
  className?: string;
}
/* @figmaId 159:2539 */
export const FAQ: FC<Props> = memo(function FAQ(props = {}) {
  return (
    <>
      <div className={classes.bg}></div>
      <div className={classes.questions}>
        <div className={classes.row1}>
          <div className={classes._1}>
            <div className={classes.doIHaveToPayForEachAgentAccoun}>Do I have to pay for each agent account?</div>
            <div className={classes.yesWeChargeAFeeForEveryAgentAc}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>
                  Yes, we charge a fee for every agent account created, regardless of whether the agent is logged in or
                  not.{' '}
                </span>
                <span className={classes.label2}>
                  It is a long established fact that a reader a distracted by the readable content page when looking.
                </span>
              </p>
            </div>
          </div>
          <div className={classes.line63}></div>
          <div className={classes._3}>
            <div className={classes.doYouProvideCustomerServiceAge}>Do you provide customer service agents?</div>
            <div className={classes.itIsALongEstablishedFactThatAR}>
              It is a long established fact that a reader a distracted by the readable content page when looking at its
              layout. The point of using Lorem Ipsum. No, we provide the tools for your agents.
            </div>
          </div>
          <div className={classes.line64}></div>
          <div className={classes._5}>
            <div className={classes.doYouOfferAnAnnualPaymentOptio}>Do you offer an annual payment option?</div>
            <div className={classes.pleaseReachOutToUsAndWeWillBeH}>
              Please reach out to us and we will be happy to provide an annual invoice with additional payment options.
              It is a long established fact that a reader a distracted by the readable content page.
            </div>
          </div>
          <div className={classes.line64}></div>
        </div>
        <div className={classes.row2}>
          <div className={classes._2}>
            <div className={classes.howManyAgentsCanIAddToMyAccoun}>How many agents can I add to my account?</div>
            <div className={classes.youCanInviteUpTo400AgentsInThe}>
              You can invite up to 400 agents in the Starter, Team, and Business plans. We can set a custom number of
              agents if you subscribe to the Enterprise plan. It is a long established fact that is distracted.
            </div>
          </div>
          <div className={classes.line65}></div>
          <div className={classes._4}>
            <div className={classes.willIGetMoneyBackIfIAmNotSatis}>Will I get money back if I am not satisfied?</div>
            <div className={classes.weAcceptAllMajorCreditCardsThe}>
              We accept all major credit cards. The subscriptions are renewed by automatically at the end of each
              billing cycle. It is a long established fact that a reader a distracted by the readable content page.
            </div>
          </div>
          <div className={classes.line66}></div>
          <div className={classes._6}>
            <div className={classes.doesThisThemeSupportsPlugins}>Does this theme supports plugins?</div>
            <div className={classes.everyNewResponseAfterYourLimit}>
              Every new response after your limit will be safely stored, but we will become accessible when you upgrade,
              or when your next billing for the period begins here.
            </div>
          </div>
          <div className={classes.line66}></div>
        </div>
      </div>
      <div className={classes.commonQuestionsAnswers}>Common questions </div>
      <div className={classes.commonQuestionsAnswerss}> &amp; answers</div>
    </>
  );
});
