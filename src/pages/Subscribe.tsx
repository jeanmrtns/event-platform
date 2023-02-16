import { Logo } from '@/components'

export function Subscribe() {
  return (
    <div className="min-h-screen w-full bg-blur bg-cover bg-no-repeat">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center ">
        <div className="mt-10 flex w-full items-center justify-between">
          <div className="max-w-[624px] relative">
            <img
              src="/src/assets/react-icon.svg"
              className="absolute top-0 left-2/4 -translate-2/4"
              alt=""
            />
            <Logo />
            <h1 className="text-[2.5rem] mt-6 leading-tight">
              Construa uma{' '}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">React</strong>
            </h1>
            <p className="leading-relaxed mt-6 text-base text-gray-200">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-8 bg-gray-700 rounded border border-gray-500 z-10">
            <strong className="text-gray-100 text-2xl">
              Inscreva-se gratuitamente
            </strong>

            <form className="w-full mt-6 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Seu nome completo"
                className="px-5 h-14 rounded-[5px] border-none outline-none bg-gray-900 placeholder:text-gray-300 text-gray-100 focus:outline-green-500 focus:outline"
              />
              <input
                type="email"
                placeholder="Digite seu email"
                className="px-5 h-14 rounded-[5px] border-none outline-none bg-gray-900 placeholder:text-gray-300 text-gray-100 focus:outline-green-500 focus:outline"
              />

              <button
                type="submit"
                className="bg-green-500 mt-6 rounded text-sm font-bold text-white py-4 uppercase hover:bg-green-700 transition-colors"
              >
                garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img src="/src/assets/code-mockup.png" className="z-10" alt="" />
      </div>
    </div>
  )
}
