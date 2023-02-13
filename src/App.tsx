import { gql, useQuery } from '@apollo/client'

interface Lesson {
  id: string
  title: string
  teacher: {
    bio: string
    name: string
  }
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        bio
        name
      }
    }
  }
`

export function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <ul>
      {data?.lessons.map((lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}
