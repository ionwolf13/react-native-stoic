import { SIZES, SIZES_PERCENT_VALUES } from "../constants/styling/styling";
export type SizesType = (typeof SIZES)[keyof typeof SIZES];
export type SizesPercentType =
  (typeof SIZES_PERCENT_VALUES)[keyof typeof SIZES_PERCENT_VALUES];
