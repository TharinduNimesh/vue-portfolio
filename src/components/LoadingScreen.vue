<template>
    <section 
        class="fixed duration-300 w-full bg-white h-screen flex justify-center items-center z-50"
        :class="{
            'opacity-100': isLoading,
            'opacity-0 !-z-10': !isLoading,
        }"
    >
        <img src="/img/loading.gif" class="w-60" />
    </section>
</template>

<script>
export default {
    name: 'LoadingScreen',
    props: ['isDark', 'isLoading'],
}
</script>
