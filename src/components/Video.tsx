import { gql, useQuery } from '@apollo/client'
import { DefaultUi, Player, Youtube } from '@vime/react'
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import { Button, Card } from '@/components'

import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      videoId
      title
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`

interface VideoProps {
  lessonSlug: string
}

interface GetLessonBySlugResponse {
  lesson: {
    videoId: string
    title: string
    description: string
    teacher: {
      bio: string
      avatarURL: string
      name: string
    }
  }
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    },
  })

  if (!data) {
    return <p className="flex-1">Carregando</p>
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data?.lesson.videoId!} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <strong className="text-2xl text-gray-100">
              {data?.lesson.title}
            </strong>

            <p className="text-gray-200 text-base leading-6 mt-4">
              {data?.lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data?.lesson.teacher.avatarURL}
                alt=""
              />
              <div className="flex flex-col leading-relaxed">
                <span className="font-bold text-2xl text-gray-100">
                  {data?.lesson.teacher.name}
                </span>
                <span className="text-sm text-gray-400">
                  {data?.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button variant="primary" href="#">
              <DiscordLogo className="mr-1" size={24} />
              Comunidade no discord
            </Button>

            <Button variant="secondary" href="#">
              <Lightning className="mr-1" size={24} />
              Acesse o desafio
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20">
          <Card
            href="#"
            title="Material complementar"
            description="Acesse o material complementar para acelerar o seu
            desenvolvimento"
            image={<FileArrowDown size={39} />}
          />

          <Card
            href="#"
            title="Wallpapers exclusivos"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
            máquina"
            image={<Image alt="" size={39} />}
          />
        </div>
      </div>
    </div>
  )
}
