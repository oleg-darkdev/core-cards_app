<script>  import Carousel from 'svelte-carousel'
  import {
    browser
  } from '$app/environment'

  export let cards;
</script>

<section class="section-image-slider-brc">
  <div class="gradient-slider">
  </div>
  <div class="continous-moving-slider h-auto w-slider w-full ">
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

    <div class="mask-images  relative top-0 left-0 overflow-hidden flex flex-row z-1 w-full h-full">
      {#each cards.cards as {img, title, desc}, id}
        <div class="{id % 2 === 0 ? 'translate-y-4': '-translate-y-4'} slide-2  w-slide rounded-xl">
          <div class="lg:h-80 lg:w-64 md:w-40 md:h-64 h-64 w-40 ">
          <img src="{img}" loading="lazy" width="383" alt="{title} card image" class="object-cover object-center w-full h-full rounded-xl">
        </div>
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


.continous-moving-slider {
  z-index: 0;
  width: 100%;
  /* height: 530px; */
  background-color: #0e0e13;
  overflow: hidden;
}


.gradient-slider {
  z-index: 4;
  /* height: 62vh; */
  background-image: linear-gradient(270deg, rgba(14, 14, 19, .82) 35%, rgba(0, 0, 0, 0) 44%), linear-gradient(to right, rgba(14, 14, 19, .71) 35%, rgba(0, 0, 0, 0) 44%, rgba(0, 0, 0, 0) 78%);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.slide-2 {
  width: 100%;
  height: 100%;
  max-width: none;
  text-align: center;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 5px;
  margin-right: 5px;
  padding: 15px;
}

.w-slide {
  vertical-align: top;
  width: 100%;
  height: 100%;
  white-space: normal;
  text-align: left;
  display: inline-block;
  position: relative;
}
.mask-images {
  /* width: 20%; */
  overflow: visible;
}

.mask-images {
  max-height: 650px;
}


@media screen and (max-width: 767px) {
  .mask-images {
    width: 100%;
  }
}
@media screen and (max-width: 479px) {
  .mask-images {
    width: 100%;
  }
}

</style>
