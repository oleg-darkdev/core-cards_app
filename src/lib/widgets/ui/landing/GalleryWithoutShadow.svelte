<script>
  export let cards;
</script>


<section class="h-[80vh] overflow-hidden mb-20" >
<div class="flex flex-row overflow-x-hidden h-full justify-center items-center">
  {#each cards.cards as {img, title, desc}, id}
    <a href="" class='{id % 2 === 0 ? 'translate-y-12': '-translate-y-12'}'>
      <div class=" bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8 transition duration-300 ease-in-out delay-150 transform  ">
          <img class="object-cover object-center w-full  rounded-xl" src="{img}" alt="{title} card image">
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
