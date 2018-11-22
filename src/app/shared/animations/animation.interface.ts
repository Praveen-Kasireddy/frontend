export interface AnimationStyleProps {
    [prop: string]: string;
}

export interface AnimationFromTo {
    from?: AnimationStyleProps;
    to?: AnimationStyleProps;
}
