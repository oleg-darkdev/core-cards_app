<script>
  import { ListWithImgPointer } from '$lib/entities'
	import { timeline } from '$lib/shared';

</script>


<section id="roadmap" class="">
  <div class="page-padding">
    <div class="container-large">
      <div class="timeline_component">
        <div class="timeline_progress-2">
        </div>
        {#each timeline as {title, items}}
        <div class="timeline_item">
          <div class="timeline_left">
            <div class="timeline_date-text">
              {title}
            </div>
          </div>
          <div  class="timeline_centre">
            <div class="timeline_circle">
            </div>
          </div>
          <div class="timeline_right w-full">
            <ListWithImgPointer {items}/>
          </div>
        </div>
        {/each}

      </div>
    </div>
  </div>
</section>


<style>
.timeline_component {
  z-index: 4;
  max-width: 1120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  display: flex;
  position: relative;
}


.timeline_item {
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-rows: repeat(auto-fit, minmax(1px, 1fr));
  grid-template-columns: 1fr 180px 1fr;
  grid-auto-columns: 1fr;
  justify-content: stretch;
  padding-top: 30px;
  padding-bottom: 80px;
  font-size: 13px;
  display: grid;
  position: relative;
}

.timeline_right {
  font-size: 9px;
}

.timeline_centre {
  justify-content: center;
  display: flex;
}

.timeline_circle {
  width: 15px;
  height: 15px;
  max-height: 15px;
  max-width: 15px;
  min-height: 15px;
  min-width: 15px;
  background-color: #fff;
  border-radius: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 50vh;
  box-shadow: 0 0 0 8px #0a0a0a;
}

.timeline_date-text {
  color: #fff;
  text-align: center;
  letter-spacing: -.03em;
  font-family: Akira expanded demo, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.2;
  position: -webkit-sticky;
  position: sticky;
  top: 50vh;
}

.timeline_left {
  text-align: left;
  justify-content: flex-end;
  align-items: stretch;
}


.section-timeline {
  z-index: -3;
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 0;
  position: relative;
  overflow: visible;
}

.timeline_progress-2 {
  z-index: -10;
  width: 4px;
  height: 100%;
  color: #f99d1c;
   background-color: #f99d1c;
  position: absolute;
}
@media screen and (max-width: 991px) {
  .timeline_circle {
    display: none;
  }
  .list {
    padding-left: 0;
  }
}


@media screen and (max-width: 767px) {
  .timeline_item {
    width: 100%;
    grid-template-columns: 360px 1fr;
    padding-bottom: 40px;
  }
  .list {
    padding-left: 19px;
  }
  .timeline_centre {
    justify-content: flex-start;
  }
 .timeline_date-text {
    text-align: left;
    margin-top: -14px;
    margin-bottom: 24px;
    font-size: 36px;
  }

  .timeline_left {
    text-align: left;
  }

  .timeline_progress-2 {
    left: 6px;
  }
}
@media screen and (max-width: 479px) {
  .timeline_item {
    /* grid-template-columns: 64px 1fr; */
    line-height: 18px;
  }

  .timeline_right {
    line-height: 16px;
  }
    .timeline_date-text {
    font-size: 26px;
    margin-left: 20px;
  }

}


</style>
