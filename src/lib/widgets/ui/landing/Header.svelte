<script>
  import {navigation} from '$shared';

  let showMenu = false;
</script>

<header class="header">
  <nav class="nav_component">
    <div class="container-large">
      <div class="flex-wrapper flex-align-center justify-between">
        <a href="/" aria-current="page" class="brand w-nav-brand w--current">
          <img src="/images/logo.svg" loading="lazy" class='h-14' alt="logo COREcards">
        </a>
        <div class="nav-middle ">
          <div role="banner" class="navbar-2 w-nav ">
            <nav role="navigation" class="{showMenu ? 'nav-menu': ''} nav-panel" on:click={()=> showMenu = !showMenu } >

              <!-- <div class="nav-panel {showMenu ? '': ''}"> -->
                <!-- {#if showMenu} -->
              {#each navigation as {title, link}}
                <div class="nav-link-wrap w-full">
                  <a href="{link}" class="nav-link w-nav-link ">
                    {title}
                  </a>
                </div>
              {/each}
              <!-- {/if} -->
              <!-- </div> -->
            </nav>
          </div>
        </div>
        <div class="nav-social-media-icons social-right-space">
          <a href="/" target="_blank" class="sm-icon-container icon-bg-blue w-inline-block">
            <img src="/images/621620a6ca1ed8d5f16422ef_IG-icon.svg" loading="lazy" width="24" alt="instagram icon">
          </a>
        </div>
        <div class="h-14 w-14 pt-4 menu-btn hidden" on:click={()=> showMenu = !showMenu }>
          <img src="/images/menu-icon.svg" class='h-full w-full' alt="menu">
        </div>
      </div>
    </div>
  </nav>
</header>


<style>
.nav-middle {
  align-items: center;
  display: flex;
}
.navbar-2 {
  background-color: rgba(0, 0, 0, 0);
}
.navbar-2 {
  background-color: rgba(0, 0, 0, 0);
  order: -1;
  position: static;
}


.w-nav-link {
  vertical-align: top;
  color: #fff;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-nav-link.w--current {
  color: #0082f3;
}

  .nav-panel {
    display: flex;
    flex-direction: row;
  }

.header {
  z-index: 50;
  width: 100%;
  background-color: #0e0e13;
  padding-top: 15px;
  padding-bottom: 15px;
  position: fixed;
}


.w-nav-link:hover  {
  color: #29aae0;
}


@media screen and (min-width: 991px) {
  .menu-btn {
    display: none;
  }
}


@media screen and (max-width: 991px) {
    .nav-link-wrap:nth-child(1) {
      background-color: #43b24b;
    }
    .nav-link-wrap:nth-child(2) {
      background-color: #29aae0;
    }
    .nav-link-wrap:nth-child(3) {
      background-color: #fb276e;
    }
    .nav-link-wrap:nth-child(4) {
      background-color: #f7ec13;
    }


  .menu-button-3 {
    z-index: 300;
    padding-left: 0;
    padding-right: 18px;
  }
  .nav-link-wrap  {
    height: 20%;
    align-items: center;
    display: flex;
  }
  .w-nav-link {
  vertical-align: top;
  color: #fff;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  /* padding: 20px;  */
  text-decoration: none;
  display: inline-block;
  position: relative;
}

  .nav-panel {
    display: none;
  }
  .menu-button-3 {
    z-index: 0;
    background-color: rgba(0, 0, 0, 0);
    position: relative;
    left: 0;
    right: 0;
  }




  .nav-menu {
  width: 100%;
  height: 100vh;
  max-width: none;
  text-align: center;
  background-color: #0e0e13;
  flex-flow: column;

  /* padding-top: 25%; */
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index:10;
}


  .nav_component {
    padding-left: 12px;
    padding-right: 12px;
  }
  .nav-middle {
    display: none;
    flex: 0 auto;
    justify-content: space-between;
  }
  .header {
    z-index: 10;
  }
}

@media screen and (max-width: 479px) {

}
</style>
