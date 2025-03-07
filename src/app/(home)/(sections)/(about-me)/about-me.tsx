export function AboutMe() {
  return (
    <section
      id="about_me"
      className="flex flex-col bg-topography px-5 py-20 md:px-20 lg:px-5 2xl:min-h-[calc(100vh-4rem)] 2xl:px-36"
    >
      <div className="relative flex flex-1 flex-col gap-y-8 rounded-2xl border border-primary bg-background/75 p-6">
        <h1 className="text-center font-extrabold text-xl md:text-start md:text-3xl">
          About me
        </h1>

        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            👨‍💻 Hi, I'm Vinicius Motta, a passionate Full-Stack Developer who
            loves building impactful tech solutions, always balancing
            performance and design. With experience leading teams and developing
            scalable applications, I have worked on projects ranging from
            environmental preservation to financial markets, using technologies
            like TypeScript, React, Node.js, Golang, and Python.
          </p>

          <p>
            🤝 Collaboration is my driving force. I thrive in team environments
            where I can share knowledge, learn from others, and grow together. I
            believe technology is a powerful tool for solving problems and
            making a real difference in the world.
          </p>

          <p>
            🎓 Currently, I'm pursuing a Bachelor’s degree in Computer Science
            at Cruzeiro do Sul Virtual, continuously improving my technical
            skills and exploring new development methodologies. I'm always eager
            to learn new programming languages and stay updated with the latest
            industry trends.
          </p>

          <p>
            ⚽🎮 Outside of coding, I’m passionate about soccer, video games,
            and continuous learning. Whether it's tackling complex coding
            challenges or strategizing the best play on the field, I love
            challenges that push me forward.
          </p>

          <p>
            🚀 If you're looking for a developer focused on innovation, code
            quality, and teamwork, let’s connect!
          </p>
        </div>
      </div>
    </section>
  )
}
