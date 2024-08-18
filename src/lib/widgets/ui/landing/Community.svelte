<script>
   import {community} from '$shared';
</script>

<section id="" class="section-our-team">
  <div class="page-padding">
  <div class="container-large">
    <div class="padding-vertical padding-large">
      <div class="text-align-center">

        <h3 class="heading-large uppercase">Thanks, <br /> community!</h3>
        <div class="max-width-large">
          <div class="paragraph mb-6">
              Thanks the community of everyone involved in <br /> creating and testing this deck of beautiful cards.
          </div>
          <div class="paragraph">
              Special thanks to Victoria Tarasevich - a wonderful and talented person.
          </div>
        </div>
      </div>

      <div class="flex justify-center">
      {#each community as member}
        <div style="background-image: url(/images/member.svg);  background-repeat: no-repeat;" class=" flex justify-center items-center object-center rounded-t-xl lg:h-48 md:w-48 w-32 h-32" alt="">
            <img
          class="mask mask-squircle lg:h-20 md:h-16 h-16"
          src="/images/community/{member}" />
        </div>
      {/each}
      </div>
    </div>
</section>
