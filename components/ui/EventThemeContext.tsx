"use client";

import { createContext, useContext } from "react";

export type EventTheme = {
  background?: string;
  text?: string;
  cta?: {
    border?: string;
    text?: string;
    hoverBg?: string;
    hoverText?: string;
  };
};

const EventThemeContext = createContext<EventTheme | null>(null);

export function EventThemeProvider({
  theme,
  children,
}: {
  theme?: EventTheme;
  children: React.ReactNode;
}) {
  return (
    <EventThemeContext.Provider value={theme ?? null}>
      {children}
    </EventThemeContext.Provider>
  );
}

export function useEventTheme() {
  return useContext(EventThemeContext);
}
