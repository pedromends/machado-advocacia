<template>
    <main>
        <v-row class="mt-12">
            <v-col cols="1" />
            <v-col cols="7" class="flex">
                <p class="flex items-center">
                    <img src="/images/icons/house-icon.png" class="w-5 mr-3 " alt="#" />
                    > Falências > ALVES E ALVES LTDA
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="1" />
            <v-col cols="4">
                <img src="/images/icons/artecola-icon.png" alt="#" />
            </v-col>
            <v-col cols="6" class="flex gap-10">
                <v-text-field type="text" placeholder="Login" rounded bg-color="white"/>
                <v-text-field type="text" placeholder="Senha" rounded bg-color="white"/>
                <button class="load less">Entrar</button>
            </v-col>
        </v-row>
        <v-row class="mb-10">
            <v-col cols="1" />
            <v-col class="flex flex-col gap-5" cols="10">
                <p class="text-primary-blue font-martel text-4xl">ALVES E ALVES LTDA</p>
                <hr class="w-48 bg-primary-blue h-1" />
                <div>
                    <p><b>Processo:</b> 023/1.04.0013102-9 / 0131021-35.2004.8.21.0023</p><br />
                    <p><b>Administrador Judicial:</b> LAURENCE BICA MEDEIROS</p><br />
                    <p><b>Colaborador Responsável:</b> Amanda Eitelvein</p><br />
                    <p><b>Pedido:</b> 06/06/1999 <b>Encerramento:</b> 16/11/2017 <b> Decretação de falência:</b>
                        22/03/2000
                    </p><br />
                    <p>Vara: 2ª VARA CÍVEL - RIO GRANDE / RS</p><br /><br />
                    <p><b>ENCERRADA</b></p><br /><br />
                    <p><b>Informações do Administrador Judicial:</b></p><br />
                    <p>A falência foi decretada em 22.03.2000, com edital publicado na mesma data. </p><br />
                    <p>O Quadro Geral de Credores, atualizado, foi apresentado em 2012.</p><br />
                    <p>Embora tenham havido diversas diligências, não foram localizados bens em nome da Massa, o que
                        levou
                        ao encerramento do processo falimentar, eis que totalmente negativa a falência, conforme
                        sentença
                        data de 16.11.2017.
                    </p><br />
                    <v-card>
                        <v-tabs v-model="tab" bg-color="#8CA4D3" centered>
                            <v-tab v-for="(item, i) in items" :key="i" :value="'tab-' + i">
                                <p>{{ item }}</p>
                            </v-tab>
                        </v-tabs>

                        <v-window v-model="tab">
                            <v-window-item v-for="(ctt,i) in text" :key="i" :value="'tab-' + i">
                                <v-card>
                                    <v-card-text v-for="(text,j) in ctt" :key="j" :value="'tab-' + i" class="flex justify-between hover:bg-gray-300">
                                        <p>{{ text }}</p>
                                        <button class="text-primary-blue font-heading">Fazer Download</button>
                                    </v-card-text>
                                </v-card>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="1" />
        </v-row>
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
                'Documentos', 'Atas', 'Relatórios',
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
                ]
            ]
        };
    },
    methods: {

    },
};
</script>

<style>
.v-tab.v-tab{
    height:40px;
    display: flex;
    align-items: center;
}

.v-slide-group__content{
    gap:20px;
}

.v-btn .v-btn__content p{
    color: white !important;
}

.v-slide-group-item--active .v-btn__content p{
    color: #8CA4D3 !important;
}

.v-slide-group-item--active{
    background-color: white;
    color:#8CA4D3 !important;
    border-radius: 60px;
    height: 12px;
}

.less{
    height: 60px;
}
</style>