import type { PropType } from 'vue';
import type { Mode, Theme, VirtualScroll } from './types';
declare const _default: import("vue").DefineComponent<{
    mode: {
        type: PropType<Mode>;
        default: string;
    };
    theme: {
        type: PropType<Theme>;
        default: string;
    };
    language: {
        type: StringConstructor;
        default: string;
    };
    prev: {
        type: StringConstructor;
        default: string;
    };
    current: {
        type: StringConstructor;
        default: string;
    };
    folding: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputDelay: {
        type: NumberConstructor;
        default: number;
    };
    virtualScroll: {
        type: PropType<boolean | VirtualScroll>;
        default: boolean;
    };
}, {
    list: import("vue").ComputedRef<{
        index: number;
        foldable: boolean;
        visible: boolean;
        top?: number | undefined;
        height?: number | undefined;
    }[]>;
    meta: import("vue").Ref<{
        index: number;
        foldable: boolean;
        visible: boolean;
        top?: number | undefined;
        height?: number | undefined;
    }[]>;
    minHeight: import("vue").ComputedRef<string | undefined>;
    render: import("vue").Ref<{
        [x: string]: unknown;
        type?: string | undefined;
        lineNum?: number | undefined;
        value?: string | undefined;
        chkWords?: boolean | undefined;
    }[][]>;
    scrollOptions: import("vue").ComputedRef<false | {
        height: number;
        lineMinHeight: number;
        delay: number;
    }>;
    setLineHeight: (index: number, height: number) => void;
    viewer: import("vue").Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode?: unknown;
    theme?: unknown;
    language?: unknown;
    prev?: unknown;
    current?: unknown;
    folding?: unknown;
    inputDelay?: unknown;
    virtualScroll?: unknown;
} & {
    mode: Mode;
    theme: Theme;
    language: string;
    prev: string;
    current: string;
    folding: boolean;
    inputDelay: number;
    virtualScroll: boolean | VirtualScroll;
} & {}>, {
    mode: Mode;
    theme: Theme;
    language: string;
    prev: string;
    current: string;
    folding: boolean;
    inputDelay: number;
    virtualScroll: boolean | VirtualScroll;
}>;
export default _default;
