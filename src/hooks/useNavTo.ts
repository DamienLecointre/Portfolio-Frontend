"use client";

import { useRouter } from "next/navigation";

export function useNavTo() {
  const router = useRouter();

  const navTo = (pageName:string) => {
    router.push(`/${pageName}`);
  };

  return navTo;
}