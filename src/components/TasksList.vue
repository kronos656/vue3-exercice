<template>
  <div class="greetings">
    <h1 class="green">Ma todo list</h1>
    <div>
      <ul>
        <li><span>Trouver une super idée d'app</span><div class="en-cours"></div></li>
        <li><span>Créer un compte Github</span><div class="finie"></div></li>
        <li><span>Créer un nouveau projet</span><div class="a-faire"></div></li>
        <li><span>Alimenter mon projet de nouvelles features</span><div class="a-faire"></div></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
}

.a-faire {
  width: 1rem;
  height: 1rem;
  background-color: grey;
}

.en-cours {
  width: 1rem;
  height: 1rem;
  background-color: yellow;
}

.finie {
  width: 1rem;
  height: 1rem;
  background-color: green;
}

</style>
