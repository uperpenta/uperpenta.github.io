export default function Contact() {
  return (
    <section className="h-full flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-6">
        <h3 className="text-aboutbg font-bold font-nunito text-2xl md:text-3xl pb-6 md:pb-8">
          Get in Touch
        </h3>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-20">
          <div className="w-full md:w-1/2">
            <p className="text-gray-400 text-base md:text-xl font-nunito leading-relaxed">
              If you would like to connect, collaborate, or simply follow my
              work, you can find me on the platforms below. I value thoughtful
              conversations and well-designed software.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
            {[
              {
                name: "Email",
                label: "i.raresandrei@yahoo.com",
                href: "mailto:i.raresandrei@yahoo.com",
              },
              {
                name: "GitHub",
                label: "github.com/uperpenta",
                href: "https://github.com/uperpenta",
              },
              {
                name: "LinkedIn",
                label: "linkedin.com/in/rares-andrei-ialomiteanu",
                href: "https://linkedin.com/in/rares-andrei-ialomiteanu-269988251/",
              },
            ].map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-200 rounded-xl px-4 sm:px-6 py-4 sm:py-5
                 transform transition-all duration-300
                 hover:-translate-y-1 hover:shadow-lg cursor-pointer gap-1 sm:gap-4"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="font-nunito font-bold text-base md:text-lg text-black">
                  {item.name}
                </span>

                <span className="text-darkred font-nunito opacity-80 group-hover:opacity-100 transition text-sm md:text-base break-all sm:break-normal">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-20 h-px bg-gradient-to-r from-transparent to-transparent animate-pulse" />
      </div>
    </section>
  );
}
