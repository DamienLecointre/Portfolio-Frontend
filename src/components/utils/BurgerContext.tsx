// context/BurgerContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type BurgerContextType = {
  isActive: boolean;
  toggleMenu: () => void;
};

const BurgerContext = createContext<BurgerContextType | undefined>(undefined);

export function BurgerProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <BurgerContext.Provider value={{ isActive, toggleMenu }}>
      {children}
    </BurgerContext.Provider>
  );
}

export function useBurger() {
  const context = useContext(BurgerContext);
  if (!context) throw new Error("useBurger must be used within BurgerProvider");
  return context;
}
