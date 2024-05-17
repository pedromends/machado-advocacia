<template>
    <main class="">
        <section class=" h-[40rem] mx-auto py-20 flex flex-col bg-header bg-cover justify-center items-center relative ">
            <div class="mb-52">
                <h1 class="mb-16 w-[72rem] md:px-60 text-center md:text-5xl lg:text-5xl leading-tight text-white tracking-tight">
                    Cadastramento para AGC Virtual e Envio de Documentos
                </h1>
            </div>
        </section>

        <section class="flex justify-center ">
            <div class="w-[80%] h-auto bg-white absolute z-[1] top-[28rem]">
                <h1 class="w-full h-20 bg-primary-blue text-center p-5 text-2xl text-white font-heading font-semibold ">Credor</h1>
                <div class="p-5">
                    <p class="my-5 px-28 text-center">Nosso objetivo é contribuir para um processo judicial rápido e eficaz. Este formulário
                        tem por finalidade o cadastramento e envio de documentos para participação em Assembléia Virtual.</p>
                    <div class="flex">
                        <v-text-field label="Nome do Credor *"  required outlined rounded flat />
                        <v-text-field label="CPF/CNPJ *" required outlined rounded flat />
                    </div>
                    <div class="flex">
                        <v-text-field label="+ Adicionar mais um Credor" required outlined rounded flat />
                        <div></div>
                    </div>
                    <div class="flex">
                        <v-text-field label="Nome do Procurador"  required outlined rounded flat />
                        <v-text-field label="OAB/Documento do Procurador" required outlined rounded flat />
                    </div>
                    <div class="flex">
                        <v-text-field label="E-mail*"  required outlined rounded flat />
                        <v-text-field label="Telefone *" required outlined rounded flat />
                    </div>
                    <div>
                        <v-text-field label="STONE WASH BENEFICIAMENTO TÊXTIL EIRELI"  required outlined rounded flat />
                    </div>
                    <div>
                        <v-text-field label="Mensagem"  required outlined rounded flat />
                    </div>
                    <div fluid>
                        <v-row>
                            <v-col cols="4" sm="6">
                                <v-select label="Selecione o tipo de documento" outlined rounded
                                    style="font-family: 'Nunito Sans'" />

                            </v-col>
                            <v-col cols="12" sm="4">
                                <input type="file" placeholder="Nenhum arquivo selecionado" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="5">
                                <v-text-field label="Adicionar mais um Documento"  required outlined rounded flat />
                            </v-col>
                            <v-col cols="7">
                                <p><b>Atenção!</b> O tamanho máximo de cada anexo enviado não
                                    deve exceder 3MB. Para enviar maiores quantidades, divida os documentos em varios envios.
                                </p>
                            </v-col>
                        </v-row>
                        <v-row cols="12" >
                            <form class="flex flex-col gap-5">
                                <div>
                                    <p><b>Deseja mais um acesso a plataforma como ouvinte (sem direito a fala e voto)?</b></p>
                                    <input type="radio" value="Sim">
                                    <label for="html">Sim</label><br>
                                    <input type="radio" value="Não">
                                    <label> Não</label>
                                </div>
                                
                                <div>
                                    <p><b>Deseja mais um acesso a plataforma como ouvinte (sem direito a fala e voto)?</b></p>
                                    <input type="radio" value="Sim">
                                    <label for="html">Confirmo a autenticidade dos dados e/ou documentos fornecidos.</label><br>
                                    <input type="radio" value="Não">
                                    <label> Confirmo não me enquadrar nas condições previstas no Art. 43, caput, da Lei 11.101/05.</label>
                                </div>

                                <div>
                                    <p><u>O envio de documentos de identificação é obrigatória para credores e representantes</u></p>
                                    <ul class="list-disc ml-4">
                                        <li class="text-sm">Credores representados por mandatário ou representante legal deverão enviar,
                                            obrigatoriamente e, a documentação pertinente à representação;</li>
                                        <li class="text-sm">O e-mail utilizado será vinculado a todos os credores mencionados no cadastro, e através
                                            deste, você receberá login e orientações de ingresso na Assembléia, certifique-se do pleno
                                            acesso ao endereço de e-mail.</li>
                                        <li class="text-sm">O número de telefone cadastrado será utilizado para contato durante a solenidade em caso de
                                            inconsistências em seu acesso e/ou plataforma.</li>
                                    </ul>
                                </div>

                                <div class="flex justify-between">
                                    <h1>Captcha</h1>
                                    <ButtonsPrimary :classExtra="'load up h-14'" :title="'Enviar'">
                                    </ButtonsPrimary>
                                </div>
                            </form>
                        </v-row>
                    </div>


                </div>
            </div>

        </section>

        <section class="w-full h-[30rem] bg-primary-blue z-0 relative"></section>

        <section class="w-full h-[35rem] bg-white z-0 relative"></section>
    </main>
</template>