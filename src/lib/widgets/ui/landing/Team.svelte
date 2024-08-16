<script>
   import {community} from '$shared';
</script>

<section id="contact" class="section-our-team">
  <div class="background-color-black">
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
            <div style="background-image: url(/images/member.svg);  background-repeat: no-repeat;" class="object-cover flex justify-center items-center object-center rounded-t-xl h-48 w-48" alt="">
                <img
              class="mask mask-squircle h-20 "
              src="/images/community/{member}" />
            </div>
          {/each}
          </div>
        </div>
      </div>

      <div class="container-large">
        <div class="padding-vertical padding-large">
          <div class="text-align-center">

            <h3 class="heading-large uppercase">Hello!
              <br> <a href='https://oleg-darkdev.vercel.app/' class='heading-style-h1 text-color-creme text-style-link' target="_blank" >I`am Oleg Medvedev</a>
            </h3>
            <div class="max-width-large">
              <div class="paragraph">
                 Product Web Engineer-IT Enthusiast, Gamification Coach, and JavaScript Programmer with across various technologies, <span class="text-weight-bold">4 years of experience in board game development and 3 years in web application development</span> including startups and open-source projects.  Engaged in merging the digital and physical worlds to create engaging and educational experiences.
              </div>
            </div>
          </div>

          <div class="flex-wrapper align-start justify-center flex-children-wrap-tab">
            <div class="team-item">
              <div class="margin-bottom margin-medium">
                <img  src="images/oleg-darkdev.jpg" loading="lazy" alt="Oleg Medvedev photo"   class="team-member-img">
              </div>
              <div class="team-social-links">
                <a href="https://github.com/oleg-darkdev" target="_blank" class="sm-icon-container w-inline-block">
                  <img src="/images/github-icon.svg" loading="lazy" width="25" alt="github icon">
                </a>
                <a href="https://www.linkedin.com/in/oleg-darkdev" target="_blank" class="sm-icon-container w-inline-block">
                  <img src="/images/linkedin-icon.svg" loading="lazy" width="25" alt="linkedin icon">
                </a>
              </div>
              <div class="text-align-center">
                <p class="paragraph ">
                  In head with a love for technologies, <br /> in heart with a love for people 🖤
                </p>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="team-item max-h-40">
              <div class="text-align-center">
                <p class="text-size-medium ">
                 If you have ideas for collaboration - say me Hello.
                </p>
                <a href="https://oleg-darkdev.vercel.app/" target="_blank" class="btn bg-blue  w-button">
                  Get in touch
                </a>
              </div>
            </div>

            <div class="partners-item flex items-start align-start flex-col max-h-64">
              <a target="_blank" href="/">
                <img src="/images/logos/44games.svg" class='w-full h-20' alt="44Games logo">
              </a>

              <a target="_blank" href="https://darkdev-foundation.vercel.app/">
                <img src="/images/logos/darkdev.svg" class='w-full h-20' alt="DarkDev logo">
              </a>

            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<style>
.section-our-team {
  background-color: #0e0e13;
}


.team-item, .partners-item {
  max-width: 350px;
  background-color: #000;
  border: 1px #f99d1c;
  border-radius: 16px;
  flex: 0 auto;
  margin: 20px;
  padding: 20px;
}

.team-member-img {
  object-fit: contain;
  border-radius: 16px;
  padding-top: 0;
}

.team-social-links {
  text-align: right;
  margin-top: -54px;
  margin-bottom: 20px;
  margin-right: 20px;
}

@media screen and (max-width: 991px) {
  .team-item, .partners-item {
    max-width: 300px;
    flex: 0 50%;
    align-self: stretch;
    padding: 20px;
  }

}

@media screen and (max-width: 767px) {
  .team-item, .partners-item {
    max-width: 350px;
    margin: 10px;
  }
}


@media screen and (max-width: 479px) {
  .team-item, .partners-item {
    max-width: 100%;
    flex: none;
    align-self: auto;
    margin: 0 0 20px;
  }
}
</style>
