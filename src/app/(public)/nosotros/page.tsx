'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const NosotrosPage = () => {
  return (
    <>
      <Header />
      {/* Título y subtítulo al estilo Proceso */}
      <div className='py-8 md:py-14 lg:py-16'>
        <section className='flex flex-col items-center w-full'>
          <div className='text-center mb-3 sm:mb-4 md:mb-5 lg:mb-10'>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-2xl md:text-3xl lg:text-4xl font-extrabold text-color-title mb-2'
            >
              <span className='text-color-primary'>Sobre {company.name}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-color-text max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto md:text-lg font-medium'
            >
              En {company.name} nos dedicamos a ofrecer la mejor experiencia de
              compra de autos usados, con la mejor calidad y el mejor servicio.
            </motion.p>
          </div>
        </section>

        {/* Imagen y texto descriptivo en fila en desktop */}
        <section className='flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 mx-auto px-4 mb-10'>
          {/* Imagen a la izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='w-full max-w-md xl:max-w-lg overflow-hidden [box-shadow:0px_0px_19px_5px_rgba(0,0,0,0.15)] rounded-xl mb-6 md:mb-0 '
          >
            <Image
              src='/assets/nosotros/nosotros-1.webp'
              alt={`Equipo de ${company.name}`}
              width={1000}
              height={600}
              className='object-cover w-full h-auto'
              priority
            />
          </motion.div>
          {/* Texto a la derecha */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center lg:text-left max-w-lg'
          >
            <h3 className='text-2xl lg:text-3xl font-semibold text-color-title mb-3'>
              Experiencia y compromiso
            </h3>
            <p className='text-color-text mb-2 lg:text-lg font-medium'>
              Nuestra experiencia en el mercado nos permite ofrecer la mejor
              calidad y el mejor servicio. Desde la selección de los autos hasta
              la entrega, te acompañamos en cada paso.
            </p>
            <p className='text-color-text lg:text-lg font-medium'>
              Contamos con un equipo de profesionales especializados en el
              sector automotriz. Nuestro objetivo es convertir tu sueño de tener
              un auto en una realidad, ofreciendo opciones de financiamiento
              flexibles y asesoramiento integral en cada etapa de tu compra.
            </p>
          </motion.div>
        </section>

        {/* Cards de beneficios */}
        <section className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mt-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='relative bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden'
          >
            {/* Borde superior decorativo */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-primary to-color-primary-dark'></div>

            {/* Contenido */}
            <div className='p-6 flex flex-col items-start'>
              {/* Icono con fondo */}
              <div className='mb-4 p-4 bg-color-primary/10 rounded-xl'>
                <svg
                  className='text-color-primary w-8 h-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                  <polyline points='14 2 14 8 20 8' />
                  <path d='M12 18v-6' />
                  <path d='M9 15l3 3 3-3' />
                </svg>
              </div>

              <h4 className='font-bold text-xl mb-3 text-color-title'>
                Gestoría propia
              </h4>
              <p className='text-color-text text-sm lg:text-base leading-relaxed'>
                Nos encargamos de todos los trámites y documentación.
                Transferencia rápida y segura sin complicaciones.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='relative bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden'
          >
            {/* Borde superior decorativo */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-primary to-color-primary-dark'></div>

            {/* Contenido */}
            <div className='p-6 flex flex-col items-start'>
              {/* Icono con fondo - Símbolo de dinero */}
              <div className='mb-4 p-4 bg-color-primary/10 rounded-xl'>
                <svg
                  className='text-color-primary w-8 h-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='12' y1='1' x2='12' y2='23' />
                  <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                </svg>
              </div>

              <h4 className='font-bold text-xl mb-3 text-color-title'>
                Financiamiento a medida
              </h4>
              <p className='text-color-text text-sm lg:text-base leading-relaxed'>
                Planes de financiamiento personalizados adaptados a tus
                necesidades. Con o sin anticipo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='relative bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden'
          >
            {/* Borde superior decorativo */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-color-primary to-color-primary-dark'></div>

            {/* Contenido */}
            <div className='p-6 flex flex-col items-start'>
              {/* Badge con número */}
              <div className='mb-4 px-5 py-3 bg-color-primary/10 rounded-xl'>
                <span className='text-color-primary text-2xl font-bold'>
                  +15
                </span>
              </div>

              <h4 className='font-bold text-xl mb-3 text-color-title'>
                Años de experiencia
              </h4>
              <p className='text-color-text text-sm lg:text-base leading-relaxed'>
                Más de 15 años de trayectoria en el sector automotriz nos
                respaldan. Confianza y profesionalismo garantizados.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default NosotrosPage;
