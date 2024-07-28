<template>
  <div class="catalog-wrapper">
    <HeaderWithLogo />
    <SearchInput class="catalog-search" />
    <div class="catalog-filters-wrapper">
      <div class="catalog-result">
        Results "<span class="catalog-result-text">{{ resultText }}</span
        >"
      </div>
      <div class="filters">
        <CustomSelect :options="options" v-model="selectedOption" />
        <FilterSelect :options="filterOptions" v-model="selectedFilter" />
      </div>
    </div>
    <div class="catalog-line"></div>
    <!-- <SellBookSection class="catalog-sell-book" CategoryType="" /> -->
    <NotFound />
    <FooterSection class="catalog-footer" />
  </div>
</template>

<script>
import HeaderWithLogo from '@/sections/HeaderWithLogo.vue'
import SearchInput from '@/components/SearchInput.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import FilterSelect from '@/components/FilterSelect.vue'
// import SellBookSection from '@/sections/SellBookSection.vue'
import NotFound from '@/components/NotFound.vue'
import FooterSection from '@/sections/FooterSection.vue'

export default {
  name: 'CatalogPage',
  components: {
    HeaderWithLogo,
    SearchInput,
    CustomSelect,
    FilterSelect,
    // SellBookSection,
    NotFound,
    FooterSection
  },
  data() {
    return {
      resultText: '',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ],
      selectedOption: null,
      filterOptions: [
        { value: 'filter1', label: 'Filter 1' },
        { value: 'filter2', label: 'Filter 2' }
      ],
      selectedFilter: null,
      resultText: 'Neuromancer William Gibson'
    }
  },
  methods: {
    updateResultText() {
      this.resultText = this.selectedOption?.label || this.selectedFilter?.label || ''
    }
  }
}
</script>

<style scoped>
.catalog-search {
  justify-content: center;
}
.catalog-filters-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 66px;
  text-align: center;
  align-items: center;
}
.catalog-result {
  font-family: var(--unica);
  font-weight: 400;
  color: var(--gray-600);
  font-size: 24px;
  text-transform: uppercase;
}
.catalog-result-text {
  color: var(--blue-500);
}
.filters {
  display: flex;
  gap: 23px;
  z-index: 0;
}
.catalog-line {
  border-top: 2px dashed var(--gray-600);
  margin-top: 35px;
}
.catalog-sell-book {
  margin-top: 70px;
}
.catalog-footer {
  margin-top: 220px;
}
</style>
