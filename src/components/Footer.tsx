export default function Footer() {
  return (
    <div className="w-full h-8 md:h-16 pb-2 flex justify-center items-center bg-[var(--clr-comp)] border-t-[1px] border-[var(--clr-bdr)]">
      <div className="text-[var(--clr-text)] text-sm">&copy; {new Date().getFullYear()} Sai Gowtham Nandan Ganta. All rights reserved.</div>
    </div>
  );
}
