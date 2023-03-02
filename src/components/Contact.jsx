import React from "react";

function Contact() {
  return (
    <div name='contact' className="text-zinc-300 body-font relative bg-gradient-to-b from-black to-gray-800">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-amber-100">
            Contacto
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {" "}
            envíe el siguiente formulario para ponerse en contacto conmigo
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            action="https://getform.io/f/efeea79b-a749-4cde-8bcb-6dadf720f029"
            method="POST"
          >
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="name"
                    className="leading-7 text-sm text-amber-100"
                  >
                    Name
                  </label>
                  <input
                    placeholder="Ingresa tu nombre"
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-emerald-500 bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-amber-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-amber-100"
                  >
                    Email
                  </label>
                  <input
                    placeholder="Ingresa tu email"
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-emerald-500 bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-amber-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-amber-100"
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows={10}
                    placeholder="Deja tu mensaje"
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-emerald-500 bg-transparent focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-amber-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="text-zinc-50 bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Enviar
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a
                  href="mailto:beccialex2002@gmail.com"
                  className="text-indigo-500"
                >
                  beccialex2002@gmail.com
                </a>
                <p className="leading-normal my-5">
                  <br />
                </p>
                <span className="inline-flex">
                  <a className="text-amber-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-amber-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-amber-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
