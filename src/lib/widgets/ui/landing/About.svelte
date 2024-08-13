<script>
  import {cards} from '$shared';
</script>


<section id="about" class="section-about">
  <div class="background-color-black">
    <div class="page-padding">
      <div class="container-large">
        <div class="padding-vertical padding-large">
          <div class="text-align-center">
            <div class="margin-bottom margin-medium">
              <h3 class="heading-small uppercase text-letter-spacing text-gradient animation-slideup hide">
                #HODL
              </h3>
              <h2 class="heading-xlarge custom-heading-mobile-lanscape uppercase animation-slideup-d200">
                it's time to get this
                <br>party started
              </h2>
            </div>
            <div class="margin-bottom margin-medium">
              <div class="max-width-large">
                <div class="margin-bottom margin-large">
                  <div class="max-width-large">
                    <p class="paragraph animation-slideup-d300">
                      Watch out! The NFT bull run has gotten so out of control that 10,000 dancing bulls have been let loose on the blockchain! Armed with their own music, these funky bulls have created their own dance crew: the Bull Run Crew. Join the BRC as they party their way through the metaverse - and beyond!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="" >
      <div class="flex flex-row overflow-x-hidden">
        {#each cards as {img, title, desc}}
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
      <a href="/" target="_blank" class="btn w-button">Lorem impsum
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
