import { KEYBOARD_INPUTS, AUTOCOMPLETE_INPUTS } from "src/constants/inputs";

export type KeyboardInputTypes =
  (typeof KEYBOARD_INPUTS)[keyof typeof KEYBOARD_INPUTS];
export type AutoCompleteInputTypes =
  (typeof AUTOCOMPLETE_INPUTS)[keyof typeof AUTOCOMPLETE_INPUTS];
