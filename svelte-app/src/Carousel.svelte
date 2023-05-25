<script>
    let images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg'
    ];
  </script>
  
  <style>
    /* Estilos do carrossel */
  </style>
  
  <div class="carousel">
    {#each images as image}
      <img src={image} alt="Slide">
    {/each}
  </div>
  