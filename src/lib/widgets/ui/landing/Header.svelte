<script>
  import {navigation} from '$shared';
</script>

<header class="header">
  <nav class="nav_component">
    <div class="container-large">
      <div class="flex-wrapper flex-align-center flex-justify-space-between">
        <a href="/" aria-current="page" class="brand w-nav-brand w--current">
          <img src="/images/logo.svg" loading="lazy" class='h-14' alt="logo COREcards">
        </a>


        <div class="nav-middle">
          <div role="banner" class="navbar-2 w-nav">
            <div class="menu-button-3 w-nav-button">
              <div class="icon-3 w-icon-nav-menu">
              </div>
              <div class="w-embed">
                <svg width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="3" fill="#ffffff">
                  </rect>
                  <rect y="9" width="32" height="3" fill="#ffffff">
                  </rect>
                  <rect y="18" width="32" height="3" fill="#ffffff">
                  </rect>
                </svg>
              </div>
              <div data-is-ix2-target="1" class="lottie-animation-2" data-w-id="f2db3de4-48ab-b1b2-7217-058701fecf9b" data-animation-type="lottie" data-src="https://assets.website-files.com/61fe826977a128ce5854ab54/61fe826977a1285d0054ab76_hamburger-icon.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="2.4791666666666665" data-duration="0">
              </div>
            </div>
            <nav role="navigation" class="nav-menu w-nav-menu">
              <div class="menu-btn-close w-nav-button">
                <div class="icon-3 w-icon-nav-menu">
                </div>
                <div class="w-embed">
                  <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5607 10.4393L2.12134 0L1.75834e-05 2.12132L10.4393 12.5607L0 23L2.12132 25.1213L12.5607 14.682L22.6274 24.7487L24.7488 22.6274L14.682 12.5607L24.7487 2.4939L22.6274 0.372583L12.5607 10.4393Z" fill="#ffffff">
                    </path>
                  </svg>
                </div>
                <div data-is-ix2-target="1" class="lottie-animation-2" data-w-id="f2db3de4-48ab-b1b2-7217-058701fecfa0" data-animation-type="lottie" data-src="https://assets.website-files.com/61fe826977a128ce5854ab54/61fe826977a1285d0054ab76_hamburger-icon.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="2.4791666666666665" data-duration="0">
                </div>
              </div>
              {#each navigation as {title, link}}
              <a href="{link}" class="nav-link w-nav-link">
                {title}
              </a>
              {/each}

            </nav>
          </div>
        </div>
        <div class="nav-social-media-icons social-right-space">
          <a href="/" target="_blank" class="sm-icon-container icon-bg-blue w-inline-block">
            <img src="/images/6215c9c68ef1534b7e8ae7b7_DC-icon.svg" loading="lazy" width="40" alt="" class="image">
          </a>
          <!-- <a href="https://twitter.com/BullRunCrew" target="_blank" class="sm-icon-container icon-bg-blue w-inline-block">
            <img src="/images/6215c9c68ef153ca728ae7c1_TWITTER-icon.svg" loading="lazy" width="20" alt="" class="image">
          </a>
          <a href="https://instagram.com/bullruncrew" target="_blank" class="sm-icon-container icon-bg-blue w-inline-block">
            <img src="/images/621620a6ca1ed8d5f16422ef_IG-icon.svg" loading="lazy" width="24" alt="">
          </a>
          <a href="#" class="sm-icon-container icon-bg-blue w-inline-block">
            <img src="/images/6221a310a06c83054e5597e8_new-medium-icon.svg" loading="lazy" width="24" alt="">
          </a> -->
        </div>
      </div>
    </div>
  </nav>
</header>


<style>
.header {
  z-index: 50;
  width: 100%;
  background-color: #0e0e13;
  padding-top: 15px;
  padding-bottom: 15px;
  position: fixed;
}

@media screen and (max-width: 991px) {
  .nav_component {
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>
