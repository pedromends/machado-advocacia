<template>
  <main class="px-32 vsm:p-5">
    <section>
      <div class="mt-12">
        <div cols="7" class="flex">
          <p class="flex items-center">
            <img src="images/icons/house-icon.png" class="w-5 mr-3 " alt="#" />
            > Falências
          </p>
        </div>
      </div>

      <div>
        <div cols="10">
          <div class="flex justify-between">
            <p class="text-primary-blue font-martel text-4xl">Falências</p>
          </div>

          <p class="vsm:w-66 leading-8">Consulte abaixo o processo de FALÊNCIA de seu interesse.
            <br />Acessando o processo, você poderá obter as principais informações e documentos.
            <br />Caso fique com alguma dúvida, acesse em nosso site "duvidas frequentes"
            <br />Caso tenha algum questionamento adicional, entre em contato conosco. Uma equipe altamente treinada
            atenderá você
          </p>
        </div>
      </div>

      <div>
        <hr class="w-96 bg-primary-blue h-1 my-8 vsm:w-28" />
      </div>
      
      <div class="filtro" cols="10">
        <p class="mb-10">Filtrar por</p>
        <div class="grid grid-cols-3 gap-10 vsm:grid-cols-1">
          <div >
            <v-text-field label="Palavra chave..." class="vsm:w-56" outlined dense rounded hide-details="auto"></v-text-field>
          </div>
          <div>
            <v-select label="Massa falida" class="vsm:w-56" dense outlined rounded></v-select>
          </div>
          <div>
            <v-select rounded label="Comarca" class="vsm:w-56" dense outlined></v-select>
          </div>
        </div>

        <div class="flex gap-10">
          <div class="w-[20.5rem]">
            <v-select label="Responsável" class="" dense rounded outlined></v-select>
          </div>
          <div class="w-56">
            <v-select label="UF" class="" dense rounded outlined></v-select>
          </div>
          <div>
            <ButtonsPrimary :title="'Buscar'" :classExtra="'load h-14'">
            </ButtonsPrimary>
          </div>
        </div>
      </div>

      <section>
        <table class="w-full">
          <thead class="bg-primary-blue p-5 grid grid-cols-3">
            <th class="text-white font-heading text-left">EMPRESA</th>
            <th class="text-white font-heading text-left">SITUAÇÃO</th>
            <th class="text-white font-heading text-left">LITISCONSÓRCIO</th>
          </thead>
          <tbody>
            <tr @click="navigate()" v-for="i in 20" :key="i" class="hover:bg-gray-300 transition duration-200 grid grid-cols-3 border-b-2 border-l-2 border-r-2 border-solid">
              <td class="font-heading my-5 px-5 font-semibold">ALVES E ALVES LTDA</td>
              <td class="font-heading my-5 px-5">Encerrada</td>
              <td class="font-heading my-5 px-5">-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div class="flex justify-center mb-16">
        <ButtonsPrimary :classExtra="'load w-56 h-14'" :title="'Carregar mais'"></ButtonsPrimary>
      </div>
    </section>
  </main>
</template>

<script>
/* eslint-disable */
export default {

  name: 'Report',
  data() {
    return {
      opcao: 1,
      item: {
        name: 'ALVES E ALVES LTDA',
        sit: 'Encerrado',
        calories: "-",
      },
      items: ['Documentos', 'Atas', 'Relatórios', 'Acompanhamento PRJ', 'Liticonsórcio'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
  methods: {
    navigate() {
      this.$router.push('/bankrupcies/report')
    }
  },
};
</script>