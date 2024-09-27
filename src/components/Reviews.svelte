<script>
    import ReviewCard from "./ReviewCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";

    let lim = true;

    let reviewsList = [
        {
            time: "2015-06",
            review: "Despite having only 10 yuan (two Canadian dollars) as daily pocket money, I still managed to buy 'the beginner’s guide to Java'. And with that, I typed out my very first 'Hello, World.'",
        },
        {
            time: "2022-07",
            review: "After surviving both the high school and college entrance exams, I finally had some time to dive into programming books again. Although I had forgotten much of Java, I still named a file in Python as 'Java_is_the_best_language.py.'",
        },
        {
            time: "2023-01",
            review: "Even though I had just started learning frontend development, I couldn’t wait to build my own website. Now, looking at it, it's absolutely dreadful. My favorite video creator once said, If you think your past self was foolish, it means you're making progress.",
        },
        {
            time: "2023-06",
            review: "I joined my school's ACM (ICPC) team, and even though I'm just a member of the reserve squad, I was so excited that I told everyone who passed by. In return, they all looked at me as if I had lost my mind.",
        },
        {
            time: "2024-04",
            review: "My first national award, together with my brothers. All I remember from that day is that we ate a lot of barbecue, and everyone was so happy.",
        },
    ];
</script>

<SectionWrapper id="reviews">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center"
    >
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                DLC in my youth in China
            </p>
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                See My <span class="text-indigo-400">Stories</span> In University
            </h3>
        </div>
        <div class="flex flex-col md:flex-row gap-8 w-fit mx-auto">
            <div class="flex flex-col gap-8">
                {#each lim ? reviewsList.slice(0, 4) : reviewsList as reviewItem, index}
                    <ReviewCard {reviewItem} left={true} {index} />
                {/each}
            </div>
            <div class="w-[1px] bg-slate-950 hidden md:flex"></div>
            <div class="flex flex-col gap-8">
                {#each lim ? reviewsList.slice(0, 4) : reviewsList as reviewItem, index}
                    <ReviewCard {reviewItem} {index} />
                {/each}
            </div>
        </div>
        <button on:click={() => (lim = !lim)} class="specialBtn">
            <p>{lim ? "Show More" : "Show Less"}</p>
        </button>
        <div class="flex flex-col gap-10">
            <p class="mx-auto text-lg sm:text-xl md:text-2xl font-semibold">
                I arrived in Canada on 2024-June-14
            </p>
        </div>
    </div>
</SectionWrapper>
