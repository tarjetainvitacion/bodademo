import type { JSX } from "react"

export function QuoteSection(): JSX.Element {
  return (
    <section className="w-full py-20 bg-[#EAE4D9] text-center px-4 font-lato">
      <div className="max-w-3xl mx-auto">
        <div className="relative flex items-center justify-center mb-8">
          <hr className="w-full border-t border-gray-400 absolute" />
          <span className="relative z-10 bg-[#EAE4D9] px-4 text-xl md:text-2xl font-cormorant-garamond font-light text-gray-700 tracking-wide">
            ALGUNOS LO LLAMARÁN DESTINO,
          </span>
        </div>
        <p className="text-xl md:text-2xl font-cormorant-garamond font-light text-gray-700 tracking-wide mb-8">
          A NOSOTROS NOS GUSTA LLAMARLO MAGIA
        </p>
        <div className="relative flex items-center justify-center">
          <hr className="w-full border-t border-gray-400 absolute" />
          <span className="relative z-10 bg-[#EAE4D9] px-4 text-xl md:text-2xl font-cormorant-garamond font-light text-gray-700 tracking-wide">
            {" "}
          </span>
        </div>
      </div>
    </section>
  )
}
