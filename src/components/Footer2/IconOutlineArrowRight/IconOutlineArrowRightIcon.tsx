import { memo, SVGProps } from 'react';

const IconOutlineArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11 0L18 7M18 7L11 14M18 7L0 7'
      stroke='#111827'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlineArrowRightIcon);
export { Memo as IconOutlineArrowRightIcon };
