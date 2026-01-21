import figma from "/src/assets/photos/figma.svg";
import github from "/src/assets/photos/github.svg";
import site from "/src/assets/photos/site.svg";

export default function ProjectCard({
  imageSrc,
  text,
  description,
  technologies,
  GitHubLink,
  FigmaLink,
  SiteLink,
}) {
  return (
    <div className="bg-aboutbg2 rounded-lg border min-h-[400px] md:min-h-[450px] lg:h-[500px] p-1 w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)] xl:w-[calc(50%-12px)] relative overflow-hidden font-comfortaa flex flex-col">
      {/* Image Section */}
      <div className="border-[8px] md:border-[12px] border-aboutbg2 rounded-2xl bg-white">
        <div className="h-[80px] sm:h-[90px] md:h-[107px] w-[130px] sm:w-[150px] md:w-[175px] mx-auto py-3 md:py-4">
          <img
            width={300}
            height={500}
            decoding="async"
            loading="lazy"
            alt="project image"
            className="w-full h-full rounded-md object-cover"
            src={imageSrc}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="p-3 md:p-4 pt-3 md:pt-4 pb-2 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-white font-black text-xl md:text-2xl mb-2">{text}</h3>
          <p className="text-white font-light mb-3 text-sm md:text-base">{description}</p>
        </div>
        {/* Optional Links */}
        <div>
          <div className="flex flex-wrap gap-3 md:gap-4 mb-2">
            {GitHubLink && (
              <div className="flex flex-row items-center">
                <img src={github} alt="github icon" className="w-4 h-4 md:w-5 md:h-5" />
                <a
                  href={GitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold underline hover:text-gray-300 transition-colors text-sm md:text-base"
                >
                  GitHub
                </a>
              </div>
            )}

            {FigmaLink && (
              <div className="flex flex-row items-center">
                <img src={figma} alt="figma icon" className="w-4 h-4 md:w-5 md:h-5" />
                <a
                  href={FigmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold underline hover:text-gray-300 transition-colors text-sm md:text-base"
                >
                  Figma
                </a>
              </div>
            )}

            {SiteLink && (
              <div className="flex flex-row gap-1 items-center">
                <img className="w-4 md:w-5" src={site} alt="site icon" />
                <a
                  href={SiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold underline hover:text-gray-300 transition-colors text-sm md:text-base"
                >
                  Site
                </a>
              </div>
            )}
          </div>
          <p className="text-gray-400 font-extralight text-xs md:text-sm">{technologies}</p>
        </div>
      </div>
    </div>
  );
}
