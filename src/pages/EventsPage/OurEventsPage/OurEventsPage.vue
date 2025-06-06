<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">OUR</h1>
      <p class="hero-subtitle">EVENTS</p>
    </div>
  </section>

  <section class="pagination-container">
    <div v-if="items.length > 0" class="grid-container">
      <div v-for="(item, index) in displayedItems" :key="index" class="grid-item">
        <img
          :src="item.image"
          :alt="item.title"
          class="item-image"
          @error="handleImageError($event, index)"
          @load="handleImageLoad($event, index)"
        />
        <h3 class="item-title">{{ item.title }}</h3>
        <p class="item-subtitle">{{ item.subtitle }}</p>
      </div>
    </div>
    <div v-else class="loading-state">Loading events...</div>

    <div v-if="items.length > 0" class="pagination-controls">
      <div class="pagination-info">
        <div
          v-for="page in totalPages"
          :key="page"
          class="current-page"
          :class="{ active: currentPage === page }"
          @click="changePage(page)"
        >
          {{ page }}
        </div>
      </div>
      <div class="pagination-buttons">
        <span class="page-text">Page {{ currentPage }} out of {{ totalPages }}</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'OurEventsPage',
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      items: [] as Array<{
        image: string;
        title: string;
        subtitle: string;
      }>,
      totalPages: 2,
      imageLoadErrors: [] as number[],
      fallbackImage: '',
    };
  },
  async created() {
    try {
      const [baristaSeminar, grandOpening, softOpening, baristaPremium, exp1, exp2, eventsBg] =
        await Promise.all([
          import('../../../assets/background-images/soft-opening-bg.png'),
          import('../../../assets/background-images/grand-opening-bg.png'),
          import('../../../assets/background-images/playall-bg.png'),
          import('../../../assets/background-images/barista-seminar-bg.png'),
          import('../../../assets/background-images/drink-all-bg.png'),
          import('../../../assets/background-images/food-drinks-bg.png'),
          import('../../../assets/background-images/events-bg.png'),
        ]);

      this.fallbackImage = eventsBg.default;

      this.items = [
        {
          image: baristaSeminar.default,
          title: 'Soft Opening',
          subtitle: 'March 22, 2025',
        },
        {
          image: grandOpening.default,
          title: 'Grand Opening',
          subtitle: 'March 22, 2025',
        },
        {
          image: softOpening.default,
          title: 'Play All You Want',
          subtitle: 'March 22, 2025',
        },
        {
          image: baristaPremium.default,
          title: 'Barista Seminar',
          subtitle: 'March 22, 2025',
        },
        {
          image: exp1.default,
          title: 'Drink All You Can',
          subtitle: 'March 22, 2025',
        },
        {
          image: exp2.default,
          title: 'Food Tasting',
          subtitle: 'March 22, 2025',
        },
      ];
    } catch (error) {
      console.error('Error loading images:', error);
    }
  },
  computed: {
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    },
  },
  methods: {
    changePage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    handleImageError(event: Event, index: number) {
      console.error(`Failed to load image for item ${index}:`, event);
      this.imageLoadErrors.push(index);
      // Set a default image or placeholder
      const imgElement = event.target as HTMLImageElement;
      if (this.fallbackImage) {
        imgElement.src = this.fallbackImage;
      }
    },
    handleImageLoad(event: Event, index: number) {
      console.log(`Successfully loaded image for item ${index}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './OurEventsPage.scss';
</style>
