import clsx from 'clsx'
import { HTMLProps } from 'react'

interface ButtonProps extends HTMLProps<HTMLAnchorElement> {
  variant: 'primary' | 'secondary'
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <a
      {...props}
      className={clsx(
        'text-white font-bold text-sm flex items-center justify-center w-[237px] transition-colors p-4 rounded uppercase',
        {
          'bg-green-500': variant === 'primary',
          'hover:bg-green-700': variant === 'primary',
          'hover:bg-blue-500': variant === 'secondary',
          'hover:text-gray-900': variant === 'secondary',
          border: variant === 'secondary',
          'border-blue-500': variant === 'secondary',
          'text-blue-500': variant === 'secondary',
        },
      )}
    >
      {children}
    </a>
  )
}
