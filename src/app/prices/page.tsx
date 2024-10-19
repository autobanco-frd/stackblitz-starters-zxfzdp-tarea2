// Indica que este archivo es un "Client Component"
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Prices() {
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState<boolean>(false);

  // Función para abrir el modal
  const handleBuyClick = (): void => {
    setShowModal(true);
  };

  // Función para cerrar el modal
  const closeModal = (): void => {
    setShowModal(false);
  };

  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl mb-4 text-gray-600">
              Producto no disponible
            </h2>
            <button
              className="text-white bg-indigo-500 py-2 px-4 rounded hover:bg-indigo-600"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Contenido de los precios */}
      <div className="lg:w-1/4 mt-48 hidden lg:block">
        <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
          <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">
            Cpanel
          </p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
            Cuentas FTP
          </p>
          <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
            Correo ilimitado
          </p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
            Servicios VPN
          </p>
          <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
            Acceso a API
          </p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
            Conexión ZOOM
          </p>
          <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
            Soporte 24/7/365
          </p>
          <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start">
            Almacenamiento
          </p>
          <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
            Café ilimitado
          </p>
        </div>
      </div>

      <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
        <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
          <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
            <h3 className="tracking-widest text-gray-600">START</h3>
            <h2 className="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">
              Gratis
            </h2>
            <span className="text-sm text-gray-600">Prox 3 meses</span>
          </div>
          <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
            Licencia Original
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">
            Destacado
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          {/* Botón "Comprar" */}

          <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
            <button
              className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
              onClick={handleBuyClick}
            >
              Comprar
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Ciertas condiciones aplican
            </p>
          </div>
        </div>

        <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
          <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
            <h3 className="tracking-widest text-gray-600">PRO</h3>
            <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
              $38
              <span className="text-gray-600 text-base ml-1">/mo</span>
            </h2>
            <span className="text-sm text-gray-600">$456 anual</span>
          </div>
          <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
            Licencia Original
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
            Destacado
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
            <button
              className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
              onClick={handleBuyClick}
            >
              Comprar
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Ciertas condiciones aplican
            </p>
          </div>
        </div>

        <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
          <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
            <h3 className="tracking-widest text-gray-600">BUSINESS</h3>
            <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">
              $54
              <span className="text-gray-600 text-base ml-1">/mo</span>
            </h2>
            <span className="text-sm text-gray-600">$648 anual</span>
          </div>
          <p className="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
            Licencia Original
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">
            Destacado
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </p>
          <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
            <button
              className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"
              onClick={handleBuyClick}
            >
              Comprar
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Ciertas condiciones aplican
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
