import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'practice'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt)
  const formattedDate = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <time className="text-gray-300 text-base">{formattedDate}</time>

      <div className="mt-2 border border-gray-500 p-4 rounded group-hover:border-green-500 transition-colors">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} weight="regular" /> Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} weight="regular" /> Em breve
            </span>
          )}

          <span className="border rounded uppercase border-green-300 text-white text-xs px-2 py-[0.125rem]">
            {type === 'live' ? 'Ao vivo' : 'aula prática'}
          </span>
        </header>

        <strong className="block mt-5 text-gray-200 text-base">{title}</strong>
      </div>
    </Link>
  )
}
