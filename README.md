# Lazy loading React

## Introduction:

### What is lazyloading?

It is an optimization technique which prevents the entire application from loading at once.
Instead the elements crucial to the UI get to be loaded first, while the less important parts of the code will get loaded later. This can be useful when dealing with pages with large amounts of contemt which may cause performance issues.

### What we'll need

To implement this technique we'll need:

1] lazy() - function which enables dynamic import as a regular component.

2] Suspense component - which will show fallback content(i.e. loading indicator) while waiting for the lazy component to be loaded.

Both are imported directly from React
