function Button({children}: {children: React.ReactNode}) {
  return (
    <button className="border-none flex cursor-pointer px-2.5 py-1.5 border-2 border-[var(--clr-accent)] font-bold text-center justify-center items-center uppercase rounded-md gap-2.5 shadow-[0px_4px_6px_-1px_var(--clr-accent-l2),0px_2px_4px_-1px_var(--clr-accent-l2)] hover:shadow-[0px_6px_8px_-1px_var(--clr-accent-l1),0px_3px_5px_-1px_var(--clr-accent-l1)] transition-all duration-600 ease-in-out">
      {children}
    </button>
  );
}

export {Button};
