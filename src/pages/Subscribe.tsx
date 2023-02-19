import { useState } from 'react'
import { Logo, RegisterForm, SignInForm } from '@/components'
import CodeMockupImage from '@/assets/code-mockup.png'
import ReactIcon from '@/assets/react-icon.svg'

export function Subscribe() {
  const [register, setRegister] = useState(true)

  function handleChangeToRegisterForm() {
    setRegister(true)
  }

  function handleChangeToSignInForm() {
    setRegister(false)
  }

  return (
    <div className="min-h-screen w-full bg-blur bg-cover bg-no-repeat overflow-hidden">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center ">
        <div className="mt-10 flex flex-col lg:flex-row w-full items-center justify-between">
          <div className="max-w-[624px] px-6 lg:px-0 relative text-center lg:text-start">
            <img
              src={ReactIcon}
              className="absolute top-0 left-0 lg:left-2/4"
              alt=""
            />
            <div className="flex justify-center lg:justify-start">
              <Logo />
            </div>
            <h1 className="text-3xl lg:text-[2.5rem] mt-6 leading-tight">
              Construa uma{' '}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React</strong>
            </h1>
            <p className="leading-relaxed mt-6 text-sm lg:text-base text-gray-200">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-8 bg-gray-700 rounded border mt-8 lg:mt-0 border-gray-500 z-10">
            {register ? (
              <RegisterForm onSign={handleChangeToSignInForm} />
            ) : (
              <SignInForm onRegister={handleChangeToRegisterForm} />
            )}
          </div>
        </div>

        <img src={CodeMockupImage} className="z-10" alt="" />
      </div>
    </div>
  )
}
