<script lang="ts">
  import prices from '../prices.json'
  import { createSearchStore, searchHandler } from '$lib/stores/search'
  import { onDestroy } from 'svelte'
  import type { PageData } from './$types'
  import Product from '../components/Product.svelte'
  import Logo from '../scvgrand.png'

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
  min-h-screen
  bg-fixed
  "
>
  <img src={Logo} class="w-1/4 my-3" alt="SCV Grand National" />
  <div class="flex flex-col w-full items-center px-3">
  <input
    type="search"
    autocomplete="off"
    placeholder="Search products..."
    class="w-full md:w-1/2 p-2 border-zinc-400 focus:outline-none flex mb-4"
    bind:value={$searchStore.search}
  />
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
