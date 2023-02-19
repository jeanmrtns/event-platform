import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateSubscriberMutation } from '@/graphql/generated'
import clsx from 'clsx'

interface RegisterFormProps {
  onSign: () => void
}

export function RegisterForm({ onSign }: RegisterFormProps) {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      },
    })

    navigate('/event')
  }

  return (
    <>
      <strong className="text-gray-100 text-2xl">
        Inscreva-se gratuitamente
      </strong>

      <form
        onSubmit={handleSubscribe}
        className="w-full mt-6 flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Seu nome completo"
          className="px-5 h-14 rounded-[5px] border-none outline-none bg-gray-900 placeholder:text-gray-300 text-gray-100 focus:outline-green-500 focus:outline"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="Digite seu email"
          className="px-5 h-14 rounded-[5px] border-none outline-none bg-gray-900 placeholder:text-gray-300 text-gray-100 focus:outline-green-500 focus:outline"
          onChange={(event) => setEmail(event.target.value)}
        />

        <button
          type="button"
          className="self-start text-sm text-blue-500 mt-2"
          onClick={onSign}
        >
          Já tenho acesso
        </button>

        <button
          type="submit"
          disabled={loading}
          className={clsx(
            'bg-green-500 mt-4 rounded text-sm font-bold text-white py-4 uppercase hover:bg-green-700 transition-colors',
            {
              'disabled:bg-green-700 cursor-not-allowed opacity-50': loading,
            },
          )}
        >
          garantir minha vaga
        </button>
      </form>
    </>
  )
}
