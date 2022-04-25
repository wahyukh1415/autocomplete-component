<template>
<div class="row">
  <div class="col-xl-4"></div>
  <div class="col-xl-3" style="align-self: center;">
    <div class="card mt-4">
      <div class="px-3 pt-3">
          <div class="row">
            <div class="col">
              <FormInputSearchLocation
                label="Async Search"
                placeholder="Type to Begin Search"
                v-model="location"
                @input="getLocationAsync"
              />
              <p class="px-0 pt-1">With description and custom results display</p>
            </div>
          </div>
      </div>
      <div class="px-3 pt-1">
          <div class="row">
            <div class="col">
              <FormInputSearchLocation
                label="Sync Search"
                placeholder="Type to Begin Search"
                v-model="location"
                @input="getLocationSync"
              />
              <p class="px-0 pt-1">With default display and search on focus</p>
            </div>
          </div>
      </div>
  </div>
  </div>
  <div class="col-xl-4"></div>
</div>
</template>

<script>
import FormInputSearchLocation from '../components/Form/FormInputSearchLocation.vue'
import { search } from '@/services/LocationService'
import { ref } from 'vue'

export default {
    components: {
        FormInputSearchLocation,
    },
    data: function () {
        return {
            location: ref({}),
        }
    },
    mounted(){

    },
    methods:{
        getLocationSync: function(){
            var param ={
                keyword : this.location.name
            }
            search(param).then((response) => {

            })
        },
        async getLocationAsync(){
            var param ={
                keyword : this.location.name
            }
            search(param).then((response) => {

            })
        },
    }
}
</script>

<style scoped>
.container, .row {
  height: 100%;
}
</style>