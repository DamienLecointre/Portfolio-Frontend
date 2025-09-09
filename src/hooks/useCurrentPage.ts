"use client";

import { usePathname } from "next/navigation";

export default function useCurrentPage(path: string) {
  const pathname = usePathname();
  return pathname === path;
}
