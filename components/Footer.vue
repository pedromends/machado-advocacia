<template>
    <section class="bg-primary-black">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap pt-24 pb-12 -mx-4">
          <div class="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0 vsm:text-center">
            <a class="inline-block mb-4" href="#">
              <img src="/images/logo_name.svg" alt="">
            </a>
          </div>
          <div class="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0 vsm:text-center">
            <h3 class="mb-5 text-lg font-bold text-primary-blue font-heading">Menu</h3>
            <ul>
              <li class="mb-4">
                <a class="inline-block text-light-gray hover:text-primary-blue font-medium" href="#">Home</a>
              </li>
              <li class="mb-4">
                <NuxtLink href="/about" class="inline-block text-light-gray hover:text-primary-blue font-medium">Quem somos</NuxtLink>
              </li>
              <!-- <li class="mb-4"><a class="inline-block text-light-gray hover:text-primary-blue font-medium" href="#">Blog</a></li> -->
              <li class="mb-4">
                <a class="inline-block text-light-gray hover:text-primary-blue font-medium" href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0 vsm:text-center">
            <h3 class="mb-5 text-lg font-bold text-primary-blue font-heading">Institucional</h3>
            <ul>
              <li class="mb-4"><a class="inline-block text-light-gray hover:text-primary-blue font-medium" href="#">Assembléia de Credores</a></li>
              <li class="mb-4"><a class="inline-block text-light-gray hover:text-primary-blue font-medium" href="#">Falências</a></li>
              <li class="mb-4"><a class="inline-block text-light-gray hover:text-primary-blue font-medium" href="#">Recuperações Judicíais</a></li>
            </ul>
          </div>
          <div class="w-full md:w-1/3 lg:w-4/12 px-4">
            <h3 class="mb-5 text-lg font-bold text-primary-blue font-heading">Fique por dentro</h3>
            <div class="flex flex-col px-10">
              <div class="w-full lg:flex-1 flex rounded-11xl items-center bg-white">
                <input class="w-[90%] ml-4 text-coolGray-900 outline-none font-heading placeholder-coolGray-500 border-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg shadow-xsm "
                placeholder="Seu melhor email" data-twofas-input-listener="true">
                <ButtonsPrimary :classExtra="'load w-56 h-12'"
                :title="'Inscreva-se'"></ButtonsPrimary>
              </div>
              <div class="flex justify-left mt-7">
                <a href="#" class="text-white link">Termos de Uso |</a>
                <a href="#" class="text-white ml-2 link">Políticas de Privacidade</a>
              </div>
            
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center vsm:flex-col">
          <p class="py-10 md:pb-16 text-white font-medium text-start">© 2023 Machado Corrêa Advocacia - Todos os direitos reservados</p>
          <div class="flex gap-5">
            <img class="w-10 h-10" src="/images/icons/linkedin-icon.png" alt="#"/>
            <img class="w-10 h-10" src="/images/icons/fb-icon.png" alt="#"/>
            <img class="w-10 h-10" src="/images/icons/instagram-icon.png" alt="#"/>
          </div>
        </div>
      </div>
  </section>
</template>

<style>
@media (max-width: 640px ){
.load {
    width: 5rem !important;
}
}

.load{
  width: 10rem;
}
</style>

