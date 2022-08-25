<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const { params } = useRoute();

const colsSpan = [2, 3, 1];

const colsPosition = colsSpan.reduce((positions, span) => {
  const lastPosition = positions[positions.length - 1];

  const currentPosition = lastPosition
    ? { position: lastPosition.position + lastPosition.length, length: span }
    : { position: 1, length: span };

  positions.push(currentPosition);
  return positions;
}, []);

const gridCellsRows = [
  [{ class: 'block-1' }],
  [{ class: 'block-4' }, { class: 'block-5' }],
  [{ class: 'block-2' }, { class: 'block-3' }],
];

const gridCells = gridCellsRows.map((gridCellRow, index) => {
  const { position, length } = colsPosition[index];
  return gridCellRow.map((gridCell) => ({
    ...gridCell,
    style: { 'grid-column': `${position} / span ${length}` },
  }));
});
</script>

<template>
  <article class="mt-32 max-w-7xl mx-auto px-8">
    <header class="flex items-center">
      <h1 class="text-3xl md:text-5xl text-black uppercase">{{ params.name }}</h1>
      <span class="h-3 w-3 bg-black rounded-full ml-3"></span>
      <span class="ml-8 text-2xl uppercase">Lopez Perez</span>
    </header>
    <div class="masonry mt-4">
      <template v-for="(cellClasses, index) in gridCells" :key="index">
        <template v-for="(cellClass, index) in cellClasses" :key="index">
          <div class="w-full h-full bg-cyan-600" :class="cellClass.class" :style="cellClass.style">
            a
          </div>
        </template>
      </template>
    </div>
  </article>
</template>

<style scoped>
.masonry {
  @apply grid grid-cols-6 grid-rows-masonry gap-3;
}

.block-1 {
  @apply row-[1_/_span_3];
}

.block-2 {
  @apply row-span-1;
}

.block-3 {
  @apply row-[2_/_span_2];
}

.block-4 {
  @apply row-[1_/_span_2];
}

.block-5 {
  @apply row-start-3;
}
</style>
