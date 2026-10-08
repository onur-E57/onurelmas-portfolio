import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        Projelerimden Ufak Bir <span className="text-purple">Seçki</span>
      </h1>

      <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2">
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-[#080a1c] transition-all duration-300 hover:border-purple/40"
            >
              {/* Görsel */}
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="block overflow-hidden"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#13162d]">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* İçerik */}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-bold text-white lg:text-2xl">
                  {title}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/70 lg:text-base">
                  {des}
                </p>

                {/* Alt bölüm */}
                <div className="mt-auto flex items-end justify-between pt-6">
                  {/* Teknolojiler */}
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] bg-black lg:h-10 lg:w-10 ${
                          i !== 0 ? "-ml-2" : ""
                        }`}
                      >
                        <Image
                          height={40}
                          width={40}
                          src={icon}
                          alt=""
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Kaynak kodları */}
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                    className="flex items-center text-sm text-purple transition-colors hover:text-white lg:text-base"
                    >
                      Kaynak Kodları
                    <FaLocationArrow
                      className="ml-2"
                      color="#cbacf9"
                      size={13}
                    />
                    </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};