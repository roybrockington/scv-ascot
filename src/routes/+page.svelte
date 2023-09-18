<script>
  import prices from '../prices.json'
  import { createSearchStore, searchHandler } from '$lib/stores/search'
  import {onDestroy } from 'svelte'
  import Product from '../components/Product.svelte'

  const searchProducts = prices.map((product) => ({
    ...product,
    searchTerms: `${product.description} ${product.sku} ${product.category}`
  }))

  const searchStore = createSearchStore(searchProducts)
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model))
  
  onDestroy(()=> {
    unsubscribe()
  })
</script>

<div class="flex flex-col w-full items-center">
  <h1 class="text-3xl my-5 font-bold text-center">
    Hello Ascot!
  </h1>
  <input type="search" placeholder="search products..." class="w-1/2" bind:value={$searchStore.search} />
</div>
<div class="flex flex-col w-full items-center px-3">
  {#each $searchStore.filtered as price}
    <Product {price} />
  {/each}
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
