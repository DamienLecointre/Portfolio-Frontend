"use client";

import { useCallback } from "react";

import { useRouter } from "next/navigation";

export function useNavTo() {
  const router = useRouter();

  const navTo = useCallback(
    (pageName: string) => {
      router.push(`/${pageName}`);
    },
    [router]
  );

  return navTo;
}