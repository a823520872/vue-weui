<template>
    <div class="we-button">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'we-button',
    props: {
        type: String
    }
}
</script>

<style lang="scss">
.we-button {
    display: inline-block;
    padding: 3px 6px;
    background-color: #000;
    color: #fff;
}
</style>
