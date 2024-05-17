<template>
    <main class="px-32">
        <section class="mt-12">
            <div class="flex">
                <p class="flex items-center">
                    <img src="images/icons/house-icon.png" class="w-5 mr-3 " alt="#" />
                    > Assembléia de Credores
                </p>
            </div>
        </section>

        <section>
            <div>
                <div class="flex justify-between vsm:flex-col">
                    <p class="text-primary-blue font-martel text-4xl">Assembléia Geral de Credores</p>
                    <ButtonsPrimary :title="'Manuais e Vídeos de Instruções'"
                        :classExtra="'w-96 h-12 flex items-center justify-center border-2 border-primary-blue text-primary-blue text-sm hover:text-white hover:bg-primary-blue transition duration-200'">
                    </ButtonsPrimary>
                </div>

                <p class="w-[42rem] vsm:w-80 vsm:mt-10">Consulte abaixo o processo de RECUPERAÇÃO JUDICIAL de seu interesse. Acessando o
                    processo, você poderá obter as principais informações sobre a assembleia geral de credores, modalidade
                    online ou presencial, envio de documentos e cadastramento na solenidade.<br /><br />
                    Caso tenha algum questionamento adicional, entre em contato com a equipe da<br /> Administração
                    Judicial.
                </p>
            </div>
        </section>

        <hr class="w-52 bg-primary-blue h-1 my-8" />

        <section>
            <div>
                <button class="font-martel text-2xl">Próximas Assembléias</button>
            </div>
        </section>

        <section>
            <div>
                <v-expansion-panels color="red">
                    <v-expansion-panel v-for="(i) in 2" :key="i" class="my-3">
                        <v-expansion-panel-title>
                            <div class="flex w-full justify-between items-center h-16 vsm:flex-col vsm:gap-16">
                                <p class="ml-12 vsm:mt-3 vsm:text-sm">26/04/2022 10:00 - <b>STONE WASH BENEFICIAMENTO TÊXTIL EIRELI</b></p>
                                <ButtonsPrimary :title="'AGC Online'"
                                    :classExtra="'w-96 h-12 flex items-center justify-center border-2 border-primary-blue text-primary-blue text-sm transition duration-200 vsm:hidden'">
                                </ButtonsPrimary>
                                <div class="bg-primary-blue rounded-full w-10 h-10 flex justify-center items-center vsm:hidden">
                                    <img src="/images/icons/arrow_down_icon.svg" alt="#" />
                                </div>
                            </div>
                        </v-expansion-panel-title>

                        <v-expansion-panel-text>
                            <section class="flex justify-center mb-10 vsm:flex-col">
                                <div>
                                    <p class="vsm:w-72"><b>Empresa:</b> STONE WASH BENEFICIAMENTO TÊXTIL EIRELI</p>
                                    <p class="vsm:w-72"><b>Processo CNJ:</b> 5001082-63.2021.8.24.0078</p>
                                </div>
                                <div>
                                    <p class="vsm:w-44">17/03/2022 10:00 - 1ª CONVOCAÇÃO</p>
                                    <p class="vsm:w-44">24/03/2022 10:00 - 2ª CONVOCAÇÃO</p>
                                    <p class="vsm:w-44"><b>26/04/2022 10:00 - CONTINUAÇÃO</b></p>
                                </div>
                            </section>

                            <div class="w-[88%] mx-auto">
                                <p>Para participar da assembleia geral, os credores deverão estar cientes da
                                    imprescindibilidade de realizar <b> CADASTRAMENTO PRÉVIO, no prazo legal de 24
                                        (vinte e quatro) horas úteis anteriores à Assembleia</b>,
                                    mediante envio de documento pessoal e/ou contrato social para aferição da
                                    legitimidade ao voto do credor, ou do documento que comprove os poderes de
                                    representação, em caso de mandatário ou representante legal do credor, nos termos do
                                    art. 37, §4º, da Lei 11.101/2005,
                                    devendo a medida ser efetivada através deste site, por meio do link
                                    abaixo.<br /><br />
                                    Os credores que não realizarem cadastramento prévio poderão acompanhar a assembleia
                                    geral por meio da transmissão ao vivo, a ser realizada pela Administração Judicial
                                    no youtube. Clique aqui para acesso ao canal do Youtube.<br /><br />
                                    <b>ATENÇÃO: O link de acesso à assembleia geral de credores é enviado aos credores
                                        devidamente cadastrados até as 23:59 do dia anterior à solenidade.<br /><br />
                                        NO DIA DA ASSEMBLEIA, o CREDENCIAMENTO dos credores previamente cadastrados terá
                                        INÍCIO às 09h00min e ENCERRARÁ no horário previsto para início da solenidade
                                        (10h00min).</b><br /><br />
                                    LEIA O MATERIAL DE INSTRUÇÃO DISPONIBILIZADO ACIMA.<br /><br />
                                    Credores que tenham interesse no acesso à Assembleia Virtual por celular/smartphone
                                    deverão realizar o download do aplicativo ClickMeeting, em seu dispositivo móvel
                                    (celular), para acesso a todas as funcionalidades da plataforma. O ingresso pelo
                                    navegador não dá acesso às mesmas configurações e funcionalidades. <b>UTILIZE O
                                        APLICATIVO</b>.<br /><br />
                                    Em caso de dúvidas sobre a plataforma, favor contatar o nosso suporte por mensagem
                                    pelo WhatsApp: (51) 99871-1170.<br /><br />
                                    A 1ª convocação da assembleia geral de credores não restou instalada em razão da
                                    ausência de quórum. Para acesso à transmissão da 1ª convocação (17/03/2022): clique
                                    aqui.<br /><br />
                                    Instalada em 2º convocação (24/03/2022), foi aprovado pela maioria dos credores
                                    presentes a suspensão da solenidade, com retomada no dia 26/04/2022. Para acesso à
                                    gravação da 2ª convocação (24/03/2022): clique aqui
                                </p>
                                <hr class="h-1 bg-primary-blue rounded-full my-10"/>
                                <NuxtLink class="form" to="creditorsmeeting/register">
                                   Cadastramento para AGC Virtual e Envio de Documentos
                                </NuxtLink>
                                <ul class="flex flex-col gap-5 mt-20">
                                    <li><b><u>- O envio de documento de identificação é obrigatório para credores e
                                        representantes.</u></b></li>
                                    <li>- Credores representados por mandatário ou representante legal deverão enviar,
                                        obrigatoriamente, a documentação pertinente à representação</li>
                                    <li>- O e-mail utilizado será vinculado a todos os credores mencionados no cadastro
                                        e, através deste, você receberá login e orientações de ingresso na Assembleia,
                                        certifique-se do pleno acesso ao endereço de e-mail</li>
                                    <li>- O número de telefone cadastrado será utilizado para contato durante a
                                        solenidade em caso de inconsistências em seu acesso e/ou plataforma</li>
                                    <li>- O prazo para cadastramento nesta AGC encerra em 17/05/2022 10:00</li>
                                </ul>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
            <section class="flex justify-center mb-16">
                <ButtonsPrimary :classExtra="'load h-14'"
                :title="'Carregar mais'"></ButtonsPrimary>
            </section>
        </section>
    </main>
</template>

<style>

.form{
    background-color: #8CA4D3;
    padding: 10px;
    color:white;
    transition: 0.2s ease-in;
    border-radius: 30px;
    padding-left:20px;
    padding-right:20px;
}

.form:hover{
    color:#8CA4D3;
    background-color: white;
    border:solid;
    border-width: 1px;
}

.v-expansion-panel__shadow{
    box-shadow: none !important;
}

.v-expansion-panel-text{
    box-shadow: 1px 1px 1px 1px lightgray;
    border-radius:12px
}

.v-expansion-panel-title{
    border-color: #8CA4D3;
    border-width: 1px;
    border-style: solid;
    border-radius: 50px;
    transition: 0.3s ease-in;
}
.v-expansion-panel-title--active{
    background-color: #8CA4D3;
    color:white;
}
</style>