import { gql, useQuery } from '@apollo/client'
import { Lesson } from './Lesson'

interface GetLessonsQueryResponse {
  lessons: {
    availableAt: Date
    id: string
    lessonType: 'practice' | 'live'
    slug: string
    title: string
  }[]
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
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
