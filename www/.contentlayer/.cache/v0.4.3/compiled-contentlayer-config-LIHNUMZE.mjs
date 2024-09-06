// contentlayer.config.js
import path2 from "path";
import { getHighlighter, loadTheme } from "@shikijs/compat";
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { visit as visit3 } from "unist-util-visit";

// lib/rehype-component.ts
import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// __registry__/index.tsx
import * as React from "react";
var Index = {
  "new-york": {
    "accordion": {
      name: "accordion",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/accordion.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/accordion.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "alert": {
      name: "alert",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/alert.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/alert.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "alert-dialog": {
      name: "alert-dialog",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: ["registry/new-york/ui/alert-dialog.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/alert-dialog.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "aspect-ratio": {
      name: "aspect-ratio",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/aspect-ratio.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/aspect-ratio.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "avatar": {
      name: "avatar",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/avatar.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/avatar.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "badge": {
      name: "badge",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/badge.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/badge.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb": {
      name: "breadcrumb",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/breadcrumb.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/breadcrumb.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button": {
      name: "button",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/button.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/button.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "calendar": {
      name: "calendar",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: ["registry/new-york/ui/calendar.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/calendar.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "card": {
      name: "card",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/card.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/card.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel": {
      name: "carousel",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: ["registry/new-york/ui/carousel.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/carousel.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart": {
      name: "chart",
      type: "registry:ui",
      registryDependencies: ["card"],
      files: ["registry/new-york/ui/chart.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/chart.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox": {
      name: "checkbox",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/checkbox.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/checkbox.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "collapsible": {
      name: "collapsible",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/collapsible.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/collapsible.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "command": {
      name: "command",
      type: "registry:ui",
      registryDependencies: ["dialog"],
      files: ["registry/new-york/ui/command.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/command.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "context-menu": {
      name: "context-menu",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/context-menu.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/context-menu.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dialog": {
      name: "dialog",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/dialog.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/dialog.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "drawer": {
      name: "drawer",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/drawer.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/drawer.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dropdown-menu": {
      name: "dropdown-menu",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/dropdown-menu.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/dropdown-menu.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "form": {
      name: "form",
      type: "registry:ui",
      registryDependencies: ["button", "label"],
      files: ["registry/new-york/ui/form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "hover-card": {
      name: "hover-card",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/hover-card.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/hover-card.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input": {
      name: "input",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/input.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/input.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp": {
      name: "input-otp",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/input-otp.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/input-otp.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "label": {
      name: "label",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/label.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/label.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "menubar": {
      name: "menubar",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/menubar.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/menubar.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "navigation-menu": {
      name: "navigation-menu",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/navigation-menu.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/navigation-menu.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "pagination": {
      name: "pagination",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: ["registry/new-york/ui/pagination.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/pagination.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "popover": {
      name: "popover",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/popover.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/popover.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "progress": {
      name: "progress",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/progress.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/progress.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "radio-group": {
      name: "radio-group",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/radio-group.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/radio-group.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "resizable": {
      name: "resizable",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/resizable.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/resizable.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "scroll-area": {
      name: "scroll-area",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/scroll-area.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/scroll-area.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "select": {
      name: "select",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/select.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/select.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "separator": {
      name: "separator",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/separator.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/separator.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sheet": {
      name: "sheet",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/sheet.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/sheet.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "skeleton": {
      name: "skeleton",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/skeleton.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/skeleton.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "slider": {
      name: "slider",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/slider.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/slider.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sonner": {
      name: "sonner",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/sonner.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/sonner.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "switch": {
      name: "switch",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/switch.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/switch.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "table": {
      name: "table",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/table.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/table.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "tabs": {
      name: "tabs",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/tabs.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/tabs.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea": {
      name: "textarea",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/textarea.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/textarea.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast": {
      name: "toast",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/toast.tsx", "registry/new-york/hooks/use-toast.ts", "registry/new-york/ui/toaster.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/toast.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle": {
      name: "toggle",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/toggle.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/toggle.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group": {
      name: "toggle-group",
      type: "registry:ui",
      registryDependencies: ["toggle"],
      files: ["registry/new-york/ui/toggle-group.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/toggle-group.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "tooltip": {
      name: "tooltip",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/new-york/ui/tooltip.tsx"],
      component: React.lazy(() => import("@/registry/new-york/ui/tooltip.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "accordion-demo": {
      name: "accordion-demo",
      type: "registry:example",
      registryDependencies: ["accordion"],
      files: ["registry/new-york/example/accordion-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/accordion-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "alert-demo": {
      name: "alert-demo",
      type: "registry:example",
      registryDependencies: ["alert"],
      files: ["registry/new-york/example/alert-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/alert-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "alert-destructive": {
      name: "alert-destructive",
      type: "registry:example",
      registryDependencies: ["alert"],
      files: ["registry/new-york/example/alert-destructive.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/alert-destructive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "alert-dialog-demo": {
      name: "alert-dialog-demo",
      type: "registry:example",
      registryDependencies: ["alert-dialog", "button"],
      files: ["registry/new-york/example/alert-dialog-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/alert-dialog-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "aspect-ratio-demo": {
      name: "aspect-ratio-demo",
      type: "registry:example",
      registryDependencies: ["aspect-ratio"],
      files: ["registry/new-york/example/aspect-ratio-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/aspect-ratio-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "avatar-demo": {
      name: "avatar-demo",
      type: "registry:example",
      registryDependencies: ["avatar"],
      files: ["registry/new-york/example/avatar-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/avatar-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "badge-demo": {
      name: "badge-demo",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: ["registry/new-york/example/badge-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/badge-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "badge-destructive": {
      name: "badge-destructive",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: ["registry/new-york/example/badge-destructive.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/badge-destructive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "badge-outline": {
      name: "badge-outline",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: ["registry/new-york/example/badge-outline.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/badge-outline.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "badge-secondary": {
      name: "badge-secondary",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: ["registry/new-york/example/badge-secondary.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/badge-secondary.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-demo": {
      name: "breadcrumb-demo",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/new-york/example/breadcrumb-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/breadcrumb-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-separator": {
      name: "breadcrumb-separator",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/new-york/example/breadcrumb-separator.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/breadcrumb-separator.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-dropdown": {
      name: "breadcrumb-dropdown",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/new-york/example/breadcrumb-dropdown.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/breadcrumb-dropdown.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-ellipsis": {
      name: "breadcrumb-ellipsis",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/new-york/example/breadcrumb-ellipsis.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/breadcrumb-ellipsis.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-link": {
      name: "breadcrumb-link",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/new-york/example/breadcrumb-link.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/breadcrumb-link.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-responsive": {
      name: "breadcrumb-responsive",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/new-york/example/breadcrumb-responsive.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/breadcrumb-responsive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-demo": {
      name: "button-demo",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/new-york/example/button-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/button-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-secondary": {
      name: "button-secondary",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/new-york/example/button-secondary.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/button-secondary.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-destructive": {
      name: "button-destructive",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/new-york/example/button-destructive.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/button-destructive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-outline": {
      name: "button-outline",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/new-york/example/button-outline.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/button-outline.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-ghost": {
      name: "button-ghost",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/new-york/example/button-ghost.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/button-ghost.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-link": {
      name: "button-link",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/new-york/example/button-link.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/button-link.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-with-icon": {
      name: "button-with-icon",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/new-york/example/button-with-icon.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/button-with-icon.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-loading": {
      name: "button-loading",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/new-york/example/button-loading.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/button-loading.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-icon": {
      name: "button-icon",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/new-york/example/button-icon.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/button-icon.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-as-child": {
      name: "button-as-child",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/new-york/example/button-as-child.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/button-as-child.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "calendar-demo": {
      name: "calendar-demo",
      type: "registry:example",
      registryDependencies: ["calendar"],
      files: ["registry/new-york/example/calendar-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/calendar-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "calendar-form": {
      name: "calendar-form",
      type: "registry:example",
      registryDependencies: ["calendar", "form", "popover"],
      files: ["registry/new-york/example/calendar-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/calendar-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "card-demo": {
      name: "card-demo",
      type: "registry:example",
      registryDependencies: ["card", "button", "switch"],
      files: ["registry/new-york/example/card-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/card-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "card-with-form": {
      name: "card-with-form",
      type: "registry:example",
      registryDependencies: ["button", "card", "input", "label", "select"],
      files: ["registry/new-york/example/card-with-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/card-with-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-demo": {
      name: "carousel-demo",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/new-york/example/carousel-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/carousel-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-size": {
      name: "carousel-size",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/new-york/example/carousel-size.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/carousel-size.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-spacing": {
      name: "carousel-spacing",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/new-york/example/carousel-spacing.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/carousel-spacing.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-orientation": {
      name: "carousel-orientation",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/new-york/example/carousel-orientation.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/carousel-orientation.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-api": {
      name: "carousel-api",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/new-york/example/carousel-api.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/carousel-api.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-plugin": {
      name: "carousel-plugin",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/new-york/example/carousel-plugin.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/carousel-plugin.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox-demo": {
      name: "checkbox-demo",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: ["registry/new-york/example/checkbox-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/checkbox-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox-disabled": {
      name: "checkbox-disabled",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: ["registry/new-york/example/checkbox-disabled.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/checkbox-disabled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox-form-multiple": {
      name: "checkbox-form-multiple",
      type: "registry:example",
      registryDependencies: ["checkbox", "form"],
      files: ["registry/new-york/example/checkbox-form-multiple.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/checkbox-form-multiple.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox-form-single": {
      name: "checkbox-form-single",
      type: "registry:example",
      registryDependencies: ["checkbox", "form"],
      files: ["registry/new-york/example/checkbox-form-single.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/checkbox-form-single.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox-with-text": {
      name: "checkbox-with-text",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: ["registry/new-york/example/checkbox-with-text.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/checkbox-with-text.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "collapsible-demo": {
      name: "collapsible-demo",
      type: "registry:example",
      registryDependencies: ["collapsible"],
      files: ["registry/new-york/example/collapsible-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/collapsible-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "combobox-demo": {
      name: "combobox-demo",
      type: "registry:example",
      registryDependencies: ["command"],
      files: ["registry/new-york/example/combobox-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/combobox-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "combobox-dropdown-menu": {
      name: "combobox-dropdown-menu",
      type: "registry:example",
      registryDependencies: ["command", "dropdown-menu", "button"],
      files: ["registry/new-york/example/combobox-dropdown-menu.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/combobox-dropdown-menu.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "combobox-form": {
      name: "combobox-form",
      type: "registry:example",
      registryDependencies: ["command", "form"],
      files: ["registry/new-york/example/combobox-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/combobox-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "combobox-popover": {
      name: "combobox-popover",
      type: "registry:example",
      registryDependencies: ["combobox", "popover"],
      files: ["registry/new-york/example/combobox-popover.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/combobox-popover.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "combobox-responsive": {
      name: "combobox-responsive",
      type: "registry:example",
      registryDependencies: ["combobox", "popover", "drawer"],
      files: ["registry/new-york/example/combobox-responsive.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/combobox-responsive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "command-demo": {
      name: "command-demo",
      type: "registry:example",
      registryDependencies: ["command"],
      files: ["registry/new-york/example/command-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/command-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "command-dialog": {
      name: "command-dialog",
      type: "registry:example",
      registryDependencies: ["command", "dialog"],
      files: ["registry/new-york/example/command-dialog.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/command-dialog.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "context-menu-demo": {
      name: "context-menu-demo",
      type: "registry:example",
      registryDependencies: ["context-menu"],
      files: ["registry/new-york/example/context-menu-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/context-menu-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "data-table-demo": {
      name: "data-table-demo",
      type: "registry:example",
      registryDependencies: ["data-table"],
      files: ["registry/new-york/example/data-table-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/data-table-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "date-picker-demo": {
      name: "date-picker-demo",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover"],
      files: ["registry/new-york/example/date-picker-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/date-picker-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "date-picker-form": {
      name: "date-picker-form",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "form", "popover"],
      files: ["registry/new-york/example/date-picker-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/date-picker-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "date-picker-with-presets": {
      name: "date-picker-with-presets",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover", "select"],
      files: ["registry/new-york/example/date-picker-with-presets.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/date-picker-with-presets.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "date-picker-with-range": {
      name: "date-picker-with-range",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover"],
      files: ["registry/new-york/example/date-picker-with-range.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/date-picker-with-range.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dialog-demo": {
      name: "dialog-demo",
      type: "registry:example",
      registryDependencies: ["dialog"],
      files: ["registry/new-york/example/dialog-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/dialog-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dialog-close-button": {
      name: "dialog-close-button",
      type: "registry:example",
      registryDependencies: ["dialog", "button"],
      files: ["registry/new-york/example/dialog-close-button.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/dialog-close-button.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "drawer-demo": {
      name: "drawer-demo",
      type: "registry:example",
      registryDependencies: ["drawer"],
      files: ["registry/new-york/example/drawer-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/drawer-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "drawer-dialog": {
      name: "drawer-dialog",
      type: "registry:example",
      registryDependencies: ["drawer", "dialog"],
      files: ["registry/new-york/example/drawer-dialog.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/drawer-dialog.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dropdown-menu-demo": {
      name: "dropdown-menu-demo",
      type: "registry:example",
      registryDependencies: ["dropdown-menu"],
      files: ["registry/new-york/example/dropdown-menu-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/dropdown-menu-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dropdown-menu-checkboxes": {
      name: "dropdown-menu-checkboxes",
      type: "registry:example",
      registryDependencies: ["dropdown-menu", "checkbox"],
      files: ["registry/new-york/example/dropdown-menu-checkboxes.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/dropdown-menu-checkboxes.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dropdown-menu-radio-group": {
      name: "dropdown-menu-radio-group",
      type: "registry:example",
      registryDependencies: ["dropdown-menu", "radio-group"],
      files: ["registry/new-york/example/dropdown-menu-radio-group.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/dropdown-menu-radio-group.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "hover-card-demo": {
      name: "hover-card-demo",
      type: "registry:example",
      registryDependencies: ["hover-card"],
      files: ["registry/new-york/example/hover-card-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/hover-card-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-demo": {
      name: "input-demo",
      type: "registry:example",
      registryDependencies: ["input"],
      files: ["registry/new-york/example/input-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-disabled": {
      name: "input-disabled",
      type: "registry:example",
      registryDependencies: ["input"],
      files: ["registry/new-york/example/input-disabled.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-disabled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-file": {
      name: "input-file",
      type: "registry:example",
      registryDependencies: ["input"],
      files: ["registry/new-york/example/input-file.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-file.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-form": {
      name: "input-form",
      type: "registry:example",
      registryDependencies: ["input", "button", "form"],
      files: ["registry/new-york/example/input-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-with-button": {
      name: "input-with-button",
      type: "registry:example",
      registryDependencies: ["input", "button"],
      files: ["registry/new-york/example/input-with-button.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-with-button.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-with-label": {
      name: "input-with-label",
      type: "registry:example",
      registryDependencies: ["input", "button", "label"],
      files: ["registry/new-york/example/input-with-label.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-with-label.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-with-text": {
      name: "input-with-text",
      type: "registry:example",
      registryDependencies: ["input", "button", "label"],
      files: ["registry/new-york/example/input-with-text.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-with-text.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp-demo": {
      name: "input-otp-demo",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: ["registry/new-york/example/input-otp-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-otp-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp-pattern": {
      name: "input-otp-pattern",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: ["registry/new-york/example/input-otp-pattern.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-otp-pattern.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp-separator": {
      name: "input-otp-separator",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: ["registry/new-york/example/input-otp-separator.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-otp-separator.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp-controlled": {
      name: "input-otp-controlled",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: ["registry/new-york/example/input-otp-controlled.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-otp-controlled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp-form": {
      name: "input-otp-form",
      type: "registry:example",
      registryDependencies: ["input-otp", "form"],
      files: ["registry/new-york/example/input-otp-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/input-otp-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "label-demo": {
      name: "label-demo",
      type: "registry:example",
      registryDependencies: ["label"],
      files: ["registry/new-york/example/label-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/label-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "menubar-demo": {
      name: "menubar-demo",
      type: "registry:example",
      registryDependencies: ["menubar"],
      files: ["registry/new-york/example/menubar-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/menubar-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "navigation-menu-demo": {
      name: "navigation-menu-demo",
      type: "registry:example",
      registryDependencies: ["navigation-menu"],
      files: ["registry/new-york/example/navigation-menu-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/navigation-menu-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "pagination-demo": {
      name: "pagination-demo",
      type: "registry:example",
      registryDependencies: ["pagination"],
      files: ["registry/new-york/example/pagination-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/pagination-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "popover-demo": {
      name: "popover-demo",
      type: "registry:example",
      registryDependencies: ["popover"],
      files: ["registry/new-york/example/popover-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/popover-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "progress-demo": {
      name: "progress-demo",
      type: "registry:example",
      registryDependencies: ["progress"],
      files: ["registry/new-york/example/progress-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/progress-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "radio-group-demo": {
      name: "radio-group-demo",
      type: "registry:example",
      registryDependencies: ["radio-group"],
      files: ["registry/new-york/example/radio-group-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/radio-group-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "radio-group-form": {
      name: "radio-group-form",
      type: "registry:example",
      registryDependencies: ["radio-group", "form"],
      files: ["registry/new-york/example/radio-group-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/radio-group-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "resizable-demo": {
      name: "resizable-demo",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: ["registry/new-york/example/resizable-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/resizable-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "resizable-demo-with-handle": {
      name: "resizable-demo-with-handle",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: ["registry/new-york/example/resizable-demo-with-handle.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/resizable-demo-with-handle.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "resizable-vertical": {
      name: "resizable-vertical",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: ["registry/new-york/example/resizable-vertical.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/resizable-vertical.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "resizable-handle": {
      name: "resizable-handle",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: ["registry/new-york/example/resizable-handle.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/resizable-handle.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "scroll-area-demo": {
      name: "scroll-area-demo",
      type: "registry:example",
      registryDependencies: ["scroll-area"],
      files: ["registry/new-york/example/scroll-area-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/scroll-area-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "scroll-area-horizontal-demo": {
      name: "scroll-area-horizontal-demo",
      type: "registry:example",
      registryDependencies: ["scroll-area"],
      files: ["registry/new-york/example/scroll-area-horizontal-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/scroll-area-horizontal-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "select-demo": {
      name: "select-demo",
      type: "registry:example",
      registryDependencies: ["select"],
      files: ["registry/new-york/example/select-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/select-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "select-scrollable": {
      name: "select-scrollable",
      type: "registry:example",
      registryDependencies: ["select"],
      files: ["registry/new-york/example/select-scrollable.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/select-scrollable.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "select-form": {
      name: "select-form",
      type: "registry:example",
      registryDependencies: ["select"],
      files: ["registry/new-york/example/select-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/select-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "separator-demo": {
      name: "separator-demo",
      type: "registry:example",
      registryDependencies: ["separator"],
      files: ["registry/new-york/example/separator-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/separator-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sheet-demo": {
      name: "sheet-demo",
      type: "registry:example",
      registryDependencies: ["sheet"],
      files: ["registry/new-york/example/sheet-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/sheet-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sheet-side": {
      name: "sheet-side",
      type: "registry:example",
      registryDependencies: ["sheet"],
      files: ["registry/new-york/example/sheet-side.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/sheet-side.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "skeleton-demo": {
      name: "skeleton-demo",
      type: "registry:example",
      registryDependencies: ["skeleton"],
      files: ["registry/new-york/example/skeleton-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/skeleton-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "skeleton-card": {
      name: "skeleton-card",
      type: "registry:example",
      registryDependencies: ["skeleton"],
      files: ["registry/new-york/example/skeleton-card.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/skeleton-card.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "slider-demo": {
      name: "slider-demo",
      type: "registry:example",
      registryDependencies: ["slider"],
      files: ["registry/new-york/example/slider-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/slider-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sonner-demo": {
      name: "sonner-demo",
      type: "registry:example",
      registryDependencies: ["sonner"],
      files: ["registry/new-york/example/sonner-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/sonner-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "switch-demo": {
      name: "switch-demo",
      type: "registry:example",
      registryDependencies: ["switch"],
      files: ["registry/new-york/example/switch-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/switch-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "switch-form": {
      name: "switch-form",
      type: "registry:example",
      registryDependencies: ["switch", "form"],
      files: ["registry/new-york/example/switch-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/switch-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "table-demo": {
      name: "table-demo",
      type: "registry:example",
      registryDependencies: ["table"],
      files: ["registry/new-york/example/table-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/table-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "tabs-demo": {
      name: "tabs-demo",
      type: "registry:example",
      registryDependencies: ["tabs"],
      files: ["registry/new-york/example/tabs-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/tabs-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-demo": {
      name: "textarea-demo",
      type: "registry:example",
      registryDependencies: ["textarea"],
      files: ["registry/new-york/example/textarea-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-disabled": {
      name: "textarea-disabled",
      type: "registry:example",
      registryDependencies: ["textarea"],
      files: ["registry/new-york/example/textarea-disabled.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-disabled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-form": {
      name: "textarea-form",
      type: "registry:example",
      registryDependencies: ["textarea", "form"],
      files: ["registry/new-york/example/textarea-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-with-button": {
      name: "textarea-with-button",
      type: "registry:example",
      registryDependencies: ["textarea", "button"],
      files: ["registry/new-york/example/textarea-with-button.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-with-button.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-with-label": {
      name: "textarea-with-label",
      type: "registry:example",
      registryDependencies: ["textarea", "label"],
      files: ["registry/new-york/example/textarea-with-label.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-with-label.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-with-text": {
      name: "textarea-with-text",
      type: "registry:example",
      registryDependencies: ["textarea", "label"],
      files: ["registry/new-york/example/textarea-with-text.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-with-text.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast-demo": {
      name: "toast-demo",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: ["registry/new-york/example/toast-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toast-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast-destructive": {
      name: "toast-destructive",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: ["registry/new-york/example/toast-destructive.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toast-destructive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast-simple": {
      name: "toast-simple",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: ["registry/new-york/example/toast-simple.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toast-simple.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast-with-action": {
      name: "toast-with-action",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: ["registry/new-york/example/toast-with-action.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toast-with-action.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast-with-title": {
      name: "toast-with-title",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: ["registry/new-york/example/toast-with-title.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toast-with-title.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-demo": {
      name: "toggle-group-demo",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/new-york/example/toggle-group-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-group-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-disabled": {
      name: "toggle-group-disabled",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/new-york/example/toggle-group-disabled.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-group-disabled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-lg": {
      name: "toggle-group-lg",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/new-york/example/toggle-group-lg.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-group-lg.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-outline": {
      name: "toggle-group-outline",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/new-york/example/toggle-group-outline.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-group-outline.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-sm": {
      name: "toggle-group-sm",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/new-york/example/toggle-group-sm.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-group-sm.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-single": {
      name: "toggle-group-single",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/new-york/example/toggle-group-single.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-group-single.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-demo": {
      name: "toggle-demo",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/new-york/example/toggle-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-disabled": {
      name: "toggle-disabled",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/new-york/example/toggle-disabled.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-disabled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-lg": {
      name: "toggle-lg",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/new-york/example/toggle-lg.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-lg.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-outline": {
      name: "toggle-outline",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/new-york/example/toggle-outline.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-outline.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-sm": {
      name: "toggle-sm",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/new-york/example/toggle-sm.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-sm.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-with-text": {
      name: "toggle-with-text",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/new-york/example/toggle-with-text.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-with-text.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "tooltip-demo": {
      name: "tooltip-demo",
      type: "registry:example",
      registryDependencies: ["tooltip"],
      files: ["registry/new-york/example/tooltip-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/tooltip-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-blockquote": {
      name: "typography-blockquote",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-blockquote.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-blockquote.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-demo": {
      name: "typography-demo",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h1": {
      name: "typography-h1",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-h1.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-h1.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h2": {
      name: "typography-h2",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-h2.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-h2.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h3": {
      name: "typography-h3",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-h3.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-h3.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h4": {
      name: "typography-h4",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-h4.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-h4.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-inline-code": {
      name: "typography-inline-code",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-inline-code.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-inline-code.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-large": {
      name: "typography-large",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-large.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-large.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-lead": {
      name: "typography-lead",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-lead.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-lead.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-list": {
      name: "typography-list",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-list.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-list.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-muted": {
      name: "typography-muted",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-muted.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-muted.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-p": {
      name: "typography-p",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-p.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-p.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-small": {
      name: "typography-small",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-small.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-small.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-table": {
      name: "typography-table",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/typography-table.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/typography-table.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "mode-toggle": {
      name: "mode-toggle",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/mode-toggle.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/mode-toggle.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-bar-demo": {
      name: "chart-bar-demo",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/chart-bar-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/chart-bar-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-bar-demo-grid": {
      name: "chart-bar-demo-grid",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/chart-bar-demo-grid.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/chart-bar-demo-grid.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-bar-demo-axis": {
      name: "chart-bar-demo-axis",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/chart-bar-demo-axis.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/chart-bar-demo-axis.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-bar-demo-tooltip": {
      name: "chart-bar-demo-tooltip",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/chart-bar-demo-tooltip.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/chart-bar-demo-tooltip.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-bar-demo-legend": {
      name: "chart-bar-demo-legend",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/chart-bar-demo-legend.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/chart-bar-demo-legend.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-tooltip-demo": {
      name: "chart-tooltip-demo",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/new-york/example/chart-tooltip-demo.tsx"],
      component: React.lazy(() => import("@/registry/new-york/example/chart-tooltip-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sidebar-01": {
      name: "sidebar-01",
      type: "registry:block",
      registryDependencies: ["avatar", "button", "collapsible", "dropdown-menu", "drawer", "separator", "input", "popover", "sheet", "progress", "card", "use-mobile"],
      files: ["registry/new-york/block/sidebar-01/page.tsx", "registry/new-york/block/sidebar-01/components/app-sidebar.tsx", "registry/new-york/block/sidebar-01/components/nav-main.tsx", "registry/new-york/block/sidebar-01/components/nav-projects.tsx", "registry/new-york/block/sidebar-01/components/nav-secondary.tsx", "registry/new-york/block/sidebar-01/components/nav-user.tsx", "registry/new-york/block/sidebar-01/components/storage-card.tsx", "registry/new-york/block/sidebar-01/components/team-switcher.tsx", "registry/new-york/block/sidebar-01/hooks/use-sidebar.tsx", "registry/new-york/block/sidebar-01/ui/sidebar.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/sidebar-01/page.tsx")),
      source: "__registry__/new-york/block/sidebar-01/page.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: []
    },
    "login-01": {
      name: "login-01",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: ["registry/new-york/block/login-01/page.tsx", "registry/new-york/block/login-01/components/login-form.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/login-01/page.tsx")),
      source: "__registry__/new-york/block/login-01/page.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "charts-01": {
      name: "charts-01",
      type: "registry:block",
      registryDependencies: ["chart"],
      files: ["registry/new-york/block/charts-01.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/charts-01.tsx")),
      source: "__registry__/new-york/block/charts-01.tsx",
      category: "Application",
      subcategory: "Charts",
      chunks: [{
        name: "charts-01-chunk-0",
        description: "A bar chart showing the number of steps you have walked in the past 7 days.",
        component: React.lazy(() => import("@/registry/new-york/block/charts-01-chunk-0")),
        file: "registry/new-york/block/charts-01-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-1",
        description: "A line chart showing the resting heart rate for the past 7 days.",
        component: React.lazy(() => import("@/registry/new-york/block/charts-01-chunk-1")),
        file: "registry/new-york/block/charts-01-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-2",
        description: "Two horizontal bar charts showing total steps taken during the current year and last year.",
        component: React.lazy(() => import("@/registry/new-york/block/charts-01-chunk-2")),
        file: "registry/new-york/block/charts-01-chunk-2.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-3",
        description: "A bar chart showing the walking and running distance for the past 7 days.",
        component: React.lazy(() => import("@/registry/new-york/block/charts-01-chunk-3")),
        file: "registry/new-york/block/charts-01-chunk-3.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-4",
        description: "A bar chart showing move, exercise, and stand progress.",
        component: React.lazy(() => import("@/registry/new-york/block/charts-01-chunk-4")),
        file: "registry/new-york/block/charts-01-chunk-4.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-5",
        description: "A radial bar chart showing the percentage of time spent moving, exercising, and standing.",
        component: React.lazy(() => import("@/registry/new-york/block/charts-01-chunk-5")),
        file: "registry/new-york/block/charts-01-chunk-5.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-6",
        description: "A bar chart showing active energy in the past 7 days.",
        component: React.lazy(() => import("@/registry/new-york/block/charts-01-chunk-6")),
        file: "registry/new-york/block/charts-01-chunk-6.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-7",
        description: "An area chart showing the time spent in bed for the past 7 days.",
        component: React.lazy(() => import("@/registry/new-york/block/charts-01-chunk-7")),
        file: "registry/new-york/block/charts-01-chunk-7.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-05": {
      name: "dashboard-05",
      type: "registry:block",
      registryDependencies: ["badge", "breadcrumb", "button", "card", "dropdown-menu", "input", "pagination", "progress", "separator", "sheet", "table", "tabs", "tooltip"],
      files: ["registry/new-york/block/dashboard-05.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/dashboard-05.tsx")),
      source: "__registry__/new-york/block/dashboard-05.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-05-chunk-0",
        description: "A card for an orders dashboard with a description and a button to create a new order.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-05-chunk-0")),
        file: "registry/new-york/block/dashboard-05-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-05-chunk-1",
        description: "A stats card showing this week's total sales in USD, the percentage difference from last week, and a progress bar.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-05-chunk-1")),
        file: "registry/new-york/block/dashboard-05-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-05-chunk-2",
        description: "A stats card showing this month's total sales in USD, the percentage difference from last month, and a progress bar.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-05-chunk-2")),
        file: "registry/new-york/block/dashboard-05-chunk-2.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-05-chunk-3",
        description: "A table of recent orders showing the following columns: Customer, Type, Status, Date, and Amount.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-05-chunk-3")),
        file: "registry/new-york/block/dashboard-05-chunk-3.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-05-chunk-4",
        description: "An order details card with order details, shipping information, customer information and payment information.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-05-chunk-4")),
        file: "registry/new-york/block/dashboard-05-chunk-4.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-06": {
      name: "dashboard-06",
      type: "registry:block",
      registryDependencies: ["badge", "breadcrumb", "button", "card", "dropdown-menu", "input", "sheet", "table", "tabs", "tooltip"],
      files: ["registry/new-york/block/dashboard-06.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/dashboard-06.tsx")),
      source: "__registry__/new-york/block/dashboard-06.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-06-chunk-0",
        description: "A list of products in a table with actions. Each row has an image, name, status, price, total sales, created at and actions.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-06-chunk-0")),
        file: "registry/new-york/block/dashboard-06-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-07": {
      name: "dashboard-07",
      type: "registry:block",
      registryDependencies: ["badge", "breadcrumb", "button", "card", "dropdown-menu", "input", "pagination", "progress", "separator", "sheet", "table", "tabs", "tooltip"],
      files: ["registry/new-york/block/dashboard-07.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/dashboard-07.tsx")),
      source: "__registry__/new-york/block/dashboard-07.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-07-chunk-0",
        description: "A card with a form to edit the product details",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-07-chunk-0")),
        file: "registry/new-york/block/dashboard-07-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-07-chunk-1",
        description: "A card with a form to edit the product stock and variants",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-07-chunk-1")),
        file: "registry/new-york/block/dashboard-07-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-07-chunk-2",
        description: "A card with a form to edit the product category and subcategory",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-07-chunk-2")),
        file: "registry/new-york/block/dashboard-07-chunk-2.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-07-chunk-3",
        description: "A card with a form to edit the product status",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-07-chunk-3")),
        file: "registry/new-york/block/dashboard-07-chunk-3.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-07-chunk-4",
        description: "A card with a form to upload product images",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-07-chunk-4")),
        file: "registry/new-york/block/dashboard-07-chunk-4.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-07-chunk-5",
        description: "A card with a call to action to archive the product",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-07-chunk-5")),
        file: "registry/new-york/block/dashboard-07-chunk-5.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-04": {
      name: "dashboard-04",
      type: "registry:block",
      registryDependencies: ["button", "card", "dropdown-menu", "input"],
      files: ["registry/new-york/block/dashboard-04.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/dashboard-04.tsx")),
      source: "__registry__/new-york/block/dashboard-04.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-04-chunk-0",
        description: "A sidebar navigation with links to general, security, integrations, support, organizations, and advanced settings.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-04-chunk-0")),
        file: "registry/new-york/block/dashboard-04-chunk-0.tsx",
        container: {
          className: "chunk-container after:right-0"
        }
      }, {
        name: "dashboard-04-chunk-1",
        description: "A form to update the store name.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-04-chunk-1")),
        file: "registry/new-york/block/dashboard-04-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-04-chunk-2",
        description: "A form to update the plugins directory with a checkbox to allow administrators to change the directory.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-04-chunk-2")),
        file: "registry/new-york/block/dashboard-04-chunk-2.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-03": {
      name: "dashboard-03",
      type: "registry:block",
      registryDependencies: ["badge", "button", "drawer", "input", "label", "select", "textarea", "tooltip"],
      files: ["registry/new-york/block/dashboard-03.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/dashboard-03.tsx")),
      source: "__registry__/new-york/block/dashboard-03.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-03-chunk-0",
        description: "A settings form a configuring an AI model and messages.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-03-chunk-0")),
        file: "registry/new-york/block/dashboard-03-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-03-chunk-1",
        description: "A form for sending a message to an AI chatbot. The form has a textarea and buttons to upload files and record audio.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-03-chunk-1")),
        file: "registry/new-york/block/dashboard-03-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-02": {
      name: "dashboard-02",
      type: "registry:block",
      registryDependencies: ["badge", "button", "card", "dropdown-menu", "input"],
      files: ["registry/new-york/block/dashboard-02.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/dashboard-02.tsx")),
      source: "__registry__/new-york/block/dashboard-02.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-02-chunk-0",
        description: "A card with a call to action",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-02-chunk-0")),
        file: "registry/new-york/block/dashboard-02-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-02-chunk-1",
        description: "An empty state showing no products with a heading, description and a call to action to add a product.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-02-chunk-1")),
        file: "registry/new-york/block/dashboard-02-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-01": {
      name: "dashboard-01",
      type: "registry:block",
      registryDependencies: ["button", "dropdown-menu", "input", "sheet"],
      files: ["registry/new-york/block/dashboard-01.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/dashboard-01.tsx")),
      source: "__registry__/new-york/block/dashboard-01.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-01-chunk-0",
        description: "A card showing the total revenue in USD and the percentage difference from last month.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-01-chunk-0")),
        file: "registry/new-york/block/dashboard-01-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-01-chunk-1",
        description: "A card showing the total subscriptions and the percentage difference from last month.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-01-chunk-1")),
        file: "registry/new-york/block/dashboard-01-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-01-chunk-2",
        description: "A card showing the total sales and the percentage difference from last month.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-01-chunk-2")),
        file: "registry/new-york/block/dashboard-01-chunk-2.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-01-chunk-3",
        description: "A card showing the total active users and the percentage difference from last hour.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-01-chunk-3")),
        file: "registry/new-york/block/dashboard-01-chunk-3.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-01-chunk-4",
        description: "A card showing a table of recent transactions with a link to view all transactions.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-01-chunk-4")),
        file: "registry/new-york/block/dashboard-01-chunk-4.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-01-chunk-5",
        description: "A card showing a list of recent sales with customer names and email addresses.",
        component: React.lazy(() => import("@/registry/new-york/block/dashboard-01-chunk-5")),
        file: "registry/new-york/block/dashboard-01-chunk-5.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "authentication-01": {
      name: "authentication-01",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: ["registry/new-york/block/authentication-01.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/authentication-01.tsx")),
      source: "__registry__/new-york/block/authentication-01.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "authentication-02": {
      name: "authentication-02",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: ["registry/new-york/block/authentication-02.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/authentication-02.tsx")),
      source: "__registry__/new-york/block/authentication-02.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "authentication-03": {
      name: "authentication-03",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: ["registry/new-york/block/authentication-03.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/authentication-03.tsx")),
      source: "__registry__/new-york/block/authentication-03.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "authentication-04": {
      name: "authentication-04",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: ["registry/new-york/block/authentication-04.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/authentication-04.tsx")),
      source: "__registry__/new-york/block/authentication-04.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "chart-area-axes": {
      name: "chart-area-axes",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-area-axes.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-area-axes.tsx")),
      source: "__registry__/new-york/block/chart-area-axes.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-default": {
      name: "chart-area-default",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-area-default.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-area-default.tsx")),
      source: "__registry__/new-york/block/chart-area-default.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-gradient": {
      name: "chart-area-gradient",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-area-gradient.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-area-gradient.tsx")),
      source: "__registry__/new-york/block/chart-area-gradient.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-icons": {
      name: "chart-area-icons",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-area-icons.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-area-icons.tsx")),
      source: "__registry__/new-york/block/chart-area-icons.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-interactive": {
      name: "chart-area-interactive",
      type: "registry:block",
      registryDependencies: ["card", "chart", "select"],
      files: ["registry/new-york/block/chart-area-interactive.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-area-interactive.tsx")),
      source: "__registry__/new-york/block/chart-area-interactive.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-legend": {
      name: "chart-area-legend",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-area-legend.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-area-legend.tsx")),
      source: "__registry__/new-york/block/chart-area-legend.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-linear": {
      name: "chart-area-linear",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-area-linear.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-area-linear.tsx")),
      source: "__registry__/new-york/block/chart-area-linear.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-stacked-expand": {
      name: "chart-area-stacked-expand",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-area-stacked-expand.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-area-stacked-expand.tsx")),
      source: "__registry__/new-york/block/chart-area-stacked-expand.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-stacked": {
      name: "chart-area-stacked",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-area-stacked.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-area-stacked.tsx")),
      source: "__registry__/new-york/block/chart-area-stacked.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-step": {
      name: "chart-area-step",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-area-step.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-area-step.tsx")),
      source: "__registry__/new-york/block/chart-area-step.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-bar-active": {
      name: "chart-bar-active",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-bar-active.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-bar-active.tsx")),
      source: "__registry__/new-york/block/chart-bar-active.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-default": {
      name: "chart-bar-default",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-bar-default.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-bar-default.tsx")),
      source: "__registry__/new-york/block/chart-bar-default.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-horizontal": {
      name: "chart-bar-horizontal",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-bar-horizontal.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-bar-horizontal.tsx")),
      source: "__registry__/new-york/block/chart-bar-horizontal.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-interactive": {
      name: "chart-bar-interactive",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-bar-interactive.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-bar-interactive.tsx")),
      source: "__registry__/new-york/block/chart-bar-interactive.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-label-custom": {
      name: "chart-bar-label-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-bar-label-custom.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-bar-label-custom.tsx")),
      source: "__registry__/new-york/block/chart-bar-label-custom.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-label": {
      name: "chart-bar-label",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-bar-label.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-bar-label.tsx")),
      source: "__registry__/new-york/block/chart-bar-label.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-mixed": {
      name: "chart-bar-mixed",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-bar-mixed.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-bar-mixed.tsx")),
      source: "__registry__/new-york/block/chart-bar-mixed.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-multiple": {
      name: "chart-bar-multiple",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-bar-multiple.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-bar-multiple.tsx")),
      source: "__registry__/new-york/block/chart-bar-multiple.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-negative": {
      name: "chart-bar-negative",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-bar-negative.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-bar-negative.tsx")),
      source: "__registry__/new-york/block/chart-bar-negative.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-stacked": {
      name: "chart-bar-stacked",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-bar-stacked.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-bar-stacked.tsx")),
      source: "__registry__/new-york/block/chart-bar-stacked.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-line-default": {
      name: "chart-line-default",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-line-default.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-line-default.tsx")),
      source: "__registry__/new-york/block/chart-line-default.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-dots-colors": {
      name: "chart-line-dots-colors",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-line-dots-colors.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-line-dots-colors.tsx")),
      source: "__registry__/new-york/block/chart-line-dots-colors.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-dots-custom": {
      name: "chart-line-dots-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-line-dots-custom.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-line-dots-custom.tsx")),
      source: "__registry__/new-york/block/chart-line-dots-custom.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-dots": {
      name: "chart-line-dots",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-line-dots.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-line-dots.tsx")),
      source: "__registry__/new-york/block/chart-line-dots.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-interactive": {
      name: "chart-line-interactive",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-line-interactive.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-line-interactive.tsx")),
      source: "__registry__/new-york/block/chart-line-interactive.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-label-custom": {
      name: "chart-line-label-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-line-label-custom.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-line-label-custom.tsx")),
      source: "__registry__/new-york/block/chart-line-label-custom.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-label": {
      name: "chart-line-label",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-line-label.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-line-label.tsx")),
      source: "__registry__/new-york/block/chart-line-label.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-linear": {
      name: "chart-line-linear",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-line-linear.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-line-linear.tsx")),
      source: "__registry__/new-york/block/chart-line-linear.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-multiple": {
      name: "chart-line-multiple",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-line-multiple.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-line-multiple.tsx")),
      source: "__registry__/new-york/block/chart-line-multiple.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-step": {
      name: "chart-line-step",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-line-step.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-line-step.tsx")),
      source: "__registry__/new-york/block/chart-line-step.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-pie-donut-active": {
      name: "chart-pie-donut-active",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-donut-active.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-donut-active.tsx")),
      source: "__registry__/new-york/block/chart-pie-donut-active.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-donut-text": {
      name: "chart-pie-donut-text",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-donut-text.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-donut-text.tsx")),
      source: "__registry__/new-york/block/chart-pie-donut-text.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-donut": {
      name: "chart-pie-donut",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-donut.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-donut.tsx")),
      source: "__registry__/new-york/block/chart-pie-donut.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-interactive": {
      name: "chart-pie-interactive",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-interactive.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-interactive.tsx")),
      source: "__registry__/new-york/block/chart-pie-interactive.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-label-custom": {
      name: "chart-pie-label-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-label-custom.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-label-custom.tsx")),
      source: "__registry__/new-york/block/chart-pie-label-custom.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-label-list": {
      name: "chart-pie-label-list",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-label-list.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-label-list.tsx")),
      source: "__registry__/new-york/block/chart-pie-label-list.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-label": {
      name: "chart-pie-label",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-label.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-label.tsx")),
      source: "__registry__/new-york/block/chart-pie-label.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-legend": {
      name: "chart-pie-legend",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-legend.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-legend.tsx")),
      source: "__registry__/new-york/block/chart-pie-legend.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-separator-none": {
      name: "chart-pie-separator-none",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-separator-none.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-separator-none.tsx")),
      source: "__registry__/new-york/block/chart-pie-separator-none.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-simple": {
      name: "chart-pie-simple",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-simple.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-simple.tsx")),
      source: "__registry__/new-york/block/chart-pie-simple.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-stacked": {
      name: "chart-pie-stacked",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-pie-stacked.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-pie-stacked.tsx")),
      source: "__registry__/new-york/block/chart-pie-stacked.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-radar-default": {
      name: "chart-radar-default",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-default.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-default.tsx")),
      source: "__registry__/new-york/block/chart-radar-default.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-dots": {
      name: "chart-radar-dots",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-dots.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-dots.tsx")),
      source: "__registry__/new-york/block/chart-radar-dots.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-circle-fill": {
      name: "chart-radar-grid-circle-fill",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-grid-circle-fill.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-grid-circle-fill.tsx")),
      source: "__registry__/new-york/block/chart-radar-grid-circle-fill.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-circle-no-lines": {
      name: "chart-radar-grid-circle-no-lines",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-grid-circle-no-lines.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-grid-circle-no-lines.tsx")),
      source: "__registry__/new-york/block/chart-radar-grid-circle-no-lines.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-circle": {
      name: "chart-radar-grid-circle",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-grid-circle.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-grid-circle.tsx")),
      source: "__registry__/new-york/block/chart-radar-grid-circle.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-custom": {
      name: "chart-radar-grid-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-grid-custom.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-grid-custom.tsx")),
      source: "__registry__/new-york/block/chart-radar-grid-custom.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-fill": {
      name: "chart-radar-grid-fill",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-grid-fill.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-grid-fill.tsx")),
      source: "__registry__/new-york/block/chart-radar-grid-fill.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-none": {
      name: "chart-radar-grid-none",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-grid-none.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-grid-none.tsx")),
      source: "__registry__/new-york/block/chart-radar-grid-none.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-icons": {
      name: "chart-radar-icons",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-icons.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-icons.tsx")),
      source: "__registry__/new-york/block/chart-radar-icons.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-label-custom": {
      name: "chart-radar-label-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-label-custom.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-label-custom.tsx")),
      source: "__registry__/new-york/block/chart-radar-label-custom.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-legend": {
      name: "chart-radar-legend",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-legend.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-legend.tsx")),
      source: "__registry__/new-york/block/chart-radar-legend.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-lines-only": {
      name: "chart-radar-lines-only",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-lines-only.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-lines-only.tsx")),
      source: "__registry__/new-york/block/chart-radar-lines-only.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-multiple": {
      name: "chart-radar-multiple",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-multiple.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-multiple.tsx")),
      source: "__registry__/new-york/block/chart-radar-multiple.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-radius": {
      name: "chart-radar-radius",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radar-radius.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radar-radius.tsx")),
      source: "__registry__/new-york/block/chart-radar-radius.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radial-grid": {
      name: "chart-radial-grid",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radial-grid.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radial-grid.tsx")),
      source: "__registry__/new-york/block/chart-radial-grid.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-radial-label": {
      name: "chart-radial-label",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radial-label.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radial-label.tsx")),
      source: "__registry__/new-york/block/chart-radial-label.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-radial-shape": {
      name: "chart-radial-shape",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radial-shape.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radial-shape.tsx")),
      source: "__registry__/new-york/block/chart-radial-shape.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-radial-simple": {
      name: "chart-radial-simple",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radial-simple.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radial-simple.tsx")),
      source: "__registry__/new-york/block/chart-radial-simple.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-radial-stacked": {
      name: "chart-radial-stacked",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radial-stacked.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radial-stacked.tsx")),
      source: "__registry__/new-york/block/chart-radial-stacked.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-radial-text": {
      name: "chart-radial-text",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-radial-text.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-radial-text.tsx")),
      source: "__registry__/new-york/block/chart-radial-text.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-tooltip-default": {
      name: "chart-tooltip-default",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-tooltip-default.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-tooltip-default.tsx")),
      source: "__registry__/new-york/block/chart-tooltip-default.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-indicator-line": {
      name: "chart-tooltip-indicator-line",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-tooltip-indicator-line.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-tooltip-indicator-line.tsx")),
      source: "__registry__/new-york/block/chart-tooltip-indicator-line.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-indicator-none": {
      name: "chart-tooltip-indicator-none",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-tooltip-indicator-none.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-tooltip-indicator-none.tsx")),
      source: "__registry__/new-york/block/chart-tooltip-indicator-none.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-label-none": {
      name: "chart-tooltip-label-none",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-tooltip-label-none.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-tooltip-label-none.tsx")),
      source: "__registry__/new-york/block/chart-tooltip-label-none.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-label-custom": {
      name: "chart-tooltip-label-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-tooltip-label-custom.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-tooltip-label-custom.tsx")),
      source: "__registry__/new-york/block/chart-tooltip-label-custom.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-label-formatter": {
      name: "chart-tooltip-label-formatter",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-tooltip-label-formatter.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-tooltip-label-formatter.tsx")),
      source: "__registry__/new-york/block/chart-tooltip-label-formatter.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-formatter": {
      name: "chart-tooltip-formatter",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-tooltip-formatter.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-tooltip-formatter.tsx")),
      source: "__registry__/new-york/block/chart-tooltip-formatter.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-icons": {
      name: "chart-tooltip-icons",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-tooltip-icons.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-tooltip-icons.tsx")),
      source: "__registry__/new-york/block/chart-tooltip-icons.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-advanced": {
      name: "chart-tooltip-advanced",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/new-york/block/chart-tooltip-advanced.tsx"],
      component: React.lazy(() => import("@/registry/new-york/block/chart-tooltip-advanced.tsx")),
      source: "__registry__/new-york/block/chart-tooltip-advanced.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "utils": {
      name: "utils",
      type: "registry:lib",
      registryDependencies: void 0,
      files: ["registry/new-york/lib/utils.ts"],
      component: React.lazy(() => import("@/registry/new-york/lib/utils.ts")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "use-mobile": {
      name: "use-mobile",
      type: "registry:hook",
      registryDependencies: void 0,
      files: ["registry/new-york/hooks/use-mobile.tsx"],
      component: React.lazy(() => import("@/registry/new-york/hooks/use-mobile.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "use-toast": {
      name: "use-toast",
      type: "registry:hook",
      registryDependencies: void 0,
      files: ["registry/new-york/hooks/use-toast.ts"],
      component: React.lazy(() => import("@/registry/new-york/hooks/use-toast.ts")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    }
  },
  "default": {
    "accordion": {
      name: "accordion",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/accordion.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/accordion.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "alert": {
      name: "alert",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/alert.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/alert.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "alert-dialog": {
      name: "alert-dialog",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: ["registry/default/ui/alert-dialog.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/alert-dialog.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "aspect-ratio": {
      name: "aspect-ratio",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/aspect-ratio.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/aspect-ratio.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "avatar": {
      name: "avatar",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/avatar.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/avatar.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "badge": {
      name: "badge",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/badge.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/badge.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb": {
      name: "breadcrumb",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/breadcrumb.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/breadcrumb.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button": {
      name: "button",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/button.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/button.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "calendar": {
      name: "calendar",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: ["registry/default/ui/calendar.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/calendar.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "card": {
      name: "card",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/card.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/card.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel": {
      name: "carousel",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: ["registry/default/ui/carousel.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/carousel.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart": {
      name: "chart",
      type: "registry:ui",
      registryDependencies: ["card"],
      files: ["registry/default/ui/chart.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/chart.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox": {
      name: "checkbox",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/checkbox.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/checkbox.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "collapsible": {
      name: "collapsible",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/collapsible.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/collapsible.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "command": {
      name: "command",
      type: "registry:ui",
      registryDependencies: ["dialog"],
      files: ["registry/default/ui/command.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/command.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "context-menu": {
      name: "context-menu",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/context-menu.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/context-menu.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dialog": {
      name: "dialog",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/dialog.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/dialog.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "drawer": {
      name: "drawer",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/drawer.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/drawer.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dropdown-menu": {
      name: "dropdown-menu",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/dropdown-menu.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/dropdown-menu.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "form": {
      name: "form",
      type: "registry:ui",
      registryDependencies: ["button", "label"],
      files: ["registry/default/ui/form.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "hover-card": {
      name: "hover-card",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/hover-card.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/hover-card.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input": {
      name: "input",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/input.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/input.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp": {
      name: "input-otp",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/input-otp.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/input-otp.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "label": {
      name: "label",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/label.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/label.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "menubar": {
      name: "menubar",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/menubar.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/menubar.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "navigation-menu": {
      name: "navigation-menu",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/navigation-menu.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/navigation-menu.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "pagination": {
      name: "pagination",
      type: "registry:ui",
      registryDependencies: ["button"],
      files: ["registry/default/ui/pagination.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/pagination.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "popover": {
      name: "popover",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/popover.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/popover.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "progress": {
      name: "progress",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/progress.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/progress.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "radio-group": {
      name: "radio-group",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/radio-group.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/radio-group.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "resizable": {
      name: "resizable",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/resizable.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/resizable.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "scroll-area": {
      name: "scroll-area",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/scroll-area.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/scroll-area.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "select": {
      name: "select",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/select.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/select.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "separator": {
      name: "separator",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/separator.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/separator.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sheet": {
      name: "sheet",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/sheet.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/sheet.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "skeleton": {
      name: "skeleton",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/skeleton.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/skeleton.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "slider": {
      name: "slider",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/slider.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/slider.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sonner": {
      name: "sonner",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/sonner.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/sonner.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "switch": {
      name: "switch",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/switch.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/switch.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "table": {
      name: "table",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/table.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/table.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "tabs": {
      name: "tabs",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/tabs.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/tabs.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea": {
      name: "textarea",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/textarea.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/textarea.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast": {
      name: "toast",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/toast.tsx", "registry/default/hooks/use-toast.ts", "registry/default/ui/toaster.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/toast.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle": {
      name: "toggle",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/toggle.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/toggle.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group": {
      name: "toggle-group",
      type: "registry:ui",
      registryDependencies: ["toggle"],
      files: ["registry/default/ui/toggle-group.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/toggle-group.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "tooltip": {
      name: "tooltip",
      type: "registry:ui",
      registryDependencies: void 0,
      files: ["registry/default/ui/tooltip.tsx"],
      component: React.lazy(() => import("@/registry/default/ui/tooltip.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "accordion-demo": {
      name: "accordion-demo",
      type: "registry:example",
      registryDependencies: ["accordion"],
      files: ["registry/default/example/accordion-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/accordion-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "alert-demo": {
      name: "alert-demo",
      type: "registry:example",
      registryDependencies: ["alert"],
      files: ["registry/default/example/alert-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/alert-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "alert-destructive": {
      name: "alert-destructive",
      type: "registry:example",
      registryDependencies: ["alert"],
      files: ["registry/default/example/alert-destructive.tsx"],
      component: React.lazy(() => import("@/registry/default/example/alert-destructive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "alert-dialog-demo": {
      name: "alert-dialog-demo",
      type: "registry:example",
      registryDependencies: ["alert-dialog", "button"],
      files: ["registry/default/example/alert-dialog-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/alert-dialog-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "aspect-ratio-demo": {
      name: "aspect-ratio-demo",
      type: "registry:example",
      registryDependencies: ["aspect-ratio"],
      files: ["registry/default/example/aspect-ratio-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/aspect-ratio-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "avatar-demo": {
      name: "avatar-demo",
      type: "registry:example",
      registryDependencies: ["avatar"],
      files: ["registry/default/example/avatar-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/avatar-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "badge-demo": {
      name: "badge-demo",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: ["registry/default/example/badge-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/badge-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "badge-destructive": {
      name: "badge-destructive",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: ["registry/default/example/badge-destructive.tsx"],
      component: React.lazy(() => import("@/registry/default/example/badge-destructive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "badge-outline": {
      name: "badge-outline",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: ["registry/default/example/badge-outline.tsx"],
      component: React.lazy(() => import("@/registry/default/example/badge-outline.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "badge-secondary": {
      name: "badge-secondary",
      type: "registry:example",
      registryDependencies: ["badge"],
      files: ["registry/default/example/badge-secondary.tsx"],
      component: React.lazy(() => import("@/registry/default/example/badge-secondary.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-demo": {
      name: "breadcrumb-demo",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/default/example/breadcrumb-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/breadcrumb-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-separator": {
      name: "breadcrumb-separator",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/default/example/breadcrumb-separator.tsx"],
      component: React.lazy(() => import("@/registry/default/example/breadcrumb-separator.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-dropdown": {
      name: "breadcrumb-dropdown",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/default/example/breadcrumb-dropdown.tsx"],
      component: React.lazy(() => import("@/registry/default/example/breadcrumb-dropdown.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-ellipsis": {
      name: "breadcrumb-ellipsis",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/default/example/breadcrumb-ellipsis.tsx"],
      component: React.lazy(() => import("@/registry/default/example/breadcrumb-ellipsis.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-link": {
      name: "breadcrumb-link",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/default/example/breadcrumb-link.tsx"],
      component: React.lazy(() => import("@/registry/default/example/breadcrumb-link.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "breadcrumb-responsive": {
      name: "breadcrumb-responsive",
      type: "registry:example",
      registryDependencies: ["breadcrumb"],
      files: ["registry/default/example/breadcrumb-responsive.tsx"],
      component: React.lazy(() => import("@/registry/default/example/breadcrumb-responsive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-demo": {
      name: "button-demo",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/default/example/button-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/button-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-secondary": {
      name: "button-secondary",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/default/example/button-secondary.tsx"],
      component: React.lazy(() => import("@/registry/default/example/button-secondary.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-destructive": {
      name: "button-destructive",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/default/example/button-destructive.tsx"],
      component: React.lazy(() => import("@/registry/default/example/button-destructive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-outline": {
      name: "button-outline",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/default/example/button-outline.tsx"],
      component: React.lazy(() => import("@/registry/default/example/button-outline.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-ghost": {
      name: "button-ghost",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/default/example/button-ghost.tsx"],
      component: React.lazy(() => import("@/registry/default/example/button-ghost.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-link": {
      name: "button-link",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/default/example/button-link.tsx"],
      component: React.lazy(() => import("@/registry/default/example/button-link.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-with-icon": {
      name: "button-with-icon",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/default/example/button-with-icon.tsx"],
      component: React.lazy(() => import("@/registry/default/example/button-with-icon.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-loading": {
      name: "button-loading",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/default/example/button-loading.tsx"],
      component: React.lazy(() => import("@/registry/default/example/button-loading.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-icon": {
      name: "button-icon",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/default/example/button-icon.tsx"],
      component: React.lazy(() => import("@/registry/default/example/button-icon.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "button-as-child": {
      name: "button-as-child",
      type: "registry:example",
      registryDependencies: ["button"],
      files: ["registry/default/example/button-as-child.tsx"],
      component: React.lazy(() => import("@/registry/default/example/button-as-child.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "calendar-demo": {
      name: "calendar-demo",
      type: "registry:example",
      registryDependencies: ["calendar"],
      files: ["registry/default/example/calendar-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/calendar-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "calendar-form": {
      name: "calendar-form",
      type: "registry:example",
      registryDependencies: ["calendar", "form", "popover"],
      files: ["registry/default/example/calendar-form.tsx"],
      component: React.lazy(() => import("@/registry/default/example/calendar-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "card-demo": {
      name: "card-demo",
      type: "registry:example",
      registryDependencies: ["card", "button", "switch"],
      files: ["registry/default/example/card-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/card-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "card-with-form": {
      name: "card-with-form",
      type: "registry:example",
      registryDependencies: ["button", "card", "input", "label", "select"],
      files: ["registry/default/example/card-with-form.tsx"],
      component: React.lazy(() => import("@/registry/default/example/card-with-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-demo": {
      name: "carousel-demo",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/default/example/carousel-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/carousel-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-size": {
      name: "carousel-size",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/default/example/carousel-size.tsx"],
      component: React.lazy(() => import("@/registry/default/example/carousel-size.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-spacing": {
      name: "carousel-spacing",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/default/example/carousel-spacing.tsx"],
      component: React.lazy(() => import("@/registry/default/example/carousel-spacing.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-orientation": {
      name: "carousel-orientation",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/default/example/carousel-orientation.tsx"],
      component: React.lazy(() => import("@/registry/default/example/carousel-orientation.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-api": {
      name: "carousel-api",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/default/example/carousel-api.tsx"],
      component: React.lazy(() => import("@/registry/default/example/carousel-api.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "carousel-plugin": {
      name: "carousel-plugin",
      type: "registry:example",
      registryDependencies: ["carousel"],
      files: ["registry/default/example/carousel-plugin.tsx"],
      component: React.lazy(() => import("@/registry/default/example/carousel-plugin.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox-demo": {
      name: "checkbox-demo",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: ["registry/default/example/checkbox-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/checkbox-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox-disabled": {
      name: "checkbox-disabled",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: ["registry/default/example/checkbox-disabled.tsx"],
      component: React.lazy(() => import("@/registry/default/example/checkbox-disabled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox-form-multiple": {
      name: "checkbox-form-multiple",
      type: "registry:example",
      registryDependencies: ["checkbox", "form"],
      files: ["registry/default/example/checkbox-form-multiple.tsx"],
      component: React.lazy(() => import("@/registry/default/example/checkbox-form-multiple.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox-form-single": {
      name: "checkbox-form-single",
      type: "registry:example",
      registryDependencies: ["checkbox", "form"],
      files: ["registry/default/example/checkbox-form-single.tsx"],
      component: React.lazy(() => import("@/registry/default/example/checkbox-form-single.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "checkbox-with-text": {
      name: "checkbox-with-text",
      type: "registry:example",
      registryDependencies: ["checkbox"],
      files: ["registry/default/example/checkbox-with-text.tsx"],
      component: React.lazy(() => import("@/registry/default/example/checkbox-with-text.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "collapsible-demo": {
      name: "collapsible-demo",
      type: "registry:example",
      registryDependencies: ["collapsible"],
      files: ["registry/default/example/collapsible-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/collapsible-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "combobox-demo": {
      name: "combobox-demo",
      type: "registry:example",
      registryDependencies: ["command"],
      files: ["registry/default/example/combobox-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/combobox-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "combobox-dropdown-menu": {
      name: "combobox-dropdown-menu",
      type: "registry:example",
      registryDependencies: ["command", "dropdown-menu", "button"],
      files: ["registry/default/example/combobox-dropdown-menu.tsx"],
      component: React.lazy(() => import("@/registry/default/example/combobox-dropdown-menu.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "combobox-form": {
      name: "combobox-form",
      type: "registry:example",
      registryDependencies: ["command", "form"],
      files: ["registry/default/example/combobox-form.tsx"],
      component: React.lazy(() => import("@/registry/default/example/combobox-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "combobox-popover": {
      name: "combobox-popover",
      type: "registry:example",
      registryDependencies: ["combobox", "popover"],
      files: ["registry/default/example/combobox-popover.tsx"],
      component: React.lazy(() => import("@/registry/default/example/combobox-popover.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "combobox-responsive": {
      name: "combobox-responsive",
      type: "registry:example",
      registryDependencies: ["combobox", "popover", "drawer"],
      files: ["registry/default/example/combobox-responsive.tsx"],
      component: React.lazy(() => import("@/registry/default/example/combobox-responsive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "command-demo": {
      name: "command-demo",
      type: "registry:example",
      registryDependencies: ["command"],
      files: ["registry/default/example/command-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/command-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "command-dialog": {
      name: "command-dialog",
      type: "registry:example",
      registryDependencies: ["command", "dialog"],
      files: ["registry/default/example/command-dialog.tsx"],
      component: React.lazy(() => import("@/registry/default/example/command-dialog.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "context-menu-demo": {
      name: "context-menu-demo",
      type: "registry:example",
      registryDependencies: ["context-menu"],
      files: ["registry/default/example/context-menu-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/context-menu-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "data-table-demo": {
      name: "data-table-demo",
      type: "registry:example",
      registryDependencies: ["data-table"],
      files: ["registry/default/example/data-table-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/data-table-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "date-picker-demo": {
      name: "date-picker-demo",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover"],
      files: ["registry/default/example/date-picker-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/date-picker-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "date-picker-form": {
      name: "date-picker-form",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "form", "popover"],
      files: ["registry/default/example/date-picker-form.tsx"],
      component: React.lazy(() => import("@/registry/default/example/date-picker-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "date-picker-with-presets": {
      name: "date-picker-with-presets",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover", "select"],
      files: ["registry/default/example/date-picker-with-presets.tsx"],
      component: React.lazy(() => import("@/registry/default/example/date-picker-with-presets.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "date-picker-with-range": {
      name: "date-picker-with-range",
      type: "registry:example",
      registryDependencies: ["button", "calendar", "popover"],
      files: ["registry/default/example/date-picker-with-range.tsx"],
      component: React.lazy(() => import("@/registry/default/example/date-picker-with-range.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dialog-demo": {
      name: "dialog-demo",
      type: "registry:example",
      registryDependencies: ["dialog"],
      files: ["registry/default/example/dialog-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/dialog-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dialog-close-button": {
      name: "dialog-close-button",
      type: "registry:example",
      registryDependencies: ["dialog", "button"],
      files: ["registry/default/example/dialog-close-button.tsx"],
      component: React.lazy(() => import("@/registry/default/example/dialog-close-button.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "drawer-demo": {
      name: "drawer-demo",
      type: "registry:example",
      registryDependencies: ["drawer"],
      files: ["registry/default/example/drawer-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/drawer-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "drawer-dialog": {
      name: "drawer-dialog",
      type: "registry:example",
      registryDependencies: ["drawer", "dialog"],
      files: ["registry/default/example/drawer-dialog.tsx"],
      component: React.lazy(() => import("@/registry/default/example/drawer-dialog.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dropdown-menu-demo": {
      name: "dropdown-menu-demo",
      type: "registry:example",
      registryDependencies: ["dropdown-menu"],
      files: ["registry/default/example/dropdown-menu-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/dropdown-menu-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dropdown-menu-checkboxes": {
      name: "dropdown-menu-checkboxes",
      type: "registry:example",
      registryDependencies: ["dropdown-menu", "checkbox"],
      files: ["registry/default/example/dropdown-menu-checkboxes.tsx"],
      component: React.lazy(() => import("@/registry/default/example/dropdown-menu-checkboxes.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "dropdown-menu-radio-group": {
      name: "dropdown-menu-radio-group",
      type: "registry:example",
      registryDependencies: ["dropdown-menu", "radio-group"],
      files: ["registry/default/example/dropdown-menu-radio-group.tsx"],
      component: React.lazy(() => import("@/registry/default/example/dropdown-menu-radio-group.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "hover-card-demo": {
      name: "hover-card-demo",
      type: "registry:example",
      registryDependencies: ["hover-card"],
      files: ["registry/default/example/hover-card-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/hover-card-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-demo": {
      name: "input-demo",
      type: "registry:example",
      registryDependencies: ["input"],
      files: ["registry/default/example/input-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-disabled": {
      name: "input-disabled",
      type: "registry:example",
      registryDependencies: ["input"],
      files: ["registry/default/example/input-disabled.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-disabled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-file": {
      name: "input-file",
      type: "registry:example",
      registryDependencies: ["input"],
      files: ["registry/default/example/input-file.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-file.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-form": {
      name: "input-form",
      type: "registry:example",
      registryDependencies: ["input", "button", "form"],
      files: ["registry/default/example/input-form.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-with-button": {
      name: "input-with-button",
      type: "registry:example",
      registryDependencies: ["input", "button"],
      files: ["registry/default/example/input-with-button.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-with-button.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-with-label": {
      name: "input-with-label",
      type: "registry:example",
      registryDependencies: ["input", "button", "label"],
      files: ["registry/default/example/input-with-label.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-with-label.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-with-text": {
      name: "input-with-text",
      type: "registry:example",
      registryDependencies: ["input", "button", "label"],
      files: ["registry/default/example/input-with-text.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-with-text.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp-demo": {
      name: "input-otp-demo",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: ["registry/default/example/input-otp-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-otp-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp-pattern": {
      name: "input-otp-pattern",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: ["registry/default/example/input-otp-pattern.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-otp-pattern.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp-separator": {
      name: "input-otp-separator",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: ["registry/default/example/input-otp-separator.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-otp-separator.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp-controlled": {
      name: "input-otp-controlled",
      type: "registry:example",
      registryDependencies: ["input-otp"],
      files: ["registry/default/example/input-otp-controlled.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-otp-controlled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "input-otp-form": {
      name: "input-otp-form",
      type: "registry:example",
      registryDependencies: ["input-otp", "form"],
      files: ["registry/default/example/input-otp-form.tsx"],
      component: React.lazy(() => import("@/registry/default/example/input-otp-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "label-demo": {
      name: "label-demo",
      type: "registry:example",
      registryDependencies: ["label"],
      files: ["registry/default/example/label-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/label-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "menubar-demo": {
      name: "menubar-demo",
      type: "registry:example",
      registryDependencies: ["menubar"],
      files: ["registry/default/example/menubar-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/menubar-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "navigation-menu-demo": {
      name: "navigation-menu-demo",
      type: "registry:example",
      registryDependencies: ["navigation-menu"],
      files: ["registry/default/example/navigation-menu-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/navigation-menu-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "pagination-demo": {
      name: "pagination-demo",
      type: "registry:example",
      registryDependencies: ["pagination"],
      files: ["registry/default/example/pagination-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/pagination-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "popover-demo": {
      name: "popover-demo",
      type: "registry:example",
      registryDependencies: ["popover"],
      files: ["registry/default/example/popover-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/popover-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "progress-demo": {
      name: "progress-demo",
      type: "registry:example",
      registryDependencies: ["progress"],
      files: ["registry/default/example/progress-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/progress-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "radio-group-demo": {
      name: "radio-group-demo",
      type: "registry:example",
      registryDependencies: ["radio-group"],
      files: ["registry/default/example/radio-group-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/radio-group-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "radio-group-form": {
      name: "radio-group-form",
      type: "registry:example",
      registryDependencies: ["radio-group", "form"],
      files: ["registry/default/example/radio-group-form.tsx"],
      component: React.lazy(() => import("@/registry/default/example/radio-group-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "resizable-demo": {
      name: "resizable-demo",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: ["registry/default/example/resizable-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/resizable-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "resizable-demo-with-handle": {
      name: "resizable-demo-with-handle",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: ["registry/default/example/resizable-demo-with-handle.tsx"],
      component: React.lazy(() => import("@/registry/default/example/resizable-demo-with-handle.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "resizable-vertical": {
      name: "resizable-vertical",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: ["registry/default/example/resizable-vertical.tsx"],
      component: React.lazy(() => import("@/registry/default/example/resizable-vertical.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "resizable-handle": {
      name: "resizable-handle",
      type: "registry:example",
      registryDependencies: ["resizable"],
      files: ["registry/default/example/resizable-handle.tsx"],
      component: React.lazy(() => import("@/registry/default/example/resizable-handle.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "scroll-area-demo": {
      name: "scroll-area-demo",
      type: "registry:example",
      registryDependencies: ["scroll-area"],
      files: ["registry/default/example/scroll-area-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/scroll-area-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "scroll-area-horizontal-demo": {
      name: "scroll-area-horizontal-demo",
      type: "registry:example",
      registryDependencies: ["scroll-area"],
      files: ["registry/default/example/scroll-area-horizontal-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/scroll-area-horizontal-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "select-demo": {
      name: "select-demo",
      type: "registry:example",
      registryDependencies: ["select"],
      files: ["registry/default/example/select-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/select-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "select-scrollable": {
      name: "select-scrollable",
      type: "registry:example",
      registryDependencies: ["select"],
      files: ["registry/default/example/select-scrollable.tsx"],
      component: React.lazy(() => import("@/registry/default/example/select-scrollable.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "select-form": {
      name: "select-form",
      type: "registry:example",
      registryDependencies: ["select"],
      files: ["registry/default/example/select-form.tsx"],
      component: React.lazy(() => import("@/registry/default/example/select-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "separator-demo": {
      name: "separator-demo",
      type: "registry:example",
      registryDependencies: ["separator"],
      files: ["registry/default/example/separator-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/separator-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sheet-demo": {
      name: "sheet-demo",
      type: "registry:example",
      registryDependencies: ["sheet"],
      files: ["registry/default/example/sheet-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/sheet-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sheet-side": {
      name: "sheet-side",
      type: "registry:example",
      registryDependencies: ["sheet"],
      files: ["registry/default/example/sheet-side.tsx"],
      component: React.lazy(() => import("@/registry/default/example/sheet-side.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "skeleton-demo": {
      name: "skeleton-demo",
      type: "registry:example",
      registryDependencies: ["skeleton"],
      files: ["registry/default/example/skeleton-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/skeleton-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "skeleton-card": {
      name: "skeleton-card",
      type: "registry:example",
      registryDependencies: ["skeleton"],
      files: ["registry/default/example/skeleton-card.tsx"],
      component: React.lazy(() => import("@/registry/default/example/skeleton-card.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "slider-demo": {
      name: "slider-demo",
      type: "registry:example",
      registryDependencies: ["slider"],
      files: ["registry/default/example/slider-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/slider-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sonner-demo": {
      name: "sonner-demo",
      type: "registry:example",
      registryDependencies: ["sonner"],
      files: ["registry/default/example/sonner-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/sonner-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "switch-demo": {
      name: "switch-demo",
      type: "registry:example",
      registryDependencies: ["switch"],
      files: ["registry/default/example/switch-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/switch-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "switch-form": {
      name: "switch-form",
      type: "registry:example",
      registryDependencies: ["switch", "form"],
      files: ["registry/default/example/switch-form.tsx"],
      component: React.lazy(() => import("@/registry/default/example/switch-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "table-demo": {
      name: "table-demo",
      type: "registry:example",
      registryDependencies: ["table"],
      files: ["registry/default/example/table-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/table-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "tabs-demo": {
      name: "tabs-demo",
      type: "registry:example",
      registryDependencies: ["tabs"],
      files: ["registry/default/example/tabs-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/tabs-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-demo": {
      name: "textarea-demo",
      type: "registry:example",
      registryDependencies: ["textarea"],
      files: ["registry/default/example/textarea-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/textarea-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-disabled": {
      name: "textarea-disabled",
      type: "registry:example",
      registryDependencies: ["textarea"],
      files: ["registry/default/example/textarea-disabled.tsx"],
      component: React.lazy(() => import("@/registry/default/example/textarea-disabled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-form": {
      name: "textarea-form",
      type: "registry:example",
      registryDependencies: ["textarea", "form"],
      files: ["registry/default/example/textarea-form.tsx"],
      component: React.lazy(() => import("@/registry/default/example/textarea-form.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-with-button": {
      name: "textarea-with-button",
      type: "registry:example",
      registryDependencies: ["textarea", "button"],
      files: ["registry/default/example/textarea-with-button.tsx"],
      component: React.lazy(() => import("@/registry/default/example/textarea-with-button.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-with-label": {
      name: "textarea-with-label",
      type: "registry:example",
      registryDependencies: ["textarea", "label"],
      files: ["registry/default/example/textarea-with-label.tsx"],
      component: React.lazy(() => import("@/registry/default/example/textarea-with-label.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "textarea-with-text": {
      name: "textarea-with-text",
      type: "registry:example",
      registryDependencies: ["textarea", "label"],
      files: ["registry/default/example/textarea-with-text.tsx"],
      component: React.lazy(() => import("@/registry/default/example/textarea-with-text.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast-demo": {
      name: "toast-demo",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: ["registry/default/example/toast-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toast-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast-destructive": {
      name: "toast-destructive",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: ["registry/default/example/toast-destructive.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toast-destructive.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast-simple": {
      name: "toast-simple",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: ["registry/default/example/toast-simple.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toast-simple.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast-with-action": {
      name: "toast-with-action",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: ["registry/default/example/toast-with-action.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toast-with-action.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toast-with-title": {
      name: "toast-with-title",
      type: "registry:example",
      registryDependencies: ["toast"],
      files: ["registry/default/example/toast-with-title.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toast-with-title.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-demo": {
      name: "toggle-group-demo",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/default/example/toggle-group-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-group-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-disabled": {
      name: "toggle-group-disabled",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/default/example/toggle-group-disabled.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-group-disabled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-lg": {
      name: "toggle-group-lg",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/default/example/toggle-group-lg.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-group-lg.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-outline": {
      name: "toggle-group-outline",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/default/example/toggle-group-outline.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-group-outline.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-sm": {
      name: "toggle-group-sm",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/default/example/toggle-group-sm.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-group-sm.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-group-single": {
      name: "toggle-group-single",
      type: "registry:example",
      registryDependencies: ["toggle-group"],
      files: ["registry/default/example/toggle-group-single.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-group-single.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-demo": {
      name: "toggle-demo",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/default/example/toggle-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-disabled": {
      name: "toggle-disabled",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/default/example/toggle-disabled.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-disabled.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-lg": {
      name: "toggle-lg",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/default/example/toggle-lg.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-lg.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-outline": {
      name: "toggle-outline",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/default/example/toggle-outline.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-outline.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-sm": {
      name: "toggle-sm",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/default/example/toggle-sm.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-sm.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "toggle-with-text": {
      name: "toggle-with-text",
      type: "registry:example",
      registryDependencies: ["toggle"],
      files: ["registry/default/example/toggle-with-text.tsx"],
      component: React.lazy(() => import("@/registry/default/example/toggle-with-text.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "tooltip-demo": {
      name: "tooltip-demo",
      type: "registry:example",
      registryDependencies: ["tooltip"],
      files: ["registry/default/example/tooltip-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/tooltip-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-blockquote": {
      name: "typography-blockquote",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-blockquote.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-blockquote.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-demo": {
      name: "typography-demo",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h1": {
      name: "typography-h1",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-h1.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-h1.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h2": {
      name: "typography-h2",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-h2.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-h2.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h3": {
      name: "typography-h3",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-h3.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-h3.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-h4": {
      name: "typography-h4",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-h4.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-h4.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-inline-code": {
      name: "typography-inline-code",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-inline-code.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-inline-code.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-large": {
      name: "typography-large",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-large.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-large.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-lead": {
      name: "typography-lead",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-lead.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-lead.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-list": {
      name: "typography-list",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-list.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-list.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-muted": {
      name: "typography-muted",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-muted.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-muted.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-p": {
      name: "typography-p",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-p.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-p.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-small": {
      name: "typography-small",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-small.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-small.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "typography-table": {
      name: "typography-table",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/typography-table.tsx"],
      component: React.lazy(() => import("@/registry/default/example/typography-table.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "mode-toggle": {
      name: "mode-toggle",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/mode-toggle.tsx"],
      component: React.lazy(() => import("@/registry/default/example/mode-toggle.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-bar-demo": {
      name: "chart-bar-demo",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/chart-bar-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/chart-bar-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-bar-demo-grid": {
      name: "chart-bar-demo-grid",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/chart-bar-demo-grid.tsx"],
      component: React.lazy(() => import("@/registry/default/example/chart-bar-demo-grid.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-bar-demo-axis": {
      name: "chart-bar-demo-axis",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/chart-bar-demo-axis.tsx"],
      component: React.lazy(() => import("@/registry/default/example/chart-bar-demo-axis.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-bar-demo-tooltip": {
      name: "chart-bar-demo-tooltip",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/chart-bar-demo-tooltip.tsx"],
      component: React.lazy(() => import("@/registry/default/example/chart-bar-demo-tooltip.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-bar-demo-legend": {
      name: "chart-bar-demo-legend",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/chart-bar-demo-legend.tsx"],
      component: React.lazy(() => import("@/registry/default/example/chart-bar-demo-legend.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "chart-tooltip-demo": {
      name: "chart-tooltip-demo",
      type: "registry:example",
      registryDependencies: void 0,
      files: ["registry/default/example/chart-tooltip-demo.tsx"],
      component: React.lazy(() => import("@/registry/default/example/chart-tooltip-demo.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "sidebar-01": {
      name: "sidebar-01",
      type: "registry:block",
      registryDependencies: ["avatar", "button", "collapsible", "dropdown-menu", "drawer", "separator", "input", "popover", "sheet", "progress", "card", "use-mobile"],
      files: ["registry/default/block/sidebar-01/page.tsx", "registry/default/block/sidebar-01/components/app-sidebar.tsx", "registry/default/block/sidebar-01/components/nav-main.tsx", "registry/default/block/sidebar-01/components/nav-projects.tsx", "registry/default/block/sidebar-01/components/nav-secondary.tsx", "registry/default/block/sidebar-01/components/nav-user.tsx", "registry/default/block/sidebar-01/components/storage-card.tsx", "registry/default/block/sidebar-01/components/team-switcher.tsx", "registry/default/block/sidebar-01/hooks/use-sidebar.tsx", "registry/default/block/sidebar-01/ui/sidebar.tsx"],
      component: React.lazy(() => import("@/registry/default/block/sidebar-01/page.tsx")),
      source: "__registry__/default/block/sidebar-01/page.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: []
    },
    "login-01": {
      name: "login-01",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: ["registry/default/block/login-01/page.tsx", "registry/default/block/login-01/components/login-form.tsx"],
      component: React.lazy(() => import("@/registry/default/block/login-01/page.tsx")),
      source: "__registry__/default/block/login-01/page.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "charts-01": {
      name: "charts-01",
      type: "registry:block",
      registryDependencies: ["chart"],
      files: ["registry/default/block/charts-01.tsx"],
      component: React.lazy(() => import("@/registry/default/block/charts-01.tsx")),
      source: "__registry__/default/block/charts-01.tsx",
      category: "Application",
      subcategory: "Charts",
      chunks: [{
        name: "charts-01-chunk-0",
        description: "A bar chart showing the number of steps you have walked in the past 7 days.",
        component: React.lazy(() => import("@/registry/default/block/charts-01-chunk-0")),
        file: "registry/default/block/charts-01-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-1",
        description: "A line chart showing the resting heart rate for the past 7 days.",
        component: React.lazy(() => import("@/registry/default/block/charts-01-chunk-1")),
        file: "registry/default/block/charts-01-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-2",
        description: "Two horizontal bar charts showing total steps taken during the current year and last year.",
        component: React.lazy(() => import("@/registry/default/block/charts-01-chunk-2")),
        file: "registry/default/block/charts-01-chunk-2.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-3",
        description: "A bar chart showing the walking and running distance for the past 7 days.",
        component: React.lazy(() => import("@/registry/default/block/charts-01-chunk-3")),
        file: "registry/default/block/charts-01-chunk-3.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-4",
        description: "A bar chart showing move, exercise, and stand progress.",
        component: React.lazy(() => import("@/registry/default/block/charts-01-chunk-4")),
        file: "registry/default/block/charts-01-chunk-4.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-5",
        description: "A radial bar chart showing the percentage of time spent moving, exercising, and standing.",
        component: React.lazy(() => import("@/registry/default/block/charts-01-chunk-5")),
        file: "registry/default/block/charts-01-chunk-5.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-6",
        description: "A bar chart showing active energy in the past 7 days.",
        component: React.lazy(() => import("@/registry/default/block/charts-01-chunk-6")),
        file: "registry/default/block/charts-01-chunk-6.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "charts-01-chunk-7",
        description: "An area chart showing the time spent in bed for the past 7 days.",
        component: React.lazy(() => import("@/registry/default/block/charts-01-chunk-7")),
        file: "registry/default/block/charts-01-chunk-7.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-05": {
      name: "dashboard-05",
      type: "registry:block",
      registryDependencies: ["badge", "breadcrumb", "button", "card", "dropdown-menu", "input", "pagination", "progress", "separator", "sheet", "table", "tabs", "tooltip"],
      files: ["registry/default/block/dashboard-05.tsx"],
      component: React.lazy(() => import("@/registry/default/block/dashboard-05.tsx")),
      source: "__registry__/default/block/dashboard-05.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-05-chunk-0",
        description: "A card for an orders dashboard with a description and a button to create a new order.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-05-chunk-0")),
        file: "registry/default/block/dashboard-05-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-05-chunk-1",
        description: "A stats card showing this week's total sales in USD, the percentage difference from last week, and a progress bar.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-05-chunk-1")),
        file: "registry/default/block/dashboard-05-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-05-chunk-2",
        description: "A stats card showing this month's total sales in USD, the percentage difference from last month, and a progress bar.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-05-chunk-2")),
        file: "registry/default/block/dashboard-05-chunk-2.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-05-chunk-3",
        description: "A table of recent orders showing the following columns: Customer, Type, Status, Date, and Amount.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-05-chunk-3")),
        file: "registry/default/block/dashboard-05-chunk-3.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-05-chunk-4",
        description: "An order details card with order details, shipping information, customer information and payment information.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-05-chunk-4")),
        file: "registry/default/block/dashboard-05-chunk-4.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-06": {
      name: "dashboard-06",
      type: "registry:block",
      registryDependencies: ["badge", "breadcrumb", "button", "card", "dropdown-menu", "input", "sheet", "table", "tabs", "tooltip"],
      files: ["registry/default/block/dashboard-06.tsx"],
      component: React.lazy(() => import("@/registry/default/block/dashboard-06.tsx")),
      source: "__registry__/default/block/dashboard-06.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-06-chunk-0",
        description: "A list of products in a table with actions. Each row has an image, name, status, price, total sales, created at and actions.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-06-chunk-0")),
        file: "registry/default/block/dashboard-06-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-07": {
      name: "dashboard-07",
      type: "registry:block",
      registryDependencies: ["badge", "breadcrumb", "button", "card", "dropdown-menu", "input", "pagination", "progress", "separator", "sheet", "table", "tabs", "tooltip"],
      files: ["registry/default/block/dashboard-07.tsx"],
      component: React.lazy(() => import("@/registry/default/block/dashboard-07.tsx")),
      source: "__registry__/default/block/dashboard-07.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-07-chunk-0",
        description: "A card with a form to edit the product details",
        component: React.lazy(() => import("@/registry/default/block/dashboard-07-chunk-0")),
        file: "registry/default/block/dashboard-07-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-07-chunk-1",
        description: "A card with a form to edit the product stock and variants",
        component: React.lazy(() => import("@/registry/default/block/dashboard-07-chunk-1")),
        file: "registry/default/block/dashboard-07-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-07-chunk-2",
        description: "A card with a form to edit the product category and subcategory",
        component: React.lazy(() => import("@/registry/default/block/dashboard-07-chunk-2")),
        file: "registry/default/block/dashboard-07-chunk-2.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-07-chunk-3",
        description: "A card with a form to edit the product status",
        component: React.lazy(() => import("@/registry/default/block/dashboard-07-chunk-3")),
        file: "registry/default/block/dashboard-07-chunk-3.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-07-chunk-4",
        description: "A card with a form to upload product images",
        component: React.lazy(() => import("@/registry/default/block/dashboard-07-chunk-4")),
        file: "registry/default/block/dashboard-07-chunk-4.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-07-chunk-5",
        description: "A card with a call to action to archive the product",
        component: React.lazy(() => import("@/registry/default/block/dashboard-07-chunk-5")),
        file: "registry/default/block/dashboard-07-chunk-5.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-04": {
      name: "dashboard-04",
      type: "registry:block",
      registryDependencies: ["button", "card", "dropdown-menu", "input"],
      files: ["registry/default/block/dashboard-04.tsx"],
      component: React.lazy(() => import("@/registry/default/block/dashboard-04.tsx")),
      source: "__registry__/default/block/dashboard-04.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-04-chunk-0",
        description: "A sidebar navigation with links to general, security, integrations, support, organizations, and advanced settings.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-04-chunk-0")),
        file: "registry/default/block/dashboard-04-chunk-0.tsx",
        container: {
          className: "chunk-container after:right-0"
        }
      }, {
        name: "dashboard-04-chunk-1",
        description: "A form to update the store name.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-04-chunk-1")),
        file: "registry/default/block/dashboard-04-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-04-chunk-2",
        description: "A form to update the plugins directory with a checkbox to allow administrators to change the directory.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-04-chunk-2")),
        file: "registry/default/block/dashboard-04-chunk-2.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-03": {
      name: "dashboard-03",
      type: "registry:block",
      registryDependencies: ["badge", "button", "drawer", "input", "label", "select", "textarea", "tooltip"],
      files: ["registry/default/block/dashboard-03.tsx"],
      component: React.lazy(() => import("@/registry/default/block/dashboard-03.tsx")),
      source: "__registry__/default/block/dashboard-03.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-03-chunk-0",
        description: "A settings form a configuring an AI model and messages.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-03-chunk-0")),
        file: "registry/default/block/dashboard-03-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-03-chunk-1",
        description: "A form for sending a message to an AI chatbot. The form has a textarea and buttons to upload files and record audio.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-03-chunk-1")),
        file: "registry/default/block/dashboard-03-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-02": {
      name: "dashboard-02",
      type: "registry:block",
      registryDependencies: ["badge", "button", "card", "dropdown-menu", "input"],
      files: ["registry/default/block/dashboard-02.tsx"],
      component: React.lazy(() => import("@/registry/default/block/dashboard-02.tsx")),
      source: "__registry__/default/block/dashboard-02.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-02-chunk-0",
        description: "A card with a call to action",
        component: React.lazy(() => import("@/registry/default/block/dashboard-02-chunk-0")),
        file: "registry/default/block/dashboard-02-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-02-chunk-1",
        description: "An empty state showing no products with a heading, description and a call to action to add a product.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-02-chunk-1")),
        file: "registry/default/block/dashboard-02-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "dashboard-01": {
      name: "dashboard-01",
      type: "registry:block",
      registryDependencies: ["button", "dropdown-menu", "input", "sheet"],
      files: ["registry/default/block/dashboard-01.tsx"],
      component: React.lazy(() => import("@/registry/default/block/dashboard-01.tsx")),
      source: "__registry__/default/block/dashboard-01.tsx",
      category: "Application",
      subcategory: "Dashboard",
      chunks: [{
        name: "dashboard-01-chunk-0",
        description: "A card showing the total revenue in USD and the percentage difference from last month.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-01-chunk-0")),
        file: "registry/default/block/dashboard-01-chunk-0.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-01-chunk-1",
        description: "A card showing the total subscriptions and the percentage difference from last month.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-01-chunk-1")),
        file: "registry/default/block/dashboard-01-chunk-1.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-01-chunk-2",
        description: "A card showing the total sales and the percentage difference from last month.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-01-chunk-2")),
        file: "registry/default/block/dashboard-01-chunk-2.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-01-chunk-3",
        description: "A card showing the total active users and the percentage difference from last hour.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-01-chunk-3")),
        file: "registry/default/block/dashboard-01-chunk-3.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-01-chunk-4",
        description: "A card showing a table of recent transactions with a link to view all transactions.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-01-chunk-4")),
        file: "registry/default/block/dashboard-01-chunk-4.tsx",
        container: {
          className: "undefined"
        }
      }, {
        name: "dashboard-01-chunk-5",
        description: "A card showing a list of recent sales with customer names and email addresses.",
        component: React.lazy(() => import("@/registry/default/block/dashboard-01-chunk-5")),
        file: "registry/default/block/dashboard-01-chunk-5.tsx",
        container: {
          className: "undefined"
        }
      }]
    },
    "authentication-01": {
      name: "authentication-01",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: ["registry/default/block/authentication-01.tsx"],
      component: React.lazy(() => import("@/registry/default/block/authentication-01.tsx")),
      source: "__registry__/default/block/authentication-01.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "authentication-02": {
      name: "authentication-02",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: ["registry/default/block/authentication-02.tsx"],
      component: React.lazy(() => import("@/registry/default/block/authentication-02.tsx")),
      source: "__registry__/default/block/authentication-02.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "authentication-03": {
      name: "authentication-03",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: ["registry/default/block/authentication-03.tsx"],
      component: React.lazy(() => import("@/registry/default/block/authentication-03.tsx")),
      source: "__registry__/default/block/authentication-03.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "authentication-04": {
      name: "authentication-04",
      type: "registry:block",
      registryDependencies: ["button", "card", "input", "label"],
      files: ["registry/default/block/authentication-04.tsx"],
      component: React.lazy(() => import("@/registry/default/block/authentication-04.tsx")),
      source: "__registry__/default/block/authentication-04.tsx",
      category: "Authentication",
      subcategory: "Login",
      chunks: []
    },
    "chart-area-axes": {
      name: "chart-area-axes",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-area-axes.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-area-axes.tsx")),
      source: "__registry__/default/block/chart-area-axes.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-default": {
      name: "chart-area-default",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-area-default.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-area-default.tsx")),
      source: "__registry__/default/block/chart-area-default.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-gradient": {
      name: "chart-area-gradient",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-area-gradient.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-area-gradient.tsx")),
      source: "__registry__/default/block/chart-area-gradient.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-icons": {
      name: "chart-area-icons",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-area-icons.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-area-icons.tsx")),
      source: "__registry__/default/block/chart-area-icons.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-interactive": {
      name: "chart-area-interactive",
      type: "registry:block",
      registryDependencies: ["card", "chart", "select"],
      files: ["registry/default/block/chart-area-interactive.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-area-interactive.tsx")),
      source: "__registry__/default/block/chart-area-interactive.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-legend": {
      name: "chart-area-legend",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-area-legend.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-area-legend.tsx")),
      source: "__registry__/default/block/chart-area-legend.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-linear": {
      name: "chart-area-linear",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-area-linear.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-area-linear.tsx")),
      source: "__registry__/default/block/chart-area-linear.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-stacked-expand": {
      name: "chart-area-stacked-expand",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-area-stacked-expand.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-area-stacked-expand.tsx")),
      source: "__registry__/default/block/chart-area-stacked-expand.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-stacked": {
      name: "chart-area-stacked",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-area-stacked.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-area-stacked.tsx")),
      source: "__registry__/default/block/chart-area-stacked.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-area-step": {
      name: "chart-area-step",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-area-step.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-area-step.tsx")),
      source: "__registry__/default/block/chart-area-step.tsx",
      category: "Charts",
      subcategory: "Area",
      chunks: []
    },
    "chart-bar-active": {
      name: "chart-bar-active",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-bar-active.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-bar-active.tsx")),
      source: "__registry__/default/block/chart-bar-active.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-default": {
      name: "chart-bar-default",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-bar-default.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-bar-default.tsx")),
      source: "__registry__/default/block/chart-bar-default.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-horizontal": {
      name: "chart-bar-horizontal",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-bar-horizontal.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-bar-horizontal.tsx")),
      source: "__registry__/default/block/chart-bar-horizontal.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-interactive": {
      name: "chart-bar-interactive",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-bar-interactive.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-bar-interactive.tsx")),
      source: "__registry__/default/block/chart-bar-interactive.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-label-custom": {
      name: "chart-bar-label-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-bar-label-custom.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-bar-label-custom.tsx")),
      source: "__registry__/default/block/chart-bar-label-custom.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-label": {
      name: "chart-bar-label",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-bar-label.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-bar-label.tsx")),
      source: "__registry__/default/block/chart-bar-label.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-mixed": {
      name: "chart-bar-mixed",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-bar-mixed.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-bar-mixed.tsx")),
      source: "__registry__/default/block/chart-bar-mixed.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-multiple": {
      name: "chart-bar-multiple",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-bar-multiple.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-bar-multiple.tsx")),
      source: "__registry__/default/block/chart-bar-multiple.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-negative": {
      name: "chart-bar-negative",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-bar-negative.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-bar-negative.tsx")),
      source: "__registry__/default/block/chart-bar-negative.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-bar-stacked": {
      name: "chart-bar-stacked",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-bar-stacked.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-bar-stacked.tsx")),
      source: "__registry__/default/block/chart-bar-stacked.tsx",
      category: "Charts",
      subcategory: "Bar",
      chunks: []
    },
    "chart-line-default": {
      name: "chart-line-default",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-line-default.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-line-default.tsx")),
      source: "__registry__/default/block/chart-line-default.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-dots-colors": {
      name: "chart-line-dots-colors",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-line-dots-colors.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-line-dots-colors.tsx")),
      source: "__registry__/default/block/chart-line-dots-colors.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-dots-custom": {
      name: "chart-line-dots-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-line-dots-custom.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-line-dots-custom.tsx")),
      source: "__registry__/default/block/chart-line-dots-custom.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-dots": {
      name: "chart-line-dots",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-line-dots.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-line-dots.tsx")),
      source: "__registry__/default/block/chart-line-dots.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-interactive": {
      name: "chart-line-interactive",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-line-interactive.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-line-interactive.tsx")),
      source: "__registry__/default/block/chart-line-interactive.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-label-custom": {
      name: "chart-line-label-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-line-label-custom.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-line-label-custom.tsx")),
      source: "__registry__/default/block/chart-line-label-custom.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-label": {
      name: "chart-line-label",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-line-label.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-line-label.tsx")),
      source: "__registry__/default/block/chart-line-label.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-linear": {
      name: "chart-line-linear",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-line-linear.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-line-linear.tsx")),
      source: "__registry__/default/block/chart-line-linear.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-multiple": {
      name: "chart-line-multiple",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-line-multiple.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-line-multiple.tsx")),
      source: "__registry__/default/block/chart-line-multiple.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-line-step": {
      name: "chart-line-step",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-line-step.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-line-step.tsx")),
      source: "__registry__/default/block/chart-line-step.tsx",
      category: "Charts",
      subcategory: "Line",
      chunks: []
    },
    "chart-pie-donut-active": {
      name: "chart-pie-donut-active",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-donut-active.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-donut-active.tsx")),
      source: "__registry__/default/block/chart-pie-donut-active.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-donut-text": {
      name: "chart-pie-donut-text",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-donut-text.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-donut-text.tsx")),
      source: "__registry__/default/block/chart-pie-donut-text.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-donut": {
      name: "chart-pie-donut",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-donut.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-donut.tsx")),
      source: "__registry__/default/block/chart-pie-donut.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-interactive": {
      name: "chart-pie-interactive",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-interactive.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-interactive.tsx")),
      source: "__registry__/default/block/chart-pie-interactive.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-label-custom": {
      name: "chart-pie-label-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-label-custom.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-label-custom.tsx")),
      source: "__registry__/default/block/chart-pie-label-custom.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-label-list": {
      name: "chart-pie-label-list",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-label-list.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-label-list.tsx")),
      source: "__registry__/default/block/chart-pie-label-list.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-label": {
      name: "chart-pie-label",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-label.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-label.tsx")),
      source: "__registry__/default/block/chart-pie-label.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-legend": {
      name: "chart-pie-legend",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-legend.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-legend.tsx")),
      source: "__registry__/default/block/chart-pie-legend.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-separator-none": {
      name: "chart-pie-separator-none",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-separator-none.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-separator-none.tsx")),
      source: "__registry__/default/block/chart-pie-separator-none.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-simple": {
      name: "chart-pie-simple",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-simple.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-simple.tsx")),
      source: "__registry__/default/block/chart-pie-simple.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-pie-stacked": {
      name: "chart-pie-stacked",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-pie-stacked.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-pie-stacked.tsx")),
      source: "__registry__/default/block/chart-pie-stacked.tsx",
      category: "Charts",
      subcategory: "Pie",
      chunks: []
    },
    "chart-radar-default": {
      name: "chart-radar-default",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-default.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-default.tsx")),
      source: "__registry__/default/block/chart-radar-default.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-dots": {
      name: "chart-radar-dots",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-dots.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-dots.tsx")),
      source: "__registry__/default/block/chart-radar-dots.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-circle-fill": {
      name: "chart-radar-grid-circle-fill",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-grid-circle-fill.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-grid-circle-fill.tsx")),
      source: "__registry__/default/block/chart-radar-grid-circle-fill.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-circle-no-lines": {
      name: "chart-radar-grid-circle-no-lines",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-grid-circle-no-lines.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-grid-circle-no-lines.tsx")),
      source: "__registry__/default/block/chart-radar-grid-circle-no-lines.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-circle": {
      name: "chart-radar-grid-circle",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-grid-circle.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-grid-circle.tsx")),
      source: "__registry__/default/block/chart-radar-grid-circle.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-custom": {
      name: "chart-radar-grid-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-grid-custom.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-grid-custom.tsx")),
      source: "__registry__/default/block/chart-radar-grid-custom.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-fill": {
      name: "chart-radar-grid-fill",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-grid-fill.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-grid-fill.tsx")),
      source: "__registry__/default/block/chart-radar-grid-fill.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-grid-none": {
      name: "chart-radar-grid-none",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-grid-none.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-grid-none.tsx")),
      source: "__registry__/default/block/chart-radar-grid-none.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-icons": {
      name: "chart-radar-icons",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-icons.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-icons.tsx")),
      source: "__registry__/default/block/chart-radar-icons.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-label-custom": {
      name: "chart-radar-label-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-label-custom.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-label-custom.tsx")),
      source: "__registry__/default/block/chart-radar-label-custom.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-legend": {
      name: "chart-radar-legend",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-legend.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-legend.tsx")),
      source: "__registry__/default/block/chart-radar-legend.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-lines-only": {
      name: "chart-radar-lines-only",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-lines-only.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-lines-only.tsx")),
      source: "__registry__/default/block/chart-radar-lines-only.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-multiple": {
      name: "chart-radar-multiple",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-multiple.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-multiple.tsx")),
      source: "__registry__/default/block/chart-radar-multiple.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radar-radius": {
      name: "chart-radar-radius",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radar-radius.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radar-radius.tsx")),
      source: "__registry__/default/block/chart-radar-radius.tsx",
      category: "Charts",
      subcategory: "Radar",
      chunks: []
    },
    "chart-radial-grid": {
      name: "chart-radial-grid",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radial-grid.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radial-grid.tsx")),
      source: "__registry__/default/block/chart-radial-grid.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-radial-label": {
      name: "chart-radial-label",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radial-label.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radial-label.tsx")),
      source: "__registry__/default/block/chart-radial-label.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-radial-shape": {
      name: "chart-radial-shape",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radial-shape.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radial-shape.tsx")),
      source: "__registry__/default/block/chart-radial-shape.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-radial-simple": {
      name: "chart-radial-simple",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radial-simple.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radial-simple.tsx")),
      source: "__registry__/default/block/chart-radial-simple.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-radial-stacked": {
      name: "chart-radial-stacked",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radial-stacked.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radial-stacked.tsx")),
      source: "__registry__/default/block/chart-radial-stacked.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-radial-text": {
      name: "chart-radial-text",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-radial-text.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-radial-text.tsx")),
      source: "__registry__/default/block/chart-radial-text.tsx",
      category: "Charts",
      subcategory: "Radial",
      chunks: []
    },
    "chart-tooltip-default": {
      name: "chart-tooltip-default",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-tooltip-default.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-tooltip-default.tsx")),
      source: "__registry__/default/block/chart-tooltip-default.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-indicator-line": {
      name: "chart-tooltip-indicator-line",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-tooltip-indicator-line.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-tooltip-indicator-line.tsx")),
      source: "__registry__/default/block/chart-tooltip-indicator-line.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-indicator-none": {
      name: "chart-tooltip-indicator-none",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-tooltip-indicator-none.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-tooltip-indicator-none.tsx")),
      source: "__registry__/default/block/chart-tooltip-indicator-none.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-label-none": {
      name: "chart-tooltip-label-none",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-tooltip-label-none.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-tooltip-label-none.tsx")),
      source: "__registry__/default/block/chart-tooltip-label-none.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-label-custom": {
      name: "chart-tooltip-label-custom",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-tooltip-label-custom.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-tooltip-label-custom.tsx")),
      source: "__registry__/default/block/chart-tooltip-label-custom.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-label-formatter": {
      name: "chart-tooltip-label-formatter",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-tooltip-label-formatter.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-tooltip-label-formatter.tsx")),
      source: "__registry__/default/block/chart-tooltip-label-formatter.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-formatter": {
      name: "chart-tooltip-formatter",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-tooltip-formatter.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-tooltip-formatter.tsx")),
      source: "__registry__/default/block/chart-tooltip-formatter.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-icons": {
      name: "chart-tooltip-icons",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-tooltip-icons.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-tooltip-icons.tsx")),
      source: "__registry__/default/block/chart-tooltip-icons.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "chart-tooltip-advanced": {
      name: "chart-tooltip-advanced",
      type: "registry:block",
      registryDependencies: ["card", "chart"],
      files: ["registry/default/block/chart-tooltip-advanced.tsx"],
      component: React.lazy(() => import("@/registry/default/block/chart-tooltip-advanced.tsx")),
      source: "__registry__/default/block/chart-tooltip-advanced.tsx",
      category: "Charts",
      subcategory: "Tooltip",
      chunks: []
    },
    "utils": {
      name: "utils",
      type: "registry:lib",
      registryDependencies: void 0,
      files: ["registry/default/lib/utils.ts"],
      component: React.lazy(() => import("@/registry/default/lib/utils.ts")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "use-mobile": {
      name: "use-mobile",
      type: "registry:hook",
      registryDependencies: void 0,
      files: ["registry/default/hooks/use-mobile.tsx"],
      component: React.lazy(() => import("@/registry/default/hooks/use-mobile.tsx")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    },
    "use-toast": {
      name: "use-toast",
      type: "registry:hook",
      registryDependencies: void 0,
      files: ["registry/default/hooks/use-toast.ts"],
      component: React.lazy(() => import("@/registry/default/hooks/use-toast.ts")),
      source: "",
      category: "undefined",
      subcategory: "undefined",
      chunks: []
    }
  }
};

// registry/registry-styles.ts
var styles = [
  {
    name: "new-york",
    label: "New York"
  },
  {
    name: "default",
    label: "Default"
  }
];

// lib/rehype-component.ts
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      const { value: srcPath } = getNodeAttributeByName(node, "src") || {};
      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value;
        const fileName = getNodeAttributeByName(node, "fileName")?.value;
        if (!name && !srcPath) {
          return null;
        }
        try {
          for (const style of styles) {
            let src;
            if (srcPath) {
              src = srcPath;
            } else {
              const component = Index[style.name][name];
              src = fileName ? component.files.find((file) => {
                return file.endsWith(`${fileName}.tsx`) || file.endsWith(`${fileName}.ts`);
              }) || component.files[0] : component.files[0];
            }
            const filePath = path.join(process.cwd(), src);
            let source = fs.readFileSync(filePath, "utf8");
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              "@/components/"
            );
            source = source.replaceAll("export default", "export");
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src,
                  __style__: style.name
                },
                attributes: [
                  {
                    name: "styleName",
                    type: "mdxJsxAttribute",
                    value: style.name
                  }
                ],
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: source
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          for (const style of styles) {
            const component = Index[style.name][name];
            const src = component.files[0];
            const filePath = path.join(process.cwd(), src);
            let source = fs.readFileSync(filePath, "utf8");
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              "@/components/"
            );
            source = source.replaceAll("export default", "export");
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src
                },
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: source
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

// lib/rehype-npm-command.ts
import { visit as visit2 } from "unist-util-visit";
function rehypeNpmCommand() {
  return (tree) => {
    visit2(tree, (node) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return;
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm install")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm install",
          "yarn add"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm install",
          "pnpm add"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npm install",
          "bun add"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npx create-",
          "yarn create "
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx create-",
          "pnpm create "
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npx",
          "bunx --bun"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npx") && !node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand;
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx",
          "pnpm dlx"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npx",
          "bunx --bun"
        );
      }
    });
  };
}

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: {
      type: "string"
    },
    api: {
      type: "string"
    }
  }
}));
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    links: {
      type: "nested",
      of: LinksProperties
    },
    featured: {
      type: "boolean",
      default: false,
      required: false
    },
    component: {
      type: "boolean",
      default: false,
      required: false
    },
    toc: {
      type: "boolean",
      default: true,
      required: false
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            if (codeEl.data?.meta) {
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, "");
              }
            }
            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            const theme = await loadTheme(
              path2.join(process.cwd(), "/lib/highlighter-theme.json")
            );
            return await getHighlighter({ theme });
          },
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            preElement.properties["__withMeta__"] = node.children.at(0).tagName === "div";
            preElement.properties["__rawString__"] = node.__rawString__;
            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__;
            }
            if (node.__event__) {
              preElement.properties["__event__"] = node.__event__;
            }
            if (node.__style__) {
              preElement.properties["__style__"] = node.__style__;
            }
          }
        });
      },
      rehypeNpmCommand,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-LIHNUMZE.mjs.map
