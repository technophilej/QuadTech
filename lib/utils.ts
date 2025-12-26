import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility functions for the QuadTech website
 */

/**
 * Combines and merges class names with Tailwind CSS
 * @param inputs - Class names to combine
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format an ISO date string to a human-readable format
 * @param dateString - ISO date string (e.g., "2025-12-01")
 * @returns Formatted date string (e.g., "December 1, 2025")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format an ISO date string to a short format
 * @param dateString - ISO date string (e.g., "2025-12-01")
 * @returns Formatted date string (e.g., "Dec 1, 2025")
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
