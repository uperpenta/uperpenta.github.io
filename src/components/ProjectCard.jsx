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
    <div className="bg-aboutbg2 rounded-lg border h-[500px] 2xl:p-1 w-100 relative overflow-hidden font-comfortaa flex flex-col">
      {/* Image Section */}
      <div className="border-[12px] border-aboutbg2 rounded-2xl bg-white">
        <div className="h-[107px] w-[175px] mx-auto py-4">
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
      <div className="p-4 2xl:pt-4 pl-4 pr-4 pb-2 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-white font-black text-2xl mb-2">{text}</h3>
          <p className="text-white font-light mb-3">{description}</p>
        </div>
        {/* Optional Links */}
        <div>
          <div className="flex gap-4 mb-2">
            {GitHubLink && (
              <div className="flex flex-row">
                <img src={github}></img>
                <a
                  href={GitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold underline hover:text-gray-300 transition-colors"
                >
                  GitHub
                </a>
              </div>
            )}

            {FigmaLink && (
              <div className="flex flex-row">
                <img src={figma} alt="figma icon"></img>
                <a
                  href={FigmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold underline hover:text-gray-300 transition-colors"
                >
                  Figma
                </a>
              </div>
            )}

            {SiteLink && (
              <div className="flex flex-row gap-1">
                <img className="w-5" src={site}></img>
                <a
                  href={SiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold underline hover:text-gray-300 transition-colors"
                >
                  Site
                </a>
              </div>
            )}
          </div>
          <p className="text-gray-400 font-extralight h-1/7">{technologies}</p>
        </div>
      </div>
    </div>
  );
}
