<script>
  export let items;
</script>


<div class="margin-bottom-xlarge ">
  <h3 class="heading-small uppercase text-letter-spacing text-gradient animation-slideup">
      New cards added
  </h3>

  <ul role="list" class="list w-full">
    {#each items as item}
      <li class="w-full pb-4 justify-start content-center items-center flex flex-row">
        <div class="avatar mr-8">
          <div class="w-12 h-12 rounded-full">
            <img src="{item.img}" />
          </div>
        </div>
        <h4 class='text-xl uppercase w-full text-start'>{item.title}</h4>
      </li>
    {/each}
  </ul>
</div>



<style>

.list_circle {
  width: 15px;
  height: 15px;
  max-height: 15px;
  max-width: 15px;
  min-height: 15px;
  min-width: 15px;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 0 0 8px #0a0a0a;
}

.list {
  padding-left: 40px;
}
@media screen and (max-width: 991px) {
  .list {
    padding-left: 0;
  }
}
@media screen and (max-width: 767px) {
  .list {
    padding-left: 19px;
  }
}

</style>
