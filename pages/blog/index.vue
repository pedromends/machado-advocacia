<template>
  <div class="">
    <section class=" h-[40rem] mx-auto py-20 flex flex-col bg-header bg-cover justify-center items-center relative ">
      <div class="mb-52">
        <h1 class="mb-16 text-3xl md:px-60 text-center md:text-5xl lg:text-5xl leading-tight text-white tracking-tight">
          Blog da Machado Corrêa
        </h1>
        <p class="text-lg md:px-72 text-center md:text-base text-light-gray vsm:w-72">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem<br />
          accusantium doloremque laudantium, totam rem aperiam
        </p>
      </div>
    </section>

    <section class="flex justify-center">
      <div class="w-auto h-auto bg-white absolute z-[1] top-[28rem] p-5 gap-5 grid grid-cols-3 rounded-lg vsm:grid-cols-1 vsm:p-0 vsm:w-[50%]">
        <NuxtLink to="/blog/article">
          <CardPost :title="'Explain to you how all this mistaken idea of denouncing hand denounce of us.'"
            :subtitle="'Lorem Ipsum | 19/04/2022'"
            :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
            image="images/posts/post1.jpg">
          </CardPost>
        </NuxtLink>

        <NuxtLink to="/blog/article">
          <CardPost :title="'But i must explain to you how mistaken ideia of denouncing pleasure of all.'"
            :subtitle="'Lorem Ipsum | 19/04/2022'"
            :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
            image="images/posts/post2.jpg">
          </CardPost>
        </NuxtLink>

        <NuxtLink to="/blog/article">
          <CardPost :title="'But i must explain to you how mistaken ideia of denouncing pleasure of all.'"
            :subtitle="'Lorem Ipsum | 19/04/2022'"
            :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
            image="images/posts/post2.jpg">
          </CardPost>
        </NuxtLink>

        <NuxtLink to="/blog/article">
          <CardPost :title="'Explain to you how all this mistaken idea of denouncing hand denounce of us.'"
            :subtitle="'Lorem Ipsum | 19/04/2022'"
            :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
            image="images/posts/post1.jpg">
          </CardPost>
        </NuxtLink>

        <NuxtLink to="/blog/article">
          <CardPost :title="'But i must explain to you how mistaken ideia of denouncing pleasure of all.'"
            :subtitle="'Lorem Ipsum | 19/04/2022'"
            :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
            image="images/posts/post2.jpg">
          </CardPost>
        </NuxtLink>

        <NuxtLink to="/blog/article">
          <CardPost :title="'But i must explain to you how mistaken ideia of denouncing pleasure of all.'"
            :subtitle="'Lorem Ipsum | 19/04/2022'"
            :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
            image="images/posts/post2.jpg">
          </CardPost>
        </NuxtLink>

        <NuxtLink to="/blog/article">
          <CardPost :title="'Explain to you how all this mistaken idea of denouncing hand denounce of us.'"
            :subtitle="'Lorem Ipsum | 19/04/2022'"
            :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
            image="images/posts/post1.jpg">
          </CardPost>
        </NuxtLink>

        <NuxtLink to="/blog/article">
          <CardPost :title="'But i must explain to you how mistaken ideia of denouncing pleasure of all.'"
            :subtitle="'Lorem Ipsum | 19/04/2022'"
            :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
            image="images/posts/post2.jpg">
          </CardPost>
        </NuxtLink>

        <NuxtLink to="/blog/article">
          <CardPost :title="'But i must explain to you how mistaken ideia of denouncing pleasure of all.'"
            :subtitle="'Lorem Ipsum | 19/04/2022'"
            :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
            image="images/posts/post2.jpg">
          </CardPost>
        </NuxtLink>
        <div></div>
        <ButtonsPrimary :classExtra="'load h-14'" :title="'Carregar mais'"></ButtonsPrimary>
        <div></div>
      </div>
    </section>

    <section class="w-full h-[60rem] bg-primary-blue z-0 relative"></section>

    <section class="w-full h-[40rem] bg-white z-0 relative vsm:h-[260rem]">
      <div class="flex justify-center w-full bottom-1">
        
      </div>
    </section>
  </div>
</template>