<template>
    <main class="p-20">
        <section>
            <p class="flex items-center gap-5 vsm:flex-col">
                <img src="/images/icons/house-icon.png" alt="#" class="w-8" />> Blog > On the other hand, we denounce
                with righteous indignation and dislike men who
            </p>
            <div class="mb-10">
                <h1 class="text-5xl vsm:text-base">On the other hand, we denounce with righteous indignation and dislike men who</h1>
                <div class="flex gap-10 my-5">
                    <p class="text-primary-blue">Machado Corrêa</p>
                    <span>22 de Maio de 2022 às 13h48</span>
                </div>
                
                <img class="mb-7 w-[89%]" src="/images/background/bg-home-4.png" />
                <p class="text-gray-500 mb-10 text-sm">On the other hand, we denounce with righteous indignation and dislike men who
                    are so beguiled and demoralized by the charms of pleasure of the moment.
                </p>
                <p class="leading-8 w-[89%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                    ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse. Ridiculus mus mauris
                    vitae
                    ultricies leo integer malesuada nunc. Elit eget gravida cum sociis natoque penatibus et magnis.
                    Elementum
                    nibh tellus molestie nunc non blandit. Rhoncus est pellentesque elit ullamcorper. Neque viverra justo
                    nec
                    ultrices dui sapien eget mi proin. Tellus id interdum velit laoreet id donec. At in tellus integer
                    feugiat
                    scelerisque varius morbi. Nibh nisl condimentum id venenatis a condimentum vitae. Porttitor massa id
                    neque
                    aliquam vestibulum. Turpis massa sed elementum tempus egestas sed sed. Et molestie ac feugiat sed
                    lectus.
                    Condimentum vitae sapien pellentesque habitant morbi. Egestas diam in arcu cursus euismod quis viverra
                    nibh.
                    Neque laoreet suspendisse interdum consectetur. Augue neque gravida in fermentum et sollicitudin ac.
                    Risus
                    viverra adipiscing at in tellus.
                    <br /><br />
                    Urna id volutpat lacus laoreet. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Tortor
                    at
                    auctor urna nunc id cursus metus. Est ultricies integer quis auctor elit sed. Adipiscing commodo elit at
                    imperdiet dui accumsan. Tristique nulla aliquet enim tortor at. Viverra tellus in hac habitasse platea
                    dictumst. Augue lacus viverra vitae congue eu. Gravida neque convallis a cras semper. Varius quam
                    quisque id
                    diam vel quam elementum pulvinar etiam. Id nibh tortor id aliquet lectus proin nibh.<br /><br />
                    Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Sagittis orci a scelerisque purus
                    semper
                    eget duis at tellus. Faucibus vitae aliquet nec ullamcorper sit. Ultricies lacus sed turpis tincidunt id
                    aliquet risus. Facilisis gravida neque convallis a cras semper auctor neque. Tortor condimentum lacinia
                    quis
                    vel. Ac feugiat sed lectus vestibulum. Diam donec adipiscing tristique risus nec feugiat in. Eget magna
                    fermentum iaculis eu non diam. Elit pellentesque habitant morbi tristique. Non curabitur gravida arcu ac
                    tortor dignissim convallis aenean et. Elementum sagittis vitae et leo duis ut diam. Facilisi morbi
                    tempus
                    iaculis urna id volutpat lacus laoreet non. A pellentesque sit amet porttitor eget dolor morbi
                </p>
            </div>

            <div class="flex flex-col gap-5">
                <h1 class="text-4xl text-primary-blue">At vero eos et accusamus</h1>
                <p class="mb-10 border-solid border-l-2 pl-10 border-primary-blue leading-8 w-[75%]">
                    “At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecatit”.
                </p>
            </div>
            <p class="leading-8 mb-10 w-[89%]">But I must explain to you how all this mistaken idea of denouncing pleasure and
                praising
                pain was born and I will give you a complete account of the system, and expound the actual teachings of the
                great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids
                pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires
                to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and
                pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious
                physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man
                who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no
                resultant pleasure
            </p>

            <li class="text-2xl font-semibold text-primary-blue mb-10">Sed ut perspiciatis unde omnis iste natus error sit
            </li>
            <img class="w-[89%] mb-10" src="/images/background/bg-home-5.png" />
            <p class="text-gray-500 mb-10 text-sm">On the other hand, we denounce with righteous indignation and dislike men who
                are so beguiled and demoralized by the charms of pleasure of the moment.
            </p>
            <p class="flex gap-5 vsm:flex-col">Tags: <span class="text-primary-blue">#direito</span>
                <span class="text-primary-blue">#civil</span>
                <span class="text-primary-blue">#covid19</span>
                <span class="text-primary-blue">#pandemia</span>
            </p>
        </section>
        <section class="mt-10 w-[89%]">
            <span>Relacionados</span>
            <h1 class="text-4xl text-primary-blue">Você também vai gostar</h1>
            <div class="h-auto w-auto bg-white grid grid-cols-3 gap-2 vsm:grid-cols-1">
                <CardPost :title="'Explain to you how all this mistaken idea of denouncing hand denounce of us.'"
                    :subtitle="'Lorem Ipsum | 19/04/2022'"
                    :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
                    image="/images/posts/post1.jpg">
                </CardPost>

                <CardPost :title="'But i must explain to you how mistaken ideia of denouncing pleasure of all.'"
                    :subtitle="'Lorem Ipsum | 19/04/2022'"
                    :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
                    image="/images/posts/post2.jpg">
                </CardPost>

                <CardPost :title="'But i must explain to you how mistaken ideia of denouncing pleasure of all.'"
                    :subtitle="'Lorem Ipsum | 19/04/2022'"
                    :description="'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment'"
                    image="/images/posts/post2.jpg">
                </CardPost>
            </div>
        </section>
    </main>
</template>


<script>

export default {

    name: 'FalenciasPage',
    data() {
        return {
            opcao: 1,
        };
    },
    components: {
    },
    methods: {

    },
};
</script>    