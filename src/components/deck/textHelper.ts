// src/components/deck/textHelper.ts

/**
 * Calculates a dynamic font size in rem based on the length of the text.
 * Helps prevent longer text paragraphs from overflowing the fixed 1200x675 slide frame.
 */
export function getDynamicFontSize(
  text: string | undefined | null,
  baseSizeRem: number,
  minSizeRem: number = 0.85
): string {
  if (!text) return `${baseSizeRem}rem`;
  
  const len = text.length;
  let multiplier = 1.0;
  
  if (len > 400) {
    multiplier = 0.5;
  } else if (len > 250) {
    multiplier = 0.65;
  } else if (len > 120) {
    multiplier = 0.8;
  }
  
  const computed = baseSizeRem * multiplier;
  return `${Math.max(minSizeRem, computed)}rem`;
}
