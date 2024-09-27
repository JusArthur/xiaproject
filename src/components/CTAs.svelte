<script>
    export let dark;
</script>

<div class="flex items-center gap-4">
    <button class={"specialBtn " + (dark ? " bg-[#181b34]" : " ")}>
        <p class="text-base sm:text-lg md:text-xl">Contact Me</p>
    </button>
    <button class="specialBtnDark">
        <p class="text-base sm:text-lg md:text-xl">Start Over &rarr;</p>
    </button>
</div>
