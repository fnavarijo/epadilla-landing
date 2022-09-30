<script setup>
// TODO: I know I can improve this. Need to think about something.
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
});

let imagePointer = 0;
const colsLength = [2, 3, 1];

const gridColumns = colsLength.reduce((columns, length) => {
  const lastColumn = columns[columns.length - 1];

  const currentPosition = lastColumn
    ? { position: lastColumn.position + lastColumn.length, length }
    : { position: 1, length };

  return columns.concat(currentPosition);
}, []);

const gridCellsRows = [
  [{ class: 'block-1' }],
  [{ class: 'block-2' }, { class: 'block-3' }],
  [{ class: 'block-4' }, { class: 'block-5' }],
];

const gridCells = gridCellsRows.map((gridCellRow, index) => {
  const { position, length } = gridColumns[index];
  return gridCellRow.map((gridCell) => ({
    ...gridCell,
    style: { 'grid-column': `${position} / span ${length}` },
  }));
});

function getImage() {
  return props.images[imagePointer++];
}
</script>

<template>
  <div class="masonry mt-3">
    <template v-for="(cellClasses, index) in gridCells" :key="index">
      <template v-for="(cellClass, innerIndex) in cellClasses" :key="innerIndex">
        <div
          class="w-full h-full bg-no-repeat bg-cover bg-center"
          :class="cellClass.class"
          :style="{
            ...cellClass.style,
            backgroundImage: `url(${getImage()})`,
          }"
          @click="$emit('click')"
        ></div>
      </template>
    </template>
  </div>
</template>

<style scoped>
.masonry {
  @apply grid grid-cols-6 grid-rows-masonry gap-3;
}

.block-1 {
  @apply row-[1_/_span_3];
}

.block-2 {
  @apply row-[1_/_span_2];
}

.block-3 {
  @apply row-start-3;
}

.block-4 {
  @apply row-span-1;
}

.block-5 {
  @apply row-[2_/_span_2];
}
</style>
