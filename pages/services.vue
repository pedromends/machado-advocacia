<template>
    <main>
      <section class=" h-[40rem] mx-auto py-20 flex flex-col bg-header bg-cover justify-center items-center">
        <div class="mb-52">
          <h1 class="mb-16 text-3xl md:px-60 text-center md:text-5xl lg:text-5xl leading-tight text-white tracking-tight">
            Nossas<br/>especialidades
          </h1>
          <p class="text-lg md:px-72 text-center md:text-base text-light-gray vsm:px-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br/>
              accusantium doloremque laudantium, totam rem aperiam
          </p>
        </div>
      </section>

      <section class="flex justify-center">
        <div class="w-4/5 h-[35rem] bg-white absolute z-[1] top-[28rem] flex rounded-l-xl rounded-r-xl vsm:flex-col vsm:h-auto">
          <div class="w-1/3 flex flex-col justify-between border-solid border-r-2 border-r-gray-300 vsm:flex-row vsm:w-full">
            <CardSpecialtySmall @click="alternate(1)"
              class="w-full hover:bg-primary-blue h-full align-center flex hover:text-white justify-center transition duration-100 border-solid border-[1.5px] rounded-l-xl border-r-gray-300"
              image="images/icons/empresarial_icon.svg" :title="'Direito Empresarial'"/>
            <CardSpecialtySmall @click="alternate(2)"
              class="w-full hover:bg-primary-blue h-full align-center flex hover:text-white justify-center transition duration-100 border-solid border-[1.5px] rounded-l-xl border-r-gray-300"
              image="images/icons/falencia_icon.svg" :title="'Falência e Recuperação de Empresas'"/>
            <CardSpecialtySmall @click="alternate(3)"
              class="w-full hover:bg-primary-blue h-full align-center flex hover:text-white justify-center transition duration-100 border-solid border-[1.5px] rounded-l-xl border-r-gray-300"
              image="images/icons/penal_empresarial_icon.svg" :title="'Direito Penal Empresarial'"/>
            <CardSpecialtySmall @click="alternate(4)"
              class="w-full hover:bg-primary-blue h-full align-center flex hover:text-white justify-center transition duration-100 border-solid border-[1.5px] rounded-l-xl border-r-gray-300"
              image="images/icons/tributario_icon.svg" :title="'Direito Tributário'"/>
            <CardSpecialtySmall @click="alternate(5)"
              class="w-full hover:bg-primary-blue h-full align-center flex hover:text-white justify-center transition duration-100 border-solid border-[1.5px] rounded-l-xl border-r-gray-300"
              image="images/icons/trabalhista_icon.svg" :title="'Direito Trabalhista'"/>
            <CardSpecialtySmall @click="alternate(6)"
              class="w-full hover:bg-primary-blue h-full align-center flex hover:text-white justify-center transition duration-100 border-solid border-[1.5px] rounded-l-xl border-r-gray-300"
              image="images/icons/civil_icon.svg" :title="'Direito Civil'"/>
          </div>

          <div class="w-2/3 p-10">
            <section v-if="page == 1">
              <h1 class="mb-5 text-3xl text-left leading-tight text-primary-blue tracking-tight vsm:text-2xl vsm:w-60">Direito Empresarial</h1> 
              <p>Direito Empresarial</p>
            </section>
            
            <section v-if="page == 2">
              <h1 class="mb-5 text-3xl text-left leading-tight text-primary-blue tracking-tight vsm:text-2xl vsm:w-60 ">
                Expertise consolidada na assessoria em contratos individuais e coletivos de trabalho, bem como no contencioso judicial e administrativo.
              </h1>
              <p class="w-[34rem] vsm:w-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium quam vulputate dignissim suspendisse. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Elit eget gravida cum sociis 
                natoque penatibus et magnis. Elementum nibh tellus molestie nunc non blandit. Rhoncus est pellentesque elit ullamcorper. Neque viverra justo
                nec ultrices dui sapien eget mi proin. Tellus id interdum velit laoreet id donec. At in tellus integer feugiat scelerisque varius morbi.
                Nibh nisl condimentum id venenatis a condimentum vitae. Porttitor massa id neque aliquam vestibulum. Turpis massa sed elementum tempus
                egestas sed sed. Et molestie ac feugiat sed lectus.
              </p>
            </section>
            
            <section v-if="page == 3">
              <h1 class="mb-5 text-3xl text-left leading-tight text-primary-blue tracking-tight vsm:text-2xl vsm:w-60">Direito Penal Empresarial</h1>
              <p>Direito Penal Empresarial</p>
            </section>
            
            <section v-if="page == 4">
              <h1 class="mb-5 text-3xl text-left leading-tight text-primary-blue tracking-tight vsm:text-2xl vsm:w-60">Direito Tributário</h1>
              <p>Direito Tributário</p>
            </section>
            
            <section v-if="page == 5">
              <h1 class="mb-5 text-3xl text-left leading-tight text-primary-blue tracking-tight vsm:text-2xl vsm:w-60">Direito Trabalhista</h1>
              <p>Direito Trabalhista</p>
            </section>
            
            <section v-if="page == 6">
              <h1 class="mb-5 text-3xl text-left leading-tight text-primary-blue tracking-tight vsm:text-2xl vsm:w-60">Direito Civil</h1>
              <p>Direito Civil</p>
            </section>
            
          </div>
        </div>
      </section>

      <section class="w-full h-[30rem] bg-primary-blue z-0 relative vsm:h-[60rem]">
      </section>
    </main>
</template>

<script>

export default {
  data() {
    return {
      name: 'Vue.js',
      page: 1
    }
  },
  methods: {
    alternate(str) {
      this.page = str
    }
  }
};

</script>
