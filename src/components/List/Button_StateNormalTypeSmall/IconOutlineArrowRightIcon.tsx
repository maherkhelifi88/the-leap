import { memo, SVGProps } from 'react';

const IconOutlineArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.33333 0.333333L12 5M12 5L7.33333 9.66667M12 5L0 5'
      stroke='#151517'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlineArrowRightIcon);
export { Memo as IconOutlineArrowRightIcon };
