import React from 'react';

// Stylised house/diamond mark inspired by the Sauerland Sanierung logo:
// a red roof chevron over a brown base, with a small window in the centre.
// Sits on a white rounded tile so it reads on both the dark hero and the light navbar.
const RED = '#b5271c';
const BROWN = '#6b4a2f';

const BrandMark = ({ className = 'h-10 w-10' }) => (
  <span className={`inline-flex items-center justify-center rounded-xl bg-white shadow-md ${className}`}>
    <svg viewBox="0 0 48 48" className="h-[72%] w-[72%]" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sauerland Sanierung Logo">
      {/* base (brown) */}
      <path d="M6 24 L24 42 L42 24" stroke={BROWN} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {/* roof (red) */}
      <path d="M6 24 L24 6 L42 24" stroke={RED} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      {/* window panes */}
      <g fill={BROWN}>
        <rect x="19" y="19" width="4" height="4" rx="0.6" />
        <rect x="25" y="19" width="4" height="4" rx="0.6" />
        <rect x="19" y="25" width="4" height="4" rx="0.6" />
        <rect x="25" y="25" width="4" height="4" rx="0.6" />
      </g>
    </svg>
  </span>
);

export default BrandMark;
