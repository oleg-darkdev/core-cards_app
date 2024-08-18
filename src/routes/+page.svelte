<script>
  import {redCards, yellowCards, blueCards, greenCards, orangeCards} from '$shared';
	import { Footer, Header, About, Community, GalleryWithoutShadow, Hero, Timeline, Team, Gallery, Faq, Contact,} from '$lib/widgets';
  // import {  } from '$lib/entities'
</script>


<svelte:head>
  <title>COREcards</title>
</svelte:head>

<div class="body">
  <Header />

  <div class="main-wrapper">
    <Hero />

    <Gallery cards={greenCards}/>

    <About />

    <GalleryWithoutShadow cards={redCards}/>

    <section class="section-roadmap relative">
      <div class="background-color-black">
        <div class="page-padding">
          <div class="container-large">
            <div class="padding-vertical padding-large">
              <div class="text-align-center">
                <div class="margin-bottom margin-medium">
                  <h3 class="heading-small uppercase text-letter-spacing text-gradient ">To the moon
                  </h3>
                  <h3 class="heading-xlarge uppercase ">Roadmap
                  </h3>
                </div>
                <div class="max-width-large">
                  <div class="paragraph ">From headlining massive events around the world to dance competitions in the metaverse to producing hit songs, no one does it bigger than BRC! #WGMI
                    <br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Timeline />

    <Gallery cards={yellowCards}/>


    <Community />

    <GalleryWithoutShadow cards={blueCards}/>

    <Team />

    <!-- <Gallery cards={redCards}/> -->

    <Faq />

    <GalleryWithoutShadow cards={orangeCards}/>

    <Contact />
  </div>


  <Footer />
</div>



<style>
  .body {
    background-color: #0e0e13;
  }

</style>
