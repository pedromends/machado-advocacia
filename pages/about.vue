<template>
  <main class="h-auto">
    <section class="md:px-40 mx-auto py-20 md:py-28 flex flex-col bg-header justify-center items-center">
      <h1 class="mb-16 text-3xl md:px-60 text-center md:text-5xl lg:text-6xl leading-tight text-white tracking-tight">
        Sobre nós
      </h1>
      <p class="text-base mb-10 md:px-48 text-center md:text-base text-light-gray vsm:w-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit, odio quis commodo tempus,
        turpis turpis consectetur eros, venenatis blandit mi purus quis arcu. Nunc condimentum enim vitae pharetra
        auctor. Nulla vitae orci congue, maximus dolor id, blandit nisl.
      </p>
      <p class="text-base mb-10 md:px-48 text-center md:text-base text-light-gray vsm:w-80">
        Donec non ante mauris. Sed at molestie libero, vitae malesuada ex. Pellentesque ornare eleifend quam ut ornare.
        Phasellus porta rutrum euismod. Integer nisl libero, dictum a mi in, commodo pharetra augue. In id ullamcorper
        arcu. Proin at tincidunt.
      </p>
      <p class="text-base mb-10 md:px-48 text-center md:text-base text-light-gray vsm:w-80">Sed interdum ut nibh sit amet
        lacinia. Sed sit amet enim nec eros consequat faucibus. Suspendisse potenti. Aenean in libero consequat,
        semper ante sit amet, malesuada risus. Ut luctus lacus nec ligula efficitur.
      </p>
    </section>

    <section ref="forWho" class=" mx-auto mt-16 bg-white bg-no-repeat bg-right-bottom flex">
      <div class="w-full pl-32 vsm:pl-5">
        <div class="container text-start">
          <p class="text-base text-middle-gray font-medium">Sobre nós</p>
          <h1 class="text-primary-blue mb-4 md:w-72 text-3xl md:text-4xl leading-tight ">Dr. Rodrigo Machado Corrêa</h1>
          <p class="text-lg md:text-lg mb-8 text-coolGray-500 font-medium w-[580px] vsm:w-80">Advogado e fundador da
            Machado Corrêa Advocacia. Seu interesse pelo
            Direito e pela Ciência Contábil originou-se da necessidade de
            contribuir nos negócios de sua família. Rodrigo é graduado em
            Ciências Jurídicas e Sociais, em Ciências Contábeis e possui
            mestrado em Ciências Contábeis. Atualmente conta com um currículo
            extenso nas causas em que trabalhou e aulas ministradas nas
            seguintes Instituições de Ensino Superior: UNILASALLE, São Judas
            Tadeu, Monteiro Lobato, FAI e UNISOCIESC.
          </p>
          <p class="text-lg md:text-lg mb-8 text-coolGray-500 font-medium w-[580px] vsm:w-80">
            Atuou como professor universitário em disciplinas como: Perícia,
            mediação e arbitragem; contabilidade para pequenas e médias
            empresas; gestão tributária; falência e recuperação judicial e
            extrajudicial de empresas; planejamento tributário; gestão de
            tributos estaduais e municipais; contabilidade; e gestão tributária
            de tributos diretos e indiretos, entre outros.
          </p>
        </div>
      </div>
      <div class="w-full h-[39rem] bg-body-white bg-cover">
        <div class="w-full h-[39rem] bg-lawyer"></div>
      </div>
    </section>

    <section>
      <SectionContact></SectionContact>
    </section>
  </main>
</template>
