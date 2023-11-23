import { memo, SVGProps } from 'react';

const TextIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 49 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M43.5556 44H5.44444C2.43756 44 -1.31435e-07 41.5376 0 38.5L1.42791e-06 5.5C1.55934e-06 2.46243 2.43756 -1.32776e-07 5.44445 0L32.6667 1.20206e-06C35.6736 1.33484e-06 38.1111 2.46243 38.1111 5.5V8.25M43.5556 44C40.5487 44 38.1111 41.5376 38.1111 38.5L38.1111 8.25M43.5556 44C46.5624 44 49 41.5376 49 38.5V13.75C49 10.7124 46.5624 8.25 43.5556 8.25L38.1111 8.25M27.2222 9.61651e-07L16.3333 4.80825e-07M10.8889 33H27.2222M10.8889 11H27.2222V22H10.8889V11Z'
      stroke='#083C2F'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(TextIcon2);
export { Memo as TextIcon2 };
