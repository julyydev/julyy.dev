/// <reference types="next" />

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default ReactComponent;
}

declare module '*.png' {
    const content: import('../dist/client/image').StaticImageData;

    export default content;
}

declare module '*.jpeg' {
    const content: import('../dist/client/image').StaticImageData;

    export default content;
}
