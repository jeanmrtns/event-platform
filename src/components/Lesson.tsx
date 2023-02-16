import { clsx } from 'clsx'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CaretLeft, CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  lessonSlug: string
  availableAt: Date
  type: 'live' | 'practice'
}

export function Lesson({ title, lessonSlug, availableAt, type }: LessonProps) {
  const { slug } = useParams<{ slug: string }>()
  const isLessonAvailable = isPast(availableAt)
  const formattedDate = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === lessonSlug

  return (
    <Link to={`/event/lesson/${lessonSlug}`} className="group">
      <time className="text-gray-300 text-base">{formattedDate}</time>

      <div
        className={clsx(
          'mt-2 border border-gray-500 p-4 rounded group-hover:border-green-500 transition-colors relative',
          {
            'bg-green-500': isActiveLesson,
            'bg-transparent': !isActiveLesson,
          },
        )}
      >
        {isActiveLesson && (
          <CaretLeft
            size={24}
            weight="fill"
            className="absolute -left-3 text-green-500 top-2/4 -translate-y-2/4"
          />
        )}
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={clsx('flex items-center gap-2 text-sm font-medium', {
                'text-white': isActiveLesson,
                'text-blue-500': !isActiveLesson,
              })}
            >
              <CheckCircle size={20} weight="regular" /> Conteúdo liberado
            </span>
          ) : (
            <span
              className={clsx('flex items-center gap-2 text-sm font-medium', {
                'text-white': isActiveLesson,
                'text-orange-500': !isActiveLesson,
              })}
            >
              <Lock size={20} weight="regular" /> Em breve
            </span>
          )}

          <span
            className={clsx(
              'border rounded uppercase text-white text-xs px-2 py-[0.125rem]',
              {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson,
              },
            )}
          >
            {type === 'live' ? 'Ao vivo' : 'aula prática'}
          </span>
        </header>

        <strong
          className={clsx('block mt-5 text-gray-200 text-base', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}
