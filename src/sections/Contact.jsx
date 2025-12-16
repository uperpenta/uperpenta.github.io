export default function Contact() {
  return (
    <section className="h-full flex items-center">
      <div className="max-w-7xl mx-auto w-full py-20">
        <h3 className="text-aboutbg font-bold font-nunito text-3xl pb-8">
          Get in Touch
        </h3>

        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="md:w-1/2">
            <p className="text-gray-400 text-xl font-nunito leading-relaxed">
              If you would like to connect, collaborate, or simply follow my
              work, you can find me on the platforms below. I value thoughtful
              conversations and well-designed software.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col gap-6">
            {[
              { name: "Email", value: "i.raresandrei@yahoo.com" },
              { name: "GitHub", value: "github.com/uperpenta" },
              {
                name: "LinkedIn",
                value: "linkedin.com/in/rares-andrei-ialomiteanu-269988251/",
              },
            ].map((item, index) => (
              <div
                key={item.name}
                className="group flex items-center justify-between border border-gray-200 rounded-xl px-6 py-5
                           transform transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="font-nunito font-bold text-lg text-black">
                  {item.name}
                </span>

                <span className="text-darkred font-nunito opacity-80 group-hover:opacity-100 transition">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
