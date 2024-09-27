<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    let faqs = [
        {
            question: "What is my plan for career?",
            ans: "I can not give a certain answer for the uncertain future. But I can be sure that I will dedicate all I have to programming. And try my best to contribute to Ori.Gatou",
        },
        {
            question: "What passion is used to?",
            ans: "The reason that a lot of people learn CS is just to 'sell' themselves to big company. How I live each day is how I live my life. \
            The real question is whether I see myself as a commodity, exchanging labor for compensation, or as someone who is constantly learning, striving for personal growth and self-fulfillment. That is what truly matters.",
        },
        {
            question: "Impression to Ori.Gatou",
            ans: "Impressive! I have met Diogo, Dai, Zizhang, Jian and Benjamin! So many nice guys in this company! In communication strategy class, teacher told me a good working environment will boost my confidence and help me engage more in teamwork.\
             I am really looking forward to this new journey and the challenges ahead.",
        },
        {
            question: "Talk about self-discipline?",
            ans: "In my first year of university, it was as if a tightly wound spring had suddenly been released. I stayed up late playing games, skipped classes, and pretty much did everything a typical 'bad boy' would do. \
            It wasn't until my sophomore year, when my grades fell below the top 50%, that I began to discipline myself.\
             Now, I go to bed at 10 PM and wake up at 5:30 AM. After studying for an hour, I attend my 8 AM classes.\
              I firmly believe that early morning work is far more effective than staying up late.\
               By the end of my sophomore year, I ranked in the top 10% of the entire university.",
        },
        {
            question: "Others?",
            ans: "I really love the line from the movie Pegasus: 'The true skill is giving your all to everything you love.' It is not about seeking a result,\
            it's more about the process of getting to that result. It's the journey and the approach with all endeavors.",
        },

    ];
</script>

<SectionWrapper id="faqs">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center"
    >
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                I have a lot of ideas and thoughts
            </p>
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                Here are my answers for future
            </h3>
        </div>
        <div class="flex flex-col gap-8 sm:gap-10 md:gap-14 w-full">
            {#each faqs as faq}
                <div
                    class="flex flex-col gap-2 text-left max-w-[800px] w-full mx-auto relative p-4 px-6"
                >
                    <div
                        class="absolute top-0 left-0 w-1/3 h-[1px] bg-slate-950 -translate-x-4"
                    ></div>
                    <div
                        class="absolute top-0 left-0 h-2/3 w-[1px] bg-slate-950 -translate-y-4"
                    ></div>
                    <h4 class="text-lg sm:text-xl md:text-2xl pt-2">
                        {faq.question}
                    </h4>
                    <p class="pl-2">{faq.ans}</p>
                </div>
            {/each}
        </div>
    </div>
</SectionWrapper>
