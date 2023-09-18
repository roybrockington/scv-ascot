<script lang="ts">
  import prices from '../prices.json'
  import { createSearchStore, searchHandler } from '$lib/stores/search'
  import { onDestroy } from 'svelte'
  import type { PageData } from './$types'
  import Product from '../components/Product.svelte'
  import Logo from '../components/Logo.svelte'

  type Product = {
    title: string
    description: string
    ssp: number
    ascot: number
    category: string
    searchTerms: string
  }

  const searchProducts: Product[] = prices.map((product: Product) => ({
    ...product,
    searchTerms: `${product.description} ${product.sku} ${product.category}`
  }))

  const searchStore = createSearchStore(searchProducts)
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model))
  
  onDestroy(()=> {
    unsubscribe()
  })

</script>

<div class="
  flex
  flex-col
  w-full
  items-center
  back-drop
  "
>

  <h1 class="text-3xl my-5 font-bold text-center">
    <Logo />
  </h1>
  <input
    type="search"
    placeholder="Search products..."
    class="w-1/2 mx-4 p-2 rounded-xl border-zinc-400"
    bind:value={$searchStore.search}
  />
  <div class="flex flex-col w-full items-center px-3 mt-4">
    {#each $searchStore.filtered as price}
      <Product {price} />
    {/each}
  </div>
</div>
<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
  
  .back-drop {
    background-color: #000;
    background-image: linear-gradient(
      to bottom, transparent, #000
    ), url("https://hifishowlive.com/sites/default/files/slider/homeimage1a.jpg");
    background-repeat: no-repeat;
  }
</style>
