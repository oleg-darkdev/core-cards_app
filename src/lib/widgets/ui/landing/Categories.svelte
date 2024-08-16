<script>
   import {cardCategories} from '$shared';
</script>

<section id="" class="section-our-gallery">
  <div class="background-color-black">
    <div class="page-padding">
      <div class="container-large">
        <div class="padding-vertical padding-large">
          <div class="text-align-center">
            <h3 class="heading-small uppercase text-letter-spacing text-gradient animation-slideup">Lorem Ipsum has been the industry's standard
            </h3>
            <h3 class="heading-large uppercase ">Cards categories
            </h3>
            <div class="max-width-large">
              <div class="paragraph ">
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>


          <div class="flex-wrapper flex-align-center flex-justify-center flex-children-wrap-tab">
                {#each cardCategories as {img, title, category, textColor}}
            <div class="gallery-item animation-slideup-d300">
              <div class="margin-bottom margin-medium">
                <img src="{img}" loading="lazy" alt="" sizes="100vw"  class="gallery-member-img">
              </div>
              <div class="gallery-social-links">
                <a href="/" target="_blank" class="sm-icon-container w-inline-block">
                  <img src="/images/arrow-top.svg" loading="lazy" width="25" alt="">
                </a>
                <!-- <a href="/" target="_blank" class="sm-icon-container w-inline-block">
                  <img src="/images/6215c9c68ef153ca728ae7c1_TWITTER-icon.svg" loading="lazy" width="25" alt="">
                </a> -->
              </div>
              <div class="text-align-center">
                <p class="text-size-medium">
                  {title}
                </p>
                <p class="paragraph {textColor}">
                  {category}
                </p>
              </div>
            </div>

            <div class="gallery-item hide">
              <div class="margin-bottom margin-medium">
                <img src="" loading="lazy" alt="" sizes="100vw"  class="gallery-member-img">
              </div>
              <div class="gallery-social-links">
                <a href="/" class="sm-icon-container w-inline-block">
                  <img src="/images/arrow-top.svg" loading="lazy" width="25" alt="">
                </a>
                <!-- <a href="/" target="_blank" class="sm-icon-container w-inline-block">
                  <img src="/images/6215c9c68ef153ca728ae7c1_TWITTER-icon.svg" loading="lazy" width="25" alt="">
                </a> -->
              </div>
              <div class="text-align-center">
                <p class="text-size-medium">
                  {title}
                </p>
                <p class="paragraph {textColor}">
                  {category}
                </p>
              </div>
            </div>
            {/each}
          </div>

        </div>
      </div>
    </div>
  </div>
</section>


<style>
.section-our-gallery {
  background-color: #0e0e13;
}


.gallery-item {
  max-width: 350px;
  background-color: #000;
  border: 1px #f99d1c;
  border-radius: 16px;
  flex: 0 auto;
  margin: 20px;
  padding: 20px;
}

.gallery-item.hide {
  display: none;
}

.gallery-member-img {
  object-fit: contain;
  border-radius: 16px;
  padding-top: 0;
}

.gallery-social-links {
  text-align: right;
  margin-top: -54px;
  margin-bottom: 20px;
  margin-right: 20px;
}

@media screen and (max-width: 991px) {
  .gallery-item {
    max-width: 300px;
    flex: 0 50%;
    align-self: stretch;
    padding: 20px;
  }

}

@media screen and (max-width: 767px) {
  .gallery-item {
    max-width: 350px;
    margin: 10px;
  }
}


@media screen and (max-width: 479px) {
  .gallery-item {
    max-width: 100%;
    flex: none;
    align-self: auto;
    margin: 0 0 20px;
  }
}
</style>
