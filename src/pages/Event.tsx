import { Header, Sidebar, Video } from '@/components'
import { useGetFirstLessonSlugQuery } from '@/graphql/generated'
import { useParams, Navigate } from 'react-router-dom'

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  const { data } = useGetFirstLessonSlugQuery()
  const firstLessonSlug = data?.lessons[0]?.slug

  if (!slug && firstLessonSlug) {
    return <Navigate to={`/event/lesson/${firstLessonSlug}`} replace={true} />
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 relative">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  )
}
