<template>
  <div>
    <h1>Main App</h1>
    <Dashboard />
  </div>
</template>

<script >
const Dashboard = defineAsyncComponent(() => import("dashboard/Lookup"));

export default {
  components: {
    Dashboard
  }
}
</script>

