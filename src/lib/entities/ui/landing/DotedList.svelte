<script>
  export let items;
</script>


<div class="margin-bottom-xlarge ">
  <ul role="list" class="list w-full">
    {#each items as item}
      <li class="group w-full pb-4 justify-start  flex flex-row">
        <div class="list_circle bg-white transition duration-300 ease-in-out delay-150 group-hover:bg-[#e84926] mr-6 mt-2"/>
        <p class='paragraph w-full text-start'>{item}</p>
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
