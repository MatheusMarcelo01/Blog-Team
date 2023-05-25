 
<script>
  import { Carousel, Slide } from 'svelte-carousel';

  // Exemplo de dados do carrossel
  const slides = [
    { image: 'image1.jpg', caption: 'Legenda 1' },
    { image: 'image2.jpg', caption: 'Legenda 2' },
    { image: 'image3.jpg', caption: 'Legenda 3' },
  ];
</script>

<Carousel>
  {#each slides as slide}
    <Slide>
      <img src={slide.image} alt={slide.caption} />
      <p>{slide.caption}</p>
    </Slide>
  {/each}
</Carousel>

<style>
  /* Estilos personalizados para o carrossel */
</style>
