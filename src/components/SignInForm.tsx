import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetSubscriberByEmailQuery } from '@/graphql/generated'
import clsx from 'clsx'

interface RegisterFormProps {
  onRegister: () => void
}

export function SignInForm({ onRegister }: RegisterFormProps) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)

  const { refetch, loading } = useGetSubscriberByEmailQuery({
    variables: {
      email,
    },
    partialRefetch: false,
  })

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    try {
      const { data } = await refetch()

      if (data?.subscriber?.id) {
        navigate('/event')
      } else {
        setIsValidEmail(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <strong className="text-gray-100 text-2xl">Entrar com email</strong>

      <form onSubmit={handleSignIn} className="w-full mt-6 flex flex-col gap-2">
        <input
          type="email"
          placeholder="Digite seu email"
          className={clsx(
            'px-5 h-14 rounded-[5px] outline-none bg-gray-900 placeholder:text-gray-300 text-gray-100',
            {
              'border border-red-500': !isValidEmail,
              'border-none focus:outline-green-500 focus:outline': isValidEmail,
            },
          )}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button
          type="button"
          className="self-start text-sm text-blue-500 mt-2"
          onClick={onRegister}
        >
          Ainda não tenho acesso
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
          Entrar
        </button>
      </form>
    </>
  )
}
