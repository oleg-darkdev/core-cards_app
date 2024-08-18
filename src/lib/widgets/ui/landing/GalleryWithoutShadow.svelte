<script>
  export let cards;
</script>


<section class="h-auto overflow-hidden " >
<div class="flex lg:flex-row lg:flex-wrap overflow-hidden h-full justify-center items-center py-14 ">
  {#each cards.cards as {img, title, desc}, id}
    <a href="" class='{id % 2 === 0 ? 'translate-y-12': '-translate-y-12'} my-1 mx-1'>
      <div class=" bg-white shadow-2xl rounded-xl lg:h-80 lg:w-64 md:w-40 md:h-64 h-64 w-40  md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8 transition duration-300 ease-in-out delay-150 transform  ">
          <img class="object-cover object-center w-full h-full rounded-xl" src="{img}" alt="{title} card image">
      </div>
    </a>
  {/each}
</div>
<!--
<div class="margin-top margin-large text-align-center">
  <a href="#contact" class="btn bg-blue w-button">Get in touch
  </a>
</div> -->

<!-- <div class="left-arrow w-slider-arrow-left">
  <div class="w-icon-slider-left">
  </div>
</div>
<div class="right-arrow w-slider-arrow-right">
  <div class="w-icon-slider-right">
  </div>
</div>
<div class="slide-nav about-us-slidenav w-slider-nav w-round">
</div> -->
</section>
