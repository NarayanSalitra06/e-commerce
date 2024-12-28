// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges class names using clsx and tailwind-merge.
 * This utility helps prevent class name conflicts and properly merges Tailwind CSS classes.
 *
 * @param inputs - Class names to be combined
 * @returns Merged class names string
 *
 * @example
 * cn('px-2 py-1', condition && 'bg-blue-500', 'bg-red-500')
 * // If condition is true: 'px-2 py-1 bg-blue-500'
 * // If condition is false: 'px-2 py-1 bg-red-500'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
