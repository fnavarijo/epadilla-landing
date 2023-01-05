<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import GalleryMasonry from '~/components/Gallery/GalleryMasonry.vue';
import GalleryViewer from '~/components/Gallery/GalleryViewer.vue';
import PortfolioEmpty from '~/components/Portfolio/PortfolioEmpty.vue';

import { getTitleFromId } from '~~/lib/gallery/title';

const isViewerOpen = ref(false);
const imageViewedIndex = ref(0);
const galleryImages = ref([]);

const { params } = useRoute();

/**
 * Page: Config
 */
definePageMeta({
  pageTransition: {
    name: 'slide-left',
  },
});

/**
 * Page: Fetch Data
 */
const projectTitle = getTitleFromId(params.id);

const { data: project, pending } = await useAsyncData(`gallery_${projectTitle}`, () =>
  queryContent('projects').where({ title: projectTitle }).only(['name', 'gallery']).findOne()
);

if (!project.value.name && !pending.value) {
  showError({
    statusCode: 404,
    statusMessage: 'Gallery not found',
  });
}

/**
 * Page: Functions
 */
function openImageOnViewer(position) {
  imageViewedIndex.value = position;
  isViewerOpen.value = true;

  document.body.style.overflow = 'hidden';
}

function closeViewer() {
  isViewerOpen.value = false;
  document.body.style.overflow = 'auto';
}

function getImagesChunks(images = [], size) {
  if (images.length === 0) return [];

  let baseImages = images.slice();
  const chunks = [];

  while (baseImages.length > size) {
    const chunk = baseImages.slice(0, size);
    chunks.push(chunk);

    baseImages = baseImages.slice(size);
  }

  chunks.push(baseImages);
  return chunks;
}

galleryImages.value = getImagesChunks(project.value.gallery, 5);
</script>

<template>
  <article class="mt-32 max-w-7xl mx-auto px-8 pb-8">
    <header class="flex items-center">
      <NuxtLink :to="`/portfolio/${params.name}`" class="relative category-breadcrumb">
        <!-- <h1 class="text-3xl md:text-5xl text-black uppercase">{{ params.name }}</h1> -->
        <h1 class="text-3xl md:text-5xl text-black uppercase">Regresar</h1>
      </NuxtLink>
      <span class="h-3 w-3 bg-black rounded-full ml-3"></span>
      <span class="ml-8 text-2xl uppercase">{{ project.name }}</span>
    </header>
    <div class="mt-8" v-if="galleryImages.length">
      <GalleryMasonry
        v-for="(images, groupIndex) in galleryImages"
        :key="groupIndex"
        :images="images"
        :offset-index="groupIndex * 5"
        @view="openImageOnViewer"
      />
    </div>
    <PortfolioEmpty class="mt-8" v-else />
    <Transition>
      <GalleryViewer
        v-show="isViewerOpen"
        @close="closeViewer"
        :images="project.gallery"
        :viewed-image="imageViewedIndex"
      />
    </Transition>
  </article>
</template>

<style scoped>
.category-breadcrumb {
  @apply after:content-[''] after:h-1 after:bg-black after:absolute after:-bottom-2 after:w-0 hover:after:w-full after:transition-all after:duration-100 after:ease-fast-in;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
