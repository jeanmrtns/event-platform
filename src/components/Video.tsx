import { DefaultUi, Player, Youtube } from '@vime/react'
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import { Button, Card, LoadingSpinner } from '@/components'

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from '@/graphql/generated'

interface VideoProps {
  lessonSlug: string
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 grid place-items-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex lg:justify-center">
        <div className="h-full w-full lg:max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId!} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col w-full lg:flex-row items-start gap-16">
          <div className="flex-1">
            <strong className="text-2xl text-gray-100">
              {data.lesson.title}
            </strong>

            <p className="text-gray-200 text-base leading-6 mt-4">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />
                <div className="flex flex-col flex-1 leading-relaxed">
                  <span className="font-bold text-2xl text-gray-100">
                    {data.lesson.teacher.name}
                  </span>
                  <span className="text-sm text-gray-400">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row mx-auto gap-4 w-full md:w-auto">
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

        <div className="grid lg:grid-cols-2 gap-8 mt-20 mx-auto">
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
