<script>
    import CtAs from "./CTAs.svelte";
    import Header from "./Header.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";

</script>

<SectionWrapper>
    <Header />
    <div
        class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <h2
            class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold"
        >
            <span class="text-indigo-400">Programming</span> 
            <span class="text-slate-600 line-through">Is Hard</span><br />
            Just Got <span class="text-indigo-400">Easier</span>
        </h2>
        <p
            class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full"
        >
            Less thinking & more doing. Programming is not just for money but <span
                class="italic"
                >about passions, devotion</span
            > and <strong>dedication to what you love.</strong>
        </p>
        <CtAs />
       
    </div>
</SectionWrapper>
