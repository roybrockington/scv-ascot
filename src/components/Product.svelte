<script>
  export let price;
</script>

<div class="my-2 flex flex-col bg-zinc-200 w-full md:w-3/4 lg:w-1/2 items-center gap-3 rounded-xl py-4 text-center">
  <span class="text-md font-bold">{price.description}</span>
  <span class={`${price.ascot ? 'line-through text-lg': 'text-3xl'}`}>£{price.ssp.toFixed(2)}</span>
  <span class={`${price.ascot ? 'text-3xl': 'hidden'}`}>
    £{price.ascot}
  </span>
</div>
