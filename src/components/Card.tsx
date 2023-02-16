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
      className="h-[134px] w-[502px] flex rounded overflow-hidden cursor-pointer"
      {...props}
    >
      <div className="h-full w-[86px] bg-green-500 grid place-items-center text-white">
        {image}
      </div>
      <div className="flex-1 flex items-center px-6 gap-24 bg-gray-700 hover:bg-gray-800 transition-colors">
        <div className="flex flex-col gap-2 ">
          <strong className="text-2xl text-gray-100">{title}</strong>
          <span className="text-sm text-gray-200 leading-5">{description}</span>
        </div>

        <ArrowRight className="text-blue-500" size={24} />
      </div>
    </a>
  )
}
