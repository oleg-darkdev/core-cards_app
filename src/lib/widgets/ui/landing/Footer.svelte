<script>
    import {navigation} from '$shared';
</script>


<footer class="footer-component">
  <div class="container-large">
    <div class="margin-bottom margin-small">
      <div class="flex-wrapper flex-align-center flex-justify-space-between flex-vertical-tab">
        <a href="/" class="w-32 h-10">
          <img src="/images/logo.svg" loading="lazy" alt="w-full h-full">
        </a>
        <div class="nav-middle foot-nav-right">
          <div class="footer-links">
            {#each navigation as {title, link}}
              <a href="{link}" class="footer-link">
                {title}
              </a>
            {/each}

          </div>
        </div>
        <div class="nav-social-media-icons">

          <a href="/" target="_blank" class="sm-icon-container icon-bg-blue w-inline-block">
            <img src="/images/621620a6ca1ed8d5f16422ef_IG-icon.svg" loading="lazy" width="40" alt="instagram icon" class="image">
          </a>

        </div>
      </div>
    </div>
    <div class="max-width-large">
      <div class="hr">
      </div>
    </div>
    <div class="margin-bottom margin-small">
      <div class="flex-wrapper flex-justify-space-between flex-vertical-tab text-align-center-tab">
        <div class="footer-bottom text-color-white">© 2024 CORE Cards.
        </div>
        <div class="footer-bottom text-color-white"> Production by
          <a href="/" target="_blank" class="credit-link text-weight-semibold"> 44Games.
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>


<style>
.footer-bottom.text-color-white {
  color: #fff;
}
</style>
