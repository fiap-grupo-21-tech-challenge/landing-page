
import { FiUsers, FiTrendingUp, FiBarChart, FiShield, FiSmartphone } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import BannerImage from "./assets/banner-image.png"
import { navigateToUrl } from "single-spa";
import { Stars } from './components/stars';

export default function Root(props) {
  return (
    <>
      <section className="px-16 flex justify-between items-center mt-16 h-[80vh]">
        <div className="flex flex-col gap-6 max-w-[50%]">
          <h1 className="flex flex-col text-6xl font-semibold">
            <span>Gerencie suas</span>
            <span>
              <span style={{ color: 'var(--color-blue)' }}>
                finanças
              </span>
              <span> com</span></span>
            <span style={{ color: 'var(--color-purple)' }}>inteligência</span>
          </h1>

          <span className="text-base max-w-lg" style={{ color: 'var(--color-blueGray)' }}>
            A plataforma completa para controlar receitas, despesas e
            alcançar seus objetivos financeiros de forma simples e segura.
          </span>

          <div>
            <button onClick={() => navigateToUrl('/sign-in')} className="button-primary" type="button">Começar Grátis</button>
          </div>

          <div className="flex gap-8">
            <div className="flex gap-2">
              <FiUsers size={20} />
              <span>+10.000 usuários</span>
            </div>

            <div className="flex gap-2">
              <FaStar size={20} className="text-yellow-400" />
              <span>4,9/5 avaliações</span>
            </div>
          </div>
        </div>

        <div className="max-w-[50%] rounded-md">
          <img src={BannerImage} alt="Banner promocional" className="w-[700px] h-[850px]" />
        </div>
      </section>

      <section className="justify-center max-sm:px-4 flex flex-col items-center h-[100vh]">
        <h4 className="text-center w-full font-semibold text-4xl mb-4">
          Recursos que fazem a diferença
        </h4>

        <span className="text-center text-base" style={{ color: 'var(--color-blueGray)' }}>
          Tudo que você precisa para ter controle total sobre suas finanças
          pessoais em uma única plataforma.
        </span>

        <div className="flex justify-between min-md:gap-24 mt-16 max-sm:flex-col max-sm:gap-16">
          <div className="flex flex-col items-center text-center min-md:gap-4 max-sm:gap-2">
            <FiTrendingUp size={30} style={{ color: 'var(--color-blue)' }} />
            <h2 className="text-2xl font-semibold">Controle Financeiro Completo</h2>
            <span color="tertiary">
              Monitore suas receitas,
              <br /> despesas e saldo em tempo
              <br /> real com dashboards intuitivos.
            </span>
          </div>

          <div className="flex flex-col items-center text-center min-md:gap-4 max-sm:gap-2">
            <FiBarChart size={30} style={{ color: 'var(--color-green)' }} />
            <h2 className="text-2xl font-semibold">Relatórios Detalhados</h2>
            <span color="tertiary">
              Visualize seus gastos por
              <br /> categoria e acompanhe
              <br /> sua evolução financeira.
            </span>
          </div>

          <div className="flex flex-col items-center text-center min-md:gap-4 max-sm:gap-2">
            <FiShield size={30} style={{ color: 'var(--color-purple)' }} />
            <h2 className="text-2xl font-semibold">Segurança Total</h2>
            <span color="tertiary">
              Seus dados estão protegidos
              <br /> com a mais alta tecnologia
              <br /> de segurança.
            </span>
          </div>

          <div className="flex flex-col items-center text-center min-md:gap-4 max-sm:gap-2">
            <FiSmartphone size={30} style={{ color: 'var(--color-red)' }} />
            <h2 className="text-2xl font-semibold">Design Responsivo</h2>
            <span color="tertiary">
              Acesse de qualquer dispositivo
              <br /> - desktop, tablet ou
              <br /> smartphone.
            </span>
          </div>
        </div>
      </section>

      <section
        className="flex justify-evenly items-center max-sm:flex-col max-sm:items-center max-sm:gap-8 max-sm:py-16 min-h-[20vh] px-0"
        style={{ background: 'linear-gradient(90deg, var(--color-blue) 0%, var(--color-purple) 100%)' }}
      >
        <div className="flex flex-col items-center" style={{ color: 'var(--color-white)' }}>
          <h4 className="text-4xl font-bold">
            R$ 10M+
          </h4>
          <span>Transações processadas</span>
        </div>

        <div className="flex flex-col items-center" style={{ color: 'var(--color-white)' }}>
          <h4 className="text-4xl font-bold">
            99,9%
          </h4>
          <span>Disponibilidade</span>
        </div>

        <div className="flex flex-col items-center" style={{ color: 'var(--color-white)' }}>
          <h4 className="text-4xl font-bold">
            24/7
          </h4>
          <span>Suporte disponível</span>
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center max-sm:px-4 max-sm:py-8 h-[100vh] gap-4"
      >
        <h4 className="text-4xl font-bold">O que nossos usuários dizem</h4>
        <span className="text-base" style={{ color: 'var(--color-blueGray)' }}>
          Depoimentos reais de quem transformou sua vida financeira
        </span>

        <div className="flex min-md:items-center justify-evenly w-full max-sm:flex-col max-sm:gap-8 mt-8">
          <div className="flex flex-col gap-3">
            <Stars />
            <span>
              "Finalmente consegui organizar minhas
              <br /> finanças de forma simples e eficiente!"
            </span>

            <div className="flex flex-col">
              <span className="text-base">Maria Silva</span>
              <span style={{ color: 'var(--color-blueGray)' }}>Empreendedora</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Stars />
            <span className="italic">
              "O melhor app para controle financeiro que já
              <br /> usei. Interface intuitiva e completa."
            </span>

            <div className="flex flex-col">
              <span className="text-base">João Santos</span>
              <span style={{ color: 'var(--color-blueGray)' }}>Freelancer</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Stars />
            <span>
              "Revolucionou minha gestão financeira.
              <br />
              Recomendo para todos!"
            </span>

            <div className="flex flex-col">
              <span className="text-base">Ana Costa</span>
              <span style={{ color: 'var(--color-blueGray)' }}>Consultora</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col justify-center items-center gap-8 max-sm:px-4 max-sm:py-8 max-sm:w-full min-h-[40vh]"
        style={{ backgroundColor: 'var(--color-dark)' }}
      >
        <h4 className="max-sm:text-center text-4xl font-semibold" style={{ color: 'var(--color-white)' }}>
          Pronto para transformar suas finanças?
        </h4>

        <h2 className="max-sm:text-center text-2xl" style={{ color: 'var(--color-white)' }}>
          Junte-se a milhares de usuários que já estão no controle de suas
          finanças
        </h2>

        <div className="flex items-center gap-4 max-sm:gap-2">
          <button onClick={() => navigateToUrl('/sign-up')} className="button-tertiary" type="button">Criar Conta Grátis</button>
          <button onClick={() => navigateToUrl('/sign-in')} className="button-primary" type="button">Fazer Login</button>
        </div>
      </section>
    </>
  );
}
