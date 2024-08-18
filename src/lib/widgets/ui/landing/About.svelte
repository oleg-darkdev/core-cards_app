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
              <h3 class="heading-small uppercase text-letter-spacing text-gradient  hide">
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
                    <p class="paragraph -d300">
                      Watch out! If facilitation is out of control, it's not right at all, it shouldn't be - and we, a team of facilitators and designers are racing to your rescue, armed with our very own deck of cards for facilitation in monkey design.
                    </p>
                  </div>
                </div>
              </div>
              <h3 class="heading-small uppercase text-letter-spacing text-gradient ">
                Use these cards on:
              </h3>
              <div class="margin-bottom-xlarge max-w-sm mx-auto  mb-20">
                <DotedList items={useCases}/>
              </div>

              <h3 class="heading-small uppercase text-letter-spacing text-gradient ">
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
