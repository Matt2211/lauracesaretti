<template>
  <div class="border rounded p-4" :class="{'bg-info' : checked === true}">
    <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      @change="checked = !checked"
      :checked="checked"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",

  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: true,
      default: true,
    },
    checked: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>
