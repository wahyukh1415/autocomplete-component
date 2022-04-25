<script setup>
import { computed, ref } from 'vue'
import VueMultiselect from 'vue-multiselect'
import { useDebounceFn } from '@vueuse/core'
import { search } from '@/services/LocationService'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Object,
    default: () => {},
  },
  placeholder: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v)
})
const options = ref([])

const doSearch = useDebounceFn((query) => {
  if (query.length < 3) return
  search(query).then(({ data }) => {
    data?.data?.data?.forEach((region) => {
      options.value.push({
        name: region.name,
        value: {
          province: region?.city?.province?.id,
          city: region?.city?.id,
          district: region?.id
        },
      })
    })
  })
}, 1000)
</script>

<template>
  <label class="form-label">{{ props.label }}</label>
  <div class="flex">
    <div>
      <span class="input-group-text" id="basic-addon1">
        <img src="../../assets/img/search.svg" alt="">
      </span>
    </div>
    <div class="form">
      <VueMultiselect
        v-model="model"
        :options="options"
        track-by="name"
        label="name"
        :searchable="true"
        :allow-empty="false"
        :placeholder="props.placeholder"
        @search-change="doSearch"
      >
        <template #noResult>Not Found</template>
      </VueMultiselect>
    </div>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="scss" scoped>
.input-group-text{
  width: 40px;
  height: 40px;
  background: transparent;
  border-right-color: unset;
}
.flex{
  display: flex;
}
.form{
  width: -webkit-fill-available;
}
</style>