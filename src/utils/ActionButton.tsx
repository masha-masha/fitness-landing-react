import type { SectionId } from '@/types/type';
import type React from 'react';
import { Link } from 'react-scroll';

type Props = {
 children: React.ReactNode;
 to?: SectionId;
 variant: "link" | "button";
};

const ActionButton = ({ children, to, variant }: Props) => {
 return variant === "link" && to ? (
  <Link
  to={to}
  className="rounded-md bg-rose-500 px-10 py-2 cursor-pointer hover:bg-rose-400 hover:text-white animate"
  >
    {children}
  </Link>
 ) : (
   <button className="rounded-md bg-rose-500 px-10 py-2 cursor-pointer hover:bg-rose-400 hover:text-white animate">
    {children}
   </button>
 )
};

export default ActionButton;
