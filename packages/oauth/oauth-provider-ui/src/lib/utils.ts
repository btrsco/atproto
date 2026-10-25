import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// `--text-action` (style.css) is a font size. Unless tailwind-merge is told
// so, it reads `text-action` as a text color and drops whichever color it
// appears to conflict with, such as a button's `text-primary-foreground`.
const twMerge = extendTailwindMerge({
  extend: { theme: { text: ['action'] } },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
