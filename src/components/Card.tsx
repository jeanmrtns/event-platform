import { ArrowRight } from 'phosphor-react'
import { HTMLProps, ReactNode } from 'react'

interface CardProps extends HTMLProps<HTMLAnchorElement> {
  image: ReactNode
  title: string
  description: string
}

export function Card({ image, title, description, ...props }: CardProps) {
  return (
    <a
      className="h-[134px] w-full lg:w-[502px] flex rounded overflow-hidden cursor-pointer"
      {...props}
    >
      <div className="h-full w-[112px] bg-green-500 grid place-items-center text-white">
        {image}
      </div>
      <div className="lg:flex-1  py-4 flex items-center px-6 md:w-full gap-4 lg:gap-14 bg-gray-700 hover:bg-gray-800 transition-colors">
        <div className="flex flex-col gap-2 w-full">
          <strong className="text-lg lg:text-2xl text-gray-100">{title}</strong>
          <span className="text-xs lg:text-sm text-gray-200 leading-5">
            {description}
          </span>
        </div>

        <ArrowRight className="text-blue-500 w-6 h-6 lg:w-10 lg:h-10" />
      </div>
    </a>
  )
}
