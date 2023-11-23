import { memo, SVGProps } from 'react';

const TextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 57 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 9.375L24.6581 25.8137C26.7575 27.2133 29.4925 27.2133 31.5919 25.8137L56.25 9.375M6.25 43.75H50C53.4518 43.75 56.25 40.9518 56.25 37.5V6.25C56.25 2.79822 53.4518 0 50 0H6.25C2.79822 0 0 2.79822 0 6.25V37.5C0 40.9518 2.79822 43.75 6.25 43.75Z'
      stroke='#083C2F'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(TextIcon);
export { Memo as TextIcon };
