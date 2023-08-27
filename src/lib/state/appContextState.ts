import { create } from "zustand";

import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";

export const LANGUAGE_OPTIONS = Object.keys(languages);
export const THEME_OPTIONS = Object.keys(themes);

export type LanguageOption = (typeof LANGUAGE_OPTIONS)[number];
export type ThemeOption = (typeof THEME_OPTIONS)[number];

interface IAppContext {
  language: LanguageOption;
  theme: ThemeOption;
  setLanguage: (newLanguage: LanguageOption) => void;
  setTheme: (newTheme: ThemeOption) => void;
}

const getAppContextState = create<IAppContext>()((set) => ({
  language: "typescript",
  theme: "nightOwl",
  setLanguage: (newLanguage) =>
    set((state) => ({
      language: newLanguage,
    })),
  setTheme: (newTheme) =>
    set((state) => ({
      theme: newTheme,
    })),
}));

export const useAppContextState = () => {
  const [appContextState, setLanguage, setTheme] = getAppContextState(
    (state) => [
      {
        language: state.language,
        theme: state.theme,
      },
      state.setLanguage,
      state.setTheme,
    ],
  );
  return [appContextState, setLanguage, setTheme] as const;
};
