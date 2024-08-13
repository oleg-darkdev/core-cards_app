<script>
  const faq = [
    {
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: [
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      ]
    },
    {
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: [
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      ]
    },
    {
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: [
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      ]
    },
    {
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: [
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      ]
    },
    {
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: [
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      ]
    },
    {
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: [
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      ]
    },
  ]
</script>


<section id="faq" class="section-faq">
  <div class="background-color-black">
    <div class="page-padding">
      <div class="padding-vertical padding-large">
        <div class="container-large">
          <div class="text-align-center">
            <h3 class="heading-small uppercase text-letter-spacing text-gradient">Your questions answered
            </h3>
            <h3 class="heading-large uppercase">FAQ
            </h3>
            <div class="max-width-large">
              <div class="paragraph ">As we approach our launch date more details will be released and more questions will be answered.
              </div>
            </div>
          </div>


          <div class="max-width-large">
            <div class="faq-wrapper">
              {#each faq as data}
              <div class="faq-item transition duration-300 ease-in-out delay-150 hover:scale-110 group">
                <div class="faq-item-heading " on:click={()=> data.showAnswer = !data.showAnswer}>
                  <h5 class="heading-xsmall uppercase">
                    {data.q}
                  </h5>
                  <img src="/images/arrow-down.svg" loading="lazy" alt="arrow down" class="transition duration-300 ease-in-out delay-150 group-hover:bg-[#f99d1c] accordion-arrow {data.showAnswer ? 'rotate-180': 'rotate-0'}">
                </div>

                {#if data.showAnswer}
                <div class="faq-item-content">
                  <div class="margin-vertical margin-xsmall">
                    <div class="paragraph">
                      {#each data.a as answer}
                        <p>{answer}</p>
                      {/each}
                    </div>
                  </div>
                </div>
                {/if}
              </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<style>
.section-faq {
  background-color: #0e0e13;
}

.faq-wrapper {
  padding-top: 31px;
}
.faq-item {
  outline-offset: 0px;
  border-bottom: 1px solid #272727;
  outline: 3px #272727;
  padding-top: 20px;
  padding-bottom: 20px;
}

.faq-item-heading {
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0;
  display: flex;
}

.faq-item-content {
  margin-top: 0;
  margin-bottom: 10px;
  overflow: hidden;
}

</style>
