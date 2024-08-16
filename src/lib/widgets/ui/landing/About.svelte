<script>
  import {blueCards} from '$shared';
  import { DotedList } from '$lib/entities'
	import { useCases, targetAudience } from '$lib/shared';

</script>


<section id="about" class="section-about">
  <div class="background-color-black">
    <div class="page-padding">
      <div class="container-large">
        <div class="padding-vertical padding-large">
          <div class="text-align-center">
            <div class="margin-bottom margin-medium">
              <h3 class="heading-small uppercase text-letter-spacing text-gradient animation-slideup hide">
                #coreCARDS
              </h3>
              <h2 class="heading-xlarge custom-heading-mobile-lanscape uppercase ">
                it's time to get this
                <br>facilitation party started
              </h2>
            </div>
            <div class="margin-bottom margin-medium">
              <div class="max-width-large">
                <div class="margin-bottom margin-large">
                  <div class="max-width-large">
                    <p class="paragraph animation-slideup-d300">
                      Watch out! If facilitation is out of control, it's not right at all, it shouldn't be - and we, a team of facilitators and designers are racing to your rescue, armed with our very own deck of cards for facilitation in monkey design.
                    </p>
                  </div>
                </div>
              </div>
              <h3 class="heading-small uppercase text-letter-spacing text-gradient animation-slideup">
                Use these cards on:
              </h3>
              <div class="margin-bottom-xlarge max-w-sm mx-auto  mb-20">
                <DotedList items={useCases}/>
              </div>

              <h3 class="heading-small uppercase text-letter-spacing text-gradient animation-slideup">
                They're especially <br /> good for you:
              </h3>
              <div class="margin-bottom-xlarge max-w-sm mx-auto">
                <DotedList items={targetAudience}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="" >
      <div class="flex flex-row overflow-x-hidden">
        {#each blueCards.cards as {img, title, desc}}
          <a href="">
            <div class="transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8 ">
                <img class="object-cover object-center w-full  rounded-xl" src="{img}" alt="{title} card image">
            </div>
          </a>
        {/each}
      </div>



      <div class="left-arrow w-slider-arrow-left">
        <div class="w-icon-slider-left">
        </div>
      </div>
      <div class="right-arrow w-slider-arrow-right">
        <div class="w-icon-slider-right">
        </div>
      </div>
      <div class="slide-nav about-us-slidenav w-slider-nav w-round">
      </div>
    </div>
    <div class="margin-top margin-large text-align-center">
      <a href="/" target="_blank" class="btn bg-blue w-button">Lorem impsum
      </a>
    </div>
  </div>
</section>



<style>
  .background-video {
  border-radius: 16px;
}

.about-us-slider {
  width: 100%;
  height: auto;
  background-color: rgba(0, 0, 0, 0);
  margin-top: -30px;
  overflow: hidden;
}



</style>
