export const KEYBOARD_INPUTS = {
  default: "default", //(normal keyboard)
  email: "email-address",
  numeric: "numeric",
  phone: "phone-pad",
  number: "number-pad",
  decimal: "decimal-pad",
  url: "url",
  ascii: "ascii-capable", // (iOS)
  twitter: "twitter", //(iOS, adds @ and #)
  web: "web-search", // (Android)
  visiblePassword: "visible-password" // (Android)
} as const;

export const AUTOCOMPLETE_INPUTS = {
  off: "off",
  name: "name",
  email: "email",
  username: "username",
  password: "password",
  creditCard: "cc-number", //(credit card)
  postal: "postal-code",
  tel: "tel"
} as const;
