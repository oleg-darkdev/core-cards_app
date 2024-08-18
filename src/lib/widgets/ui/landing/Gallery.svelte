<script>  import Carousel from 'svelte-carousel'
  import {
    browser
  } from '$app/environment'


  import {yellowCards} from '$shared';
</script>

<section class="section-image-slider-brc">
  <div class="gradient-slider">
  </div>
  <div  class="continous-moving-slider w-slider">
  <!-- {#if browser}
	<Carousel
      autoplay
      autoplayDuration={2000}
      timingFunction="linear"
      dots={false}
      swiping={true}
  particlesToShow={3}
  particlesToScroll={2}

      let:showPrevPage
      let:showNextPage
      > -->

    <div class="mask-images h-auto w-slider-mask ">
      {#each yellowCards.cards as {img, title, desc}, id}
        <div class="{id % 2 === 0 ? 'translate-y-4': '-translate-y-4'}   slide-2 w-slide rounded-xl">
          <img src="{img}" loading="lazy" width="383" alt="{title} card image" class="image-3 rounded-xl">
        </div>
      {/each}
	    </div>
            <!-- </Carousel>
      {/if} -->
    <!-- <div class="left-arrow w-slider-arrow-left">
      <div class="w-icon-slider-left">
      </div>
    </div>
    <div class="right-arrow w-slider-arrow-right">
      <div class="w-icon-slider-right">
      </div>
    </div>
    <div class="slide-nav w-slider-nav w-round">
    </div> -->
  </div>
</section>



<style>

</style>
