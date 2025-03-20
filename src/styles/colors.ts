// List of custom colors defined in global.css
export const COLORS = [
  'rosewater',
  'flamingo',
  'pink',
  'mauve',
  'red',
  'maroon',
  'peach',
  'yellow',
  'green',
  'teal',
  'sky',
  'sapphire',
  'blue',
  'lavender',
] as const;
export type ColorType = typeof COLORS[number];

export const TEXT_COLORS = [
  'text',
  'subtext-1',
  'subtext-0',
] as const;
export type TextColorType = typeof TEXT_COLORS[number];

export const SURFACE_COLORS = [
  'overlay-2',
  'overlay-1',
  'overlay-0',
  'surface-2',
  'surface-1',
  'surface-0',
  'base',
  'mantle',
  'crust',
] as const;
export type SurfaceColorType = typeof SURFACE_COLORS[number];

export const ALL_COLORS = [
  ...COLORS,
  ...TEXT_COLORS,
  ...SURFACE_COLORS
] as const
export type AllColorsType = typeof ALL_COLORS[number]
