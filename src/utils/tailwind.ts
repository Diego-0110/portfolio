import clsx from 'clsx';
import type { ClassValue } from 'clsx';
import { extendTailwindMerge, twMerge } from 'tailwind-merge';

// For special cases with conflicted custom classes
export function cnx (...classes: ClassValue[]) {
  return clsx(...classes)
}

// List of custom colors defined in global.css
const CUSTOM_COLORS = [
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
  'text',
  'subtext-1',
  'subtext-0',
  'overlay-2',
  'overlay-1',
  'overlay-0',
  'surface-2',
  'surface-1',
  'surface-0',
  'base',
  'mantle',
  'crust',
]

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "text-color": CUSTOM_COLORS.map((c) => `text-${c}`)
    }
  }
})
// For general use
export function cn (...classes: ClassValue[]) {
  return customTwMerge(clsx(...classes))
}
