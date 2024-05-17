<template>
  <main>
    <section class="mt-12">
      <div cols="1" />
      <div cols="7" class="flex">
        <p class="flex items-center">
          <img src="/images/icons/house-icon.png" class="w-5 mr-3 " alt="#" />
          > Falências > ALVES E ALVES LTDA
        </p>
      </div>
    </section>
    <section>
      <div cols="1" />
      <div cols="4">
        <img src="/images/icons/artecola-icon.png" alt="#" />
      </div>
      <div cols="6" class="flex gap-10">
                <v-text-field type="text" placeholder="Login" rounded bg-color="white"/>
                <v-text-field type="text" placeholder="Senha" rounded bg-color="white"/>
                <button class="load less">Entrar</button>
            </div>
    </section>
    <hr />
    <section>
      <div cols="1" />
      <div>
        <p class="text-primary-blue font-martel text-4xl">ALVES E ALVES LTDA</p>
      </div>
    </section>
    <section class="conteudo">
      <div cols="1" />
      <div cols="10">
        <p><b>Processo:</b> 5000758-74.2020.8.21.0019</p><br />
        <p><b>Administrador Judicial:</b> MEDEIROS & MEDEIROS</p><br />
        <p><b>Colaborador Responsável:</b> Yasmine Lemes Said</p><br />
        <p><b>Colaborador Contábil: </b>Júlia Grein</p><br />
        <p><b>Diretor Responsável:</b> Laurence Medeiros</p><br />
        <p><b>Pedido:</b> 05/02/2018 <b>Deferimento RJ: </b>07/02/2018 </p><br />
        <p><b>Vara:</b> VARA DE FALÊNCIAS E CONCORDATAS - NOVO HAMBURGO / RS</p><br /><br />
        <p><b>Informações do Administrador Judicial:</b></p><br />
        <p>PROCESSO DISTRIBUÍDO NO E-PROC SOB Nº 5000758-74.2020.8.21.0019. </p><br />
        <p>O pedido de Recuperação Judicial foi ajuizado em 05/02/2018, com processamento deferido em 07/02/2018.</p>
        <br />
        <p>O edital do art. 52, §1º e aviso do art. 7º, §1º, da Lei 11.101/2005 foi publicado em 28/02/2018. Entretanto,
          considerando a publicação incompleta do comunicado, o edital foi republicado em 16/03/2018, reabrindo
          novamente o prazo de 15 (quinze) dias aos credores para, querendo, apresentarem ao Administrador Judicial suas
          habilitações ou divergências quanto aos créditos relacionados.</p><br />
        <p>O Plano de Recuperação Judicial foi apresentado nos autos no prazo legal.</p><br />
        <p>Finalizada a fase de verificação de créditos, o aviso do art. 53, parágrafo único, da Lei 11.101/2005 foi
          publicado em 15/05/2018, conferindo o prazo de 30 (trinta) dias para oferecimento de objeções ao plano. </p>
        <br />
        <p>O edital do art. 7º, §2º foi publicado em 09/07/2018, fixando prazo de 10 (dez) dias para oferecimento de
          impugnação à relação de créditos apresentada, com encerramento no dia 19/07/2018, o que deu ensejo a fase
          judicial do processo.</p><br />
        <p>Diante das objeções apresentadas contra o plano de recuperação judicial, o juiz convocou Assembleia Geral de
          Credores para, 04/10/2018 (1ª convocação), e 11/10/2018 (2ª convocação).</p><br />
        <p>Instalada em 2ª convocação, a Assembleia Geral de Credores teve seu curso suspenso por 8 (oito) vezes, nos
          dias: 11/10/2018, 26/11/2018, 28/01/2019, 12/03/2019, 11/04/2019, 02/05/2019, 01/07/2019 e 26/08/2019, cujos
          trabalhos foram retomados no dia 27/09/2019 para votação do Plano.</p><br />
        <p>No 1º momento, foi oportunizada a votação da consolidação substancial do plano de recuperação judicial, pela
          maioria dos créditos presentes por empresa, que resultou no interesse de votar o plano único; No 2º momento,
          atendendo o interesse da maioria, foi posto em votação o plano único, que restou aprovado pelo credores.</p>
        <br />
        <p>No dia 02/10/2019, foi proferida a decisão de concessão da recuperação judicial e, consequente, homologação
          do plano ao Grupo Artecola, que deu início à fase de cumprimento dos termos pactuados. </p><br />
        <p>Assim, após proceder com a adequada leitura do Plano, deverão os credores, fornecer os dados bancários às
          recuperandas para oportuna transferência de valores. Segue o e-mail indicado nos autos do processo:
          financeiro.rj@artecola.com.br</p><br />
        <p>No Evento 1622 do processo, o Grupo Artecola requereu o encerramento da recuperação judicial, com fundamento
          nas alterações promovidas no art. 61 da Lei 14.112/2020, que analisado pelo juízo no Evento 1625, conferiu
          vista para a Administração Judicial apresentar o Relatório Circunstanciado previsto no art. 63, inciso III, da
          Lei 11.101/05, que foi protocolado no dia 31/03/2022 - evento 2031.</p><br />
        <p>No evento 2026, foi disponibilizado novo Edital de Oferta Pública, para realização de leilão de bens de
          propriedade do Grupo Artecola, garantidos ao Banrisul S/A e Pentágono S/A, no dia 29/04/2022.</p><br />
      </div>
    </section>
    <section>
      <div cols="1" />
      <div cols="10">
        <v-card>
        <v-tabs v-model="tab" bg-color="#8CA4D3" centered>
          <v-tab v-for="(item, i) in items" :key="i" :value="'tab-' + i">
            <p>{{ item }}</p>
          </v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item v-for="(ctt, i) in text" :key="i" :value="'tab-' + i">
            <v-card>
              <v-card-text v-for="(text, j) in ctt" :key="j" :value="'tab-' + i"
                class="flex justify-between hover:bg-gray-300">
                <p>{{ text }}</p>
                <button class="text-primary-blue font-heading">Fazer Download</button>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-card>
      </div>
      <div cols="1" />
    </section>
  </main>
</template>
    
<script>
/* eslint-disable */
export default {

  name: 'FalenciasPage',
  data() {
    return {
      opcao: 1,
      tab: null,
      item:
      {
        name: 'ALVES E ALVES LTDA',
        sit: 'Encerrado',
        calories: "-",
      },
      items: [
        'Documentos', 'Atas', 'Relatórios', 'Acompanhamento PRJ', 'Litisconsórcio'
      ],
      text: [
        [
          '01 - Sentença que decreta a falência.pdf',
          '02 - Edital de Falência.pdf',
          '03 - Quadro geral de credores',
          '04 - Sentença de encerramento'
        ], [
          '01 - Texto.pdf',
          '02 - Texto.pdf',
          '03 - Texto.pdf',
          '04 - Texto.pdf'
        ], [
          '01 - Texto 2.pdf',
          '02 - Texto 2.pdf',
          '03 - Texto 2.pdf',
          '04 - Texto 2.pdf'
        ],[
          '01 - Texto 3.pdf',
          '02 - Texto 3.pdf',
          '03 - Texto 3.pdf',
          '04 - Texto 3.pdf'
        ],[
          '01 - Texto 4.pdf',
          '02 - Texto 4.pdf',
          '03 - Texto 4.pdf',
          '04 - Texto 4.pdf'
        ]
      ]
    };
  },
  methods: {

  },
};
</script>

<style>
.v-tab.v-tab {
  height: 40px;
  display: flex;
  align-items: center;
}

.v-slide-group__content {
  gap: 20px;
}

.v-btn .v-btn__content p {
  color: white !important;
}

.v-slide-group-item--active .v-btn__content p {
  color: #8CA4D3 !important;
}

.v-slide-group-item--active {
  background-color: white;
  color: #8CA4D3 !important;
  border-radius: 60px;
  height: 12px;
}
</style>