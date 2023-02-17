import { useDrawer } from '@/contexts/DrawerContext'
import { useGetLessonsQuery } from '@/graphql/generated'
import clsx from 'clsx'
import { Lesson } from './Lesson'

export function Sidebar() {
  const { isDrawerOpen } = useDrawer()
  const { data } = useGetLessonsQuery()

  return (
    <aside
      className={clsx(
        'lg:inline-block w-full h-full lg:h-auto lg:w-[348px] bg-gray-700 p-6 border-l border-gray-600 z-50 absolute lg:static',
        {
          hidden: !isDrawerOpen,
        },
      )}
    >
      <span className="font-bold text-2xl text-white pb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="mt-6 flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            availableAt={new Date(lesson.availableAt)}
            lessonSlug={lesson.slug}
            title={lesson.title}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  )
}
