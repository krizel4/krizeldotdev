import React from 'react';
import styles from './Mask.module.css';

/**
 * Mask component
 * Props:
 * - variant: 'svg' | 'top-bottom' | 'frame' (default 'svg')
 * - className: extra classes
 * - id: optional id to scope the svg mask
 * - children: content to wrap (if applyToWrapper)
 */
export default function Mask({ variant = 'svg', className = '', id = 'site-mask', children }) {
  const maskId = `${id}-${variant}`;

  // For this demo we provide a simple SVG mask (rounded frame cutout)
  const svgMask = (
    <svg aria-hidden="true" className={styles.svgDefs} width="0" height="0" focusable="false">
      <defs>
        <mask id={maskId} maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
          {/* mask outer area (black = masked out) */}
          <rect x="0" y="0" width="1" height="1" fill="black" />
          {/* visible cutout area in the center (white = visible) */}
          <rect x="0.05" y="0.05" width="0.9" height="0.9" rx="0.06" ry="0.06" fill="white" />
        </mask>
      </defs>
    </svg>
  );

  if (variant === 'top-bottom') {
    return (
      <div className={`${styles.maskTopBottom} ${className}`} aria-hidden="true">
        {children}
      </div>
    );
  }

  // default: svg frame mask applied as a wrapper using CSS variable referencing the mask
  return (
    <div className={`${styles.maskWrapper} ${className}`} style={{ ['--mask-id']: `url(#${maskId})` }}>
      {svgMask}
      <div className={styles.maskContent}>{children}</div>
    </div>
  );
}
