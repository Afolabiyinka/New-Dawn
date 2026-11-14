// Gallery.tsx
import { images } from "@/lib/images";
import Image from "next/image";
import { galleryRatios } from "@/lib/page-data";

// stable pseudo-random pick per index
const ratioFor = (i: number) =>
  galleryRatios[
    (Math.imul(i + 1, 2654435761) >>> 0) % galleryRatios.length
  ];

const Gallery = () => (
  <section id="gallery" className="bg-[#f6f3ec] pt-36 pb-24">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl mb-12 text-[#1F3D2B]">Gallery</h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
        {images.about.map(({ src, alt }, i) => (
          <div
            key={`${alt}-${i}`}
            className={`group relative break-inside-avoid overflow-hidden ${ratioFor(i)}`}
          >
            <Image
              src={src}
              alt={alt}
              className="h-full w-full object-cover rounded-xl transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1F3D2B]/70 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
              <p className="text-white">{alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
