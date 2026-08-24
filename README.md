# Your First 3D Experience on the Web

An interactive 3D product viewer built with Next.js, React Three Fiber, Three.js, and React Three Drei.

## What I Built

I built a small interactive 3D product viewer that runs directly in the browser.

Users can:

- Rotate and inspect the product with mouse or touch.
- Zoom in and out.
- Change the product color.
- Turn automatic rotation on or off.
- Use the experience comfortably on mobile devices.

The 3D scene uses simple geometry, lighting, shadows, and interactive controls to keep the experience lightweight while still demonstrating the core 3D workflow.

## Performance

I kept the scene intentionally lightweight by using simple 3D geometry instead of a large external model.

A few performance decisions I made:

- Capped the device pixel ratio to reduce GPU workload.
- Used a smaller 512×512 shadow map.
- Used simple meshes and materials.
- Disabled automatic animation when the user prefers reduced motion.
- Used a lazy-loaded 3D component so the main page does not have to render the WebGL canvas during the initial server render.
- Limited camera zoom distance to avoid unnecessary extreme rendering.

The experience was tested on desktop and mobile widths, including touch interaction.

## Accessibility

The color controls have accessible labels and visible focus states.

The viewer also respects the browser's `prefers-reduced-motion` setting by disabling automatic movement when reduced motion is requested.

## Built With

- Next.js
- React
- TypeScript
- Three.js
- React Three Fiber
- React Three Drei
- Tailwind CSS

## What I'd Add With More Time

With more time, I would replace the simple geometry with a properly optimized GLB product model and add compressed textures. I would also add more product parts and material options while keeping the scene within a reasonable performance budget.

## Live Demo

https://fe-aa2-3d-experience.vercel.app/

## Author

Saad Saleem