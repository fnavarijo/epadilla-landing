<template>
  <!-- TODO: Move it to layout. Should not be absolute always -->
  <div class="px-16">
    <nav class="grid grid-cols-2 items-center">
      <img class="w-24" src="https://res.cloudinary.com/dkvtpo8w1/image/upload/v1660831973/MJ%20Portafolio/Epadilla/EP_Logo.png" alt="">
      <ul class="flex justify-self-end space-x-8">
        <li class="nav-item uppercase tracking-widest group">
          <span>Portafolio</span>
          <div class="nav-item-submenu h-0 overflow-y-hidden min-w-[10ch] relative transition-all duration-100 ease-linear">
            <ul class="pr-2 py-2 space-y-3 text-right border-r-2 border-black absolute right-0 bottom-0">
              <li class="text-sm">Bodas</li>
              <li class="text-sm">General</li>
            </ul>
          </div>
        </li>
        <li class="nav-item uppercase tracking-widest">Escríbeme</li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav-item {
  @apply relative transition-all duration-200 ease-fast-in;
}

.nav-item::before {
  content: '';
  @apply h-[2px] w-0 bg-black absolute -top-1 transition-all duration-100 ease-linear;
}

.nav-item:hover::before {
  @apply w-1/2;
}

.nav-item-submenu {
  /* 200% - for each element */
  /* 20px - spacing between list elements and padding of container */
  --submenu-height: calc(200% + 20px);
  @apply group-hover:h-[var(--submenu-height)];
}
</style>