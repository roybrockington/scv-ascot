<script>
  import prices from '../prices.json'
  import Product from '../components/Product.svelte'
</script>
<div class="flex flex-col w-full items-center">
  <h1 class="text-3xl my-5 font-bold text-center">
    Hello Ascot!
  </h1>
  <input type="text" placeholder="search products..." class="w-1/2"/>
</div>
<div class="flex flex-col w-full items-center px-3">
  {#each prices as price}
    <Product {price} />
  {/each}
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
