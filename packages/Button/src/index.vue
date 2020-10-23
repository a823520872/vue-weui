<template>
    <div class="weui-btn" :class="[typeClass, disabledClass, loadingClass, longClass]">
        <i v-if="loading" class="weui-loading"></i>
        <slot></slot>
    </div>
</template>

<script>
const prevCls = 'weui-btn'
export default {
    name: 'we-button',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'default'
        },
        disabled: Boolean,
        loading: Boolean,
        long: Boolean
    },
    computed: {
        typeClass() {
            return `${prevCls}_${this.type}`
        },
        sizeClass() {
            return this.size ? `${prevCls}_${this.size}` : ''
        },
        disabledClass() {
            return this.disabled ? `${prevCls}_disabled` : ''
        },
        loadingClass() {
            return this.loading ? `${prevCls}_loading` : ''
        },
        longClass() {
            return this.long ? `${prevCls}_long` : ''
        }
    }
}
</script>

<style lang="scss">
.weui-btn {
    --weui-BG-0: #ededed;
    --weui-BG-1: #f7f7f7;
    --weui-BG-2: #fff;
    --weui-BG-3: #f7f7f7;
    --weui-BG-4: #4c4c4c;
    --weui-BG-5: #fff;
    --weui-FG-0: rgba(0, 0, 0, 0.9);
    --weui-FG-HALF: rgba(0, 0, 0, 0.9);
    --weui-FG-1: rgba(0, 0, 0, 0.5);
    --weui-FG-2: rgba(0, 0, 0, 0.3);
    --weui-FG-3: rgba(0, 0, 0, 0.1);
    --weui-RED: #fa5151;
    --weui-ORANGE: #fa9d3b;
    --weui-YELLOW: #ffc300;
    --weui-GREEN: #91d300;
    --weui-LIGHTGREEN: #95ec69;
    --weui-BRAND: #07c160;
    --weui-BLUE: #10aeff;
    --weui-INDIGO: #1485ee;
    --weui-PURPLE: #6467f0;
    --weui-WHITE: #fff;
    --weui-LINK: #576b95;
    --weui-TEXTGREEN: #06ae56;
    --weui-FG: black;
    --weui-BG: white;
    --weui-TAG-TEXT-ORANGE: #fa9d3b;
    --weui-TAG-BACKGROUND-ORANGE: rgba(250, 157, 59, 0.1);
    --weui-TAG-TEXT-GREEN: #06ae56;
    --weui-TAG-BACKGROUND-GREEN: rgba(6, 174, 86, 0.1);
    --weui-TAG-TEXT-BLUE: #10aeff;
    --weui-TAG-BACKGROUND-BLUE: rgba(16, 174, 255, 0.1);
    --weui-TAG-TEXT-BLACK: rgba(0, 0, 0, 0.5);
    --weui-TAG-BACKGROUND-BLACK: rgba(0, 0, 0, 0.05);
    position: relative;
    display: block;
    width: 184px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 24px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 17px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    line-height: 1.41176471;
    border-radius: 4px;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:not(.weui-btn_mini) + .weui-btn:not(.weui-btn_mini) {
        margin-top: 16px;
    }
}
.weui-btn_mini {
    display: inline-block;
    width: auto;
    padding: 0 0.75em;
    line-height: 2;
    font-size: 16px;
}
.weui-btn_default {
    background-color: #e6e6e6;
    background-color: var(--weui-BTN-DEFAULT-ACTIVE-BG);
    &.weui-btn_loading {
        background-color: #e6e6e6;
        background-color: var(--weui-BTN-DEFAULT-ACTIVE-BG);
    }
    &:not(.weui-btn_disabled):visited {
        color: #06ae56;
        color: var(--weui-BTN-DEFAULT-COLOR);
    }
}
.weui-btn_warn {
    color: #fa5151;
    color: var(--weui-RED);
    background-color: #f2f2f2;
    background-color: var(--weui-BTN-DEFAULT-BG);
    &.weui-btn_loading {
        background-color: #e6e6e6;
        background-color: var(--weui-BTN-DEFAULT-ACTIVE-BG);
    }
    &:not(.weui-btn_disabled):visited {
        color: #fa5151;
        color: var(--weui-RED);
    }
}
.weui-btn_primary {
    background-color: #07c160;
    background-color: var(--weui-BRAND);

    &.we-btn_loading {
        background-color: #06ae56;
        background-color: var(--weui-TAG-TEXT-GREEN);
        color: #fff;
        color: var(--weui-WHITE);
        
        .weui-loading {
            background-image: url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' …255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E");
        }
    }
    &:not(.weui-btn_disabled):visited {
        color: #fff;
    }
}
.weui-btn_disabled {
    color: rgba(0, 0, 0, 0.2);
    color: var(--weui-BTN-DISABLED-FONT-COLOR);
    background-color: #f2f2f2;
    background-color: var(--weui-BTN-DEFAULT-BG);
}
.weui-loading {
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    animation: weuiLoading 1s steps(12, end) infinite;
    background: transparent
        url('data:image/svg+xml;charset=utf8, %3Csvg xmlns=http://www.w3.org/2000/svg width=120 height=120 viewBox=0 0 100 100%3E%3Cpath fill=none d=M0 0h100v100H0z/%3E%3Crect width=7 height=20 x=46.5 y=40 fill=%23E9E9E9 rx=5 ry=50 -30/%3E%3C/svg%3E')
        no-repeat;
    background-size: 100%;
}
@keyframes weuiLoading {
    0% {
        -webkit-transform: rotate3d(0, 0, 1, 0deg);
        transform: rotate3d(0, 0, 1, 0deg);
    }
    100% {
        -webkit-transform: rotate3d(0, 0, 1, 360deg);
        transform: rotate3d(0, 0, 1, 360deg);
    }
}
</style>
