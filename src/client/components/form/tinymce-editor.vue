<template lang="pug">
  .academy-editor
    //- ref: https://www.tiny.cloud/docs/configure/integration-and-setup/
    //- ref: https://stackoverflow.com/a/25233876/2780875
    editor(
      v-model="data[name]"
      api-key="234ds00dovxowmnuwjhba9m9pwkif7eksnvesgyqqedhp9un" 
      toolbar="image link bullist | codesample formatselect fontselect fontsizeselect | code" 
      :menubar="false" 
      :init="{height : 480, plugins: 'wordcount image autolink link lists codesample code', selector: 'textarea'}")
</template>


<script>
import vue from "vue"
import Editor from "@tinymce/tinymce-vue"

vue.component("editor", Editor)

const props = {
  name: {
    type: String,
    default: ""
  },
  data: {
    type: Object,
    default() {
      return {}
    }
  },
  onchange: {
    type: Function,
    default() {
      console.log("changed")
    }
  }
}

export default vue.extend({
  name: "tinymce-editor",
  props
})
</script>

