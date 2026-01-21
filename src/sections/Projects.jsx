import ProjectCard from "../components/ProjectCard";
import roomm8s from "/src/assets/photos/roomm8s.png";
import cat from "/src/assets/photos/mc_cat.jpg";
import restaurant from "/src/assets/photos/restaurant.png";
import kano from "/src/assets/photos/kano.png";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6">
      <h3 className="text-aboutbg font-bold font-nunito text-2xl md:text-3xl pb-4 md:pb-6">
        Projects
      </h3>
      <div className="flex flex-wrap justify-center sm:justify-between gap-4 md:gap-6">
        <ProjectCard
          imageSrc={roomm8s}
          text="ROOM M8S (WIP)"
          description="Room M8s is a platform designed to help students connect and find compatible roommates or housing options during and after university life. It's a personal project of mine that I'm currently working on."
          technologies="Next.js, TailwindCSS, React, Drizzle, Auth.js, tRPC, WebSockets"
          GitHubLink="https://github.com/uperpenta/room-m8s"
          FigmaLink="https://www.figma.com/design/3DwJd4Db3c09NAn8Oylweo/Room-M8s?node-id=0-1&t=rGNP0B3E1mFJpPQq-1"
        ></ProjectCard>
        <ProjectCard
          imageSrc={cat}
          text="THIS SITE"
          description="Created this site to introduce myself better and showcase my abilities and creativity. Made with React, Vite, TailwindCSS "
          technologies="React, TailwindCSS, Vite"
          GitHubLink="https://github.com/uperpenta/uperpenta.github.io"
          FigmaLink="https://www.figma.com/design/czufB9zxF5DpEnC2WNAZF5/Portofolio-Github?node-id=0-1&t=aVx4QfBThb5cHxsL-1"
        ></ProjectCard>
        <ProjectCard
          imageSrc={restaurant}
          FigmaLink="https://www.figma.com/design/Je0fAcX0OvJQbGbIF5XuAZ/Georgian-Restaurant?node-id=0-1&t=dt6qW5IHZjL5TigE-1"
          technologies="Figma"
          text="GEORGIAN RESTAURANT"
          description="A simple design concept for a Georgian Restaurant, showcasing traditional leitmotifs with a modern touch. Made with Figma"
        ></ProjectCard>
        <ProjectCard
          imageSrc={kano}
          text="KANO BOUTIQUE HOTEL"
          description="I developed this website as a paid project for a hotel located in Zanzibar, Tanzania. The site features a clean and minimalist design, with integrated Property Management System (PMS) workflows that handle bookings and online payments through API connections between the hotel’s backend and external payment gateways."
          SiteLink="https://www.kanoboutiquehotel.com/"
          technologies="Node.js, Express.js, Figma, React"
        ></ProjectCard>
      </div>
    </div>
  );
}
