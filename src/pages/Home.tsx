function Home() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden group">
      
      {/* Image mobile */}
      <img
        src="/src/assets/images/presentation.jpeg"
        alt="Harry Potter mobile"
        className="
          absolute inset-0 h-full w-full object-cover
          md:hidden
        "
      />

      {/* Image desktop */}
      <img
        src="/src/assets/images/Harry_Potter_04.jpg"
        alt="Harry Potter"
        className="
          absolute inset-0 h-full w-full object-cover
          hidden md:block
          scale-110
          md:group-hover:scale-125
          transition-transform duration:3000 ease-out
        "
      />


      {/* Contenu texte */}
      <div className="relative z-10 flex h-full items-end p-8 md:p-20">
        <div
          className="
            max-w-3xl
            text-white
            md:translate-y-8 md:opacity-0
            md:group-hover:translate-y-0 md:group-hover:opacity-100
            transition-all duration:1500ms ease-out
          "
        >
          <p
            className="
              text-lg md:text-xl lg:text-2xl
              leading-[1.8]
              font-HarryP

              first-letter:text-8xl
              md:first-letter:text-9xl
              lg:first-letter:text-[10rem]

              first-letter:font-bold
              first-letter:float-left
              first-letter:mr-4
              first-letter:-mt-2
              first-letter:text-yellow-500
            "
          >
            Sorcier britannique, survivant de la malédiction de Voldemort,
            élève de Gryffondor devenu le symbole de la résistance contre les
            forces du mal.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
