<template>
	<main>
		<section class="bg-header bg-cover">
			<div class="container md:px-40 mx-auto py-20 md:py-28 flex flex-col justify-center items-center">
				<h1 class="mb-16 text-3xl text-center leading-tight text-white tracking-tight">
					<div>
						<p class="text-3xl text-center lg:text-5xl font-martel leading-tight text-white tracking-tight">
							Somos um
							<span class="font-martel text-primary-blue">escritório</span>
						</p>
						<p class="text-3xl text-center lg:text-5xl font-martel leading-tight text-white tracking-tight">
							<span class="font-martel text-primary-blue">especializado</span>
							em
						</p>
						<p class="text-3xl text-center lg:text-5xl font-martel leading-tight text-white tracking-tight">
							Administração de Passivos
						</p>
					</div>
				</h1>
				<p class="mb-10 w-[75rem] text-lg md:px-72 text-center md:text-xl text-light-gray vsm:w-48">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam.
				</p>
				<ButtonsPrimary :classExtra="'text-white px-10 py-4 transition duration-200 border-2 hover:bg-primary-blue'"
					:title="'Entrar em contato'"></ButtonsPrimary>
			</div>
		</section>

		<section>
			<div class="flex flex-wrap py-8 justify-center items-center w-10/12 relative -top-12 bg-white mx-auto border rounded-2xl border-light-gray shadow-3xl">
				<div class="flex flex-wrap justify-center gap-8 items-start max-sm:divide-y md:divide-x">
					<div class="">
						<CardSpecialtySmall class="text-dark-gray" image="images/icons/assembleia_icon.svg"
							title="Assembléia de Credores"></CardSpecialtySmall>
					</div>
					<div class="">
						<CardSpecialtySmall class="text-dark-gray" image="images/icons/falencias_icon.svg"
							title="Falências">
						</CardSpecialtySmall>
					</div>
					<div class="">
						<CardSpecialtySmall class="text-dark-gray" image="images/icons/recuperacoes_icon.svg"
							title="Recuperações Judiciais"></CardSpecialtySmall>
					</div>
				</div>
			</div>
		</section>

		<section ref="forWho" class="mx-auto bg-white bg-no-repeat bg-right-bottom flex">
			<div class="w-full pl-32 vsm:pl-10">
				<div class="container text-start">
					<p class="text-base text-middle-gray font-medium">Sobre nós</p>
					<h1 class="text-primary-blue mb-4 md:w-72 text-3xl md:text-4xl leading-tight">
						Bem-vindo à Machado Corrêa Advocacia
					</h1>
					<p class="text-lg md:text-lg mb-8 text-coolGray-500 font-medium w-96 vsm:w-56">
						Há mais de 10 anos nos dedicamos a atuar de forma transparente e
						artesanal em casos complexos. Utilizamos de nossos conhecimentos
						jurídicos e contábeis para apontar caminhos e soluções adequadas a
						fim de otimizar recursos para os nossos clientes.
					</p>
					<ButtonsPrimary
						classExtra="text-primary-blue border-primary-blue border-solid border-2 w-48 h-12 transition duration-200 hover:text-white hover:bg-primary-blue"
						:title="'Saiba mais'"></ButtonsPrimary>
				</div>
			</div>
			<div class="w-full h-[39rem] bg-body-1 bg-cover">
				<div class="w-full h-[39rem] bg-lawyer vsm:hidden"></div>
			</div>
		</section>

		<section ref="forWho" class="py-24 md:pb-32 bg-primary-black bg-center bg-no-repeat bg-contain"
			style="background-image: url('/images/background/background-infos.png')">
			<div class="container px-4 mx-auto">
				<div class="md:max-w-4xl mb-16 mx-auto text-center">
					<p class="text-primary-blue font-semibold mb-3">O que fazemos</p>
					<h1 class="mb-4 text-3xl md:text-5xl text-white">
						Nossas Especialidades
					</h1>
				</div>
				<div class="flex flex-wrap">
					<CardSpecialty class="mb-12 text-white" image="images/icons/empresarial_icon.svg"
						title="Direito Empresarial"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan sapien nec imperdiet semper asjemw.">
					</CardSpecialty>
					<CardSpecialty class="mb-12 text-white" image="images/icons/falencia_icon.svg"
						title="Falência e Recuperação de Empresas"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan sapien nec imperdiet semper asjemw.">
					</CardSpecialty>
					<CardSpecialty class="mb-12 text-white" image="images/icons/penal_empresarial_icon.svg"
						title="Direito Penal Empresarial"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan sapien nec imperdiet semper asjemw.">
					</CardSpecialty>
					<CardSpecialty class="mb-12 text-white" image="images/icons/tributario_icon.svg"
						title="Direito Tributário"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan sapien nec imperdiet semper asjemw.">
					</CardSpecialty>
					<CardSpecialty class="mb-12 text-white" image="images/icons/trabalhista_icon.svg"
						title="Direito Trabalhista"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan sapien nec imperdiet semper asjemw.">
					</CardSpecialty>
					<CardSpecialty class="mb-12 text-white" image="images/icons/civil_icon.svg" title="Direito Cível"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan sapien nec imperdiet semper asjemw.">
					</CardSpecialty>
				</div>
			</div>
		</section>

		<section ref="forWho" class="py-20 md:pb-32 bg-primary-blue bg-no-repeat bg-center bg-cover bg-quantity">
			<div class="mx-auto flex text-center flex-col md:flex-row max-sm:space-y-12 md:space-x-60 justify-center">
				<div class="flex flex-col gap-1">
					<h1 class="text-[72px] text-white">+150</h1>
					<p class="text-white text-xl">Clientes atendidos</p>
				</div>
				<div class="flex flex-col gap-1">
					<h1 class="text-[72px] text-white">87%</h1>
					<p class="text-white text-xl">Casos resolvidos</p>
				</div>
				<div class="flex flex-col gap-1">
					<h1 class="text-[72px] text-white">+10</h1>
					<p class="text-white text-xl">Anos de experiência</p>
				</div>
			</div>
		</section>

		<section class="flex mb-12">
			<div class="flex flex-col w-full">
				<div class="mt-12 flex flex-col ml-12">
					<div class="flex items-center">
						<p class="vsm:text-sm">Blog</p>
						<hr class="w-32 bg-primary-blue h-1 ml-5" />
					</div>
					<h1 class="text-primary-blue mb-4 text-3xl md:text-4xl leading-tight vsm:text-lg">
						Blog da Machado Corrêa
					</h1>
				</div>
				<div class="h-auto w-auto bg-white grid grid-cols-3 gap-3 vsm:grid-cols-1">
					
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
				</div>
			</div>
		</section>

		<section>
			<SectionContact></SectionContact>
		</section>
	</main>
</template>

<script setup>
const { locale } = useI18n();

useHead({
	title: () => "Starvis",
});

useServerSeoMeta({
	title: () =>
		"Starvis - Desenvolvemos tudo o que seu MVP inicial precisa e aceleramos o crescimento da sua startup com suporte técnico especializado.",
	ogTitle: () =>
		"Starvis - Desenvolvemos tudo o que seu MVP inicial precisa e aceleramos o crescimento da sua startup com suporte técnico especializado.",
	description: () =>
		"Desenvolvemos tudo o que seu MVP inicial precisa e aceleramos o crescimento da sua startup com suporte técnico especializado.",
	ogDescription: () =>
		"Desenvolvemos tudo o que seu MVP inicial precisa e aceleramos o crescimento da sua startup com suporte técnico especializado.",
});

const contact = ref(null);
const projects = ref(null);
const forWho = ref(null);
const navbarOpen = ref(false);

const name = ref("");
const email = ref("");
const subject = ref("");
const loading = ref(false);

function scrollToContact() {
	contact.value.scrollIntoView({ behavior: "smooth" });
}

function scrollToForWho() {
	forWho.value.scrollIntoView({ behavior: "smooth" });
}

function scrollToProjects() {
	projects.value.scrollIntoView({ behavior: "smooth" });
}

function openOrCloseNavbar() {
	navbarOpen.value = !navbarOpen.value;
}

async function sendEmailContact() {
	try {
		loading.value = true;
		const informations = `Olá me chamo ${name.value} meu email é ${email.value} e o assunto que quero falar é ${subject.value}`;
		const { data, error } = await $fetch("/api/send-email", {
			method: "POST",
			body: {
				info: informations,
			},
		});

		if (!error) {
			useNuxtApp().$toast.success("Email enviado com sucesso!");
		}
	} catch (e) {
		useNuxtApp().$toast.error("Não foi possível enviar o email!");
		//console.log(e)
	} finally {
		loading.value = false;
	}
}
</script>
