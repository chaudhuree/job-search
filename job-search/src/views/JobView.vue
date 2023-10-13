<template>
  <div v-if="job">
    <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
        <h2 class="mb-2 text-2xl">
          {{ job.title }}
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="mr-5 inline-block"
              >
                <span>{{ location }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div class="mt-2 text-center">
          <router-link to="/jobs/results" class="text-brand-blue-1"
            >Go to jobs page</router-link
          >
        </div>
    </div>

  </div>
</template>

<script setup>
import { computed,onMounted,ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const currentJobId = computed(() => route.params.id);
const job=ref({});
const getJob=async()=>{
  const {data}=await axios.get(`http://localhost:3000/jobs/${currentJobId.value}`);
  job.value=data;
}
onMounted(getJob)
// export default {
//   name: "JobView",
//   computed: {
//     currentJobId() {
//       return this.$route.params.id;
//     },
//   },
// };
</script>
