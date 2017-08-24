<template>
  <div class="api-table">
    <x-table :data="data" class="x-text-align-r">
      <x-table-column v-for="(item, index) in keys" :key="index" :name="item.name" :label="item.label"></x-table-column> 
    </x-table>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        required: true
      },
      keys: {
        type: Array,
        required: true
      }
    }
  }
</script>

