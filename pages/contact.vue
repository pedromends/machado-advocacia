<template>
    <main class="">
        <section class="px-32 vsm:p-5">
            <div class="mt-12">
                <div  class="flex">
                    <p class="flex items-center">
                        <img src="images/icons/house-icon.png" class="w-5 mr-3 " alt="#" />
                        > Contato
                    </p>
                </div>
            </div>

            <div>
                <div class="flex justify-between">
                    <p class="text-primary-blue font-martel text-4xl mb-5">Fale Conosco</p>
                </div>
            </div>

            <div class="grid grid-cols-2 border-solid border-2 rounded-lg vsm:grid-cols-1">
                <form class="flex justify-center flex-col p-10">
                    <v-text-field label="Seu nome" required outlined rounded bg-color="white"/>
                    <v-text-field required label="Seu E-mail" outlined rounded bg-color="white" />
                    <v-text-field required label="Seu telefone ou Whatsapp" outlined rounded bg-color="white" />
                    <v-text-field required label="No que podemos lhe ajudar ?" class="h-66" outlined bg-color="white" height="200" />
                    <ButtonsPrimary :title="'Enviar'" :classExtra="'load h-11 up'"></ButtonsPrimary>
                </form>
                <div class="p-10 vsm:p-0">
                    <div class="">
                        <iframe id="gmap_canvas" class="flex justify-center w-[31rem] h-[32rem] vsm:w-[20.8rem] vsm:h-72 vsm:mr-0"
                            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
                    </div>
                </div>
            </div>
        </section>

        <section class="h-96 bg-primary-blue w-full mt-32 p-5 grid grid-cols-3 vsm:grid-cols-1 vsm:h-auto vsm:gap-20">
            <div class="flex justify-center flex-col text-center">
                <img class="w-10 h-10 flex justify-center self-center mb-5" src="images/icons/map-whiteicon.png" alt="" />
                <h1 class="text-white font-heading text-3xl mb-3 font-semibold">Endereço</h1>
                <p class="text-white font-heading text-md font-semibold">Rua São Geraldo, n. 489<br />
                    Bairro Ermo - Guaíba, RS</p>
            </div>
            <div class="flex justify-center flex-col text-center">
                <h1 class="text-white font-heading mb-5 text-3xl font-semibold">Nos Acompanhe</h1>
                <div class="flex justify-center gap-10">
                    <img class="w-10 h-10" src="images/icons/linkedin-whiteicon.png" alt="" />
                    <img class="w-10 h-10" src="images/icons/fb-whiteicon.png" alt="" />
                    <img class="w-10 h-10" src="images/icons/insta-icon.png" alt="" />
                </div>
            </div>
            <div class="flex justify-center flex-col text-center">
                <img class="w-10 h-10 flex justify-center self-center mb-5" src="images/icons/cellphone-whiteicon.png" alt="" />
                <h1 class="text-white font-heading text-3xl mb-3 font-semibold">Telefone</h1>
                <p class="text-white font-heading text-md font-semibold">+55 (51) 9.8484-4690</p>
            </div>
        </section>
    </main>
</template>

<style>
    .up{
        width: 100% !important;
    }

    .load{
        background-color:#8CA4D3;
        border-radius: 55px;
        color: white;
        transition: 0.2s ease;
        border-width: 2px;
    }

    .load:hover{  
        border-style: solid;
        border-color: #8CA4D3;
        background-color:white;
        color:#8CA4D3;
    }
</style>