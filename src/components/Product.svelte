<script>
  export let price;
</script>

<div class="opacity-90 bg-white/20 backdrop-blur-md my-2 flex flex-col w-full md:w-3/4 lg:w-1/2 gap-3 rounded-xl py-4 px-6 border border-zinc-400 text-white">
  <span class="text-md font-bold">
    {price.description.split(" - ")[0]}
  </span>
  <span class={price.description.split(" - ")[1] ? "text-sm" : "hidden"}>
    {price.description.split(" - ")[1]}
  </span>
  <span class={`${price.ascot ? 'line-through text-red-500 text-lg': 'text-3xl'}`}>
    £{price.ssp.toFixed(2)}
  </span>
  <div class={`${price.ascot ? 'text-3xl': 'hidden'}`}>
    {price.ascot && (
      `£${price.ascot.toFixed(2)}`
    )}
    <span class="float-right px-3 py-2 bg-orange-400 text-xs text-bold rounded">Show Deal!</span>
  </div>
</div>
