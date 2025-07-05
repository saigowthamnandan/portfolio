import React from 'react';

const spaceMap = {
  small: '2px',
  medium: '4px',
  large: '8px',
};

export default function DockButton({children, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  type Size = 'small' | 'medium' | 'large';
  let size: Size = 'medium';
  if (React.isValidElement(children) && (children as React.ReactElement<{size?: string}>).props.size) {
    size = (children as React.ReactElement<{size?: string}>).props.size as Size;
  }
  const space: string = spaceMap[size];
  return (
    <div className="flex py-2 hover:py-3 hover:px-4 transistion-padding ease-in-out duration-300" {...props}>
      <div
        className="w-9 h-9 p-2 flex items-center justify-center rounded-full transistion-bg ease-in-out duration-300 hover:bg-[var(--clr-comp-hover)] hover:text-[var(--clr-accent)]"
        style={{margin: `0 ${space}`}}>
        {children}
      </div>
    </div>
  );
}
