export const INTEGRATIONS = [
    {
        id: "html",
        title: "HTML",
        icon: "/languages/html5.svg",
    },

        {
        id: "react",
        title: "React",
        icon: "/languages/react.svg",
    },

        {
        id: "next.js",
        title: "Next.js",
        icon: "/languages/nextjs.svg",
    },

        {
        id: "javascript",
        title: "Javascript",
        icon: "/languages/javascript.svg",
    },
];

export type IntegrationId = (typeof INTEGRATIONS) [number]["id"];

export const HTML_SCRIPT = `<script src="http://localhost:3001/widget.js" data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const REACT_SCRIPT = `<script src="http://localhost:3001/widget.js" data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const NEXTJS_SCRIPT = `<script src="http://localhost:3001/widget.js" data-organization-id="{{ORGANIZATION_ID}}"></script>`;
export const JAVASCRIPT_SCRIPT = `<script src="http://localhost:3001/widget.js" data-organization-id="{{ORGANIZATION_ID}}"></script>`;