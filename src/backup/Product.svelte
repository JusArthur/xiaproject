<script>
    import ProductCard from "./ProductCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    let productFeatures = [
        {
            me: [
                "2018-May-30",
                "Daydreamer",
                "Homework doer",
                "Still remember the dreams of childhood?",
            ],
            description:
                "In 2018, I had just finished building my first 'matchbox' house in Minecraft. \
                I couldn’t help but wonder, One day, I want to create games as fun as this. But my mother said, 'You must focus on your studies \
                so that you can get into the best medical school in the future.'",
            imgUrl: "assets/MineCraft.png",
        },
        {
            me: [
                "2022-June-08, ending",
                "English or Computer Science?",
                "The first eighteen years of life feel like a dream",
                "Life is dear, love is dearer. Both can be given up for freedom.",
            ],
            description:
                "In 2022, I was finally freed from the shackles of high school and the gaokao, \
                only to face the next hurdle—choosing a university and my future path. \
                In China, this moment felt monumental, as if the successes and failures of my six years in middle and high school hinged on this very decision. \
                I wanted to pursue a degree in Computer Science, but my mother said, At the very least, you should become an English teacher at a public school..",
            imgUrl: "assets/Gaokao.jpg",
        },
        {
            me: [
                "2024-June-14",
                "Wukong within my heart",
                "Flight to Canada",
                "'I am CR7, always love challenges'",
            ],
            description:
                "Wukong embodies the classic image of a rebel. He defies the authority of the Heavenly Court, crowns himself the 'Great Sage Equal to Heaven,' and storms the Emperor's palace",
            imgUrl: "assets/BMW.jpg",
        },
    ];
</script>

<SectionWrapper id="prelude">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Beginning of <span class="text-indigo-400"
                    >my journey</span
                > starts here
            </p>
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                A Child's Dream
            </h3>
        </div>

        {#each productFeatures as productFeature, index}
            <ProductCard {productFeature} {index}>
                {#if index === 0}
                    "I want to make games!" A 14-year-old child told his mom <span
                        class="text-indigo-400 font-medium">proudly</span
                    > 
                {:else if index === 1}
                    'Don't apply for CS majors! That's not for  <span
                        class="text-indigo-400 font-medium">you!</span
                    >' Mom angrily said like this.
                {:else}
                    The Rebellion of Wukong —  <span
                        class="text-indigo-400 font-medium">Havoc in Heaven</span
                    >
                {/if}
            </ProductCard>
        {/each}
    </div>
</SectionWrapper>
