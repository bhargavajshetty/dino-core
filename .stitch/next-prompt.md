---
page: map
---
A detailed interactive global map showing major excavation sites around the world.

**DESIGN SYSTEM (REQUIRED):**
# Design System Strategy: Jurassic Modern

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Bioluminescent Canopy."** 

This system rejects the sterile, flat nature of standard SaaS dashboards in favor of a "Jurassic Modern" editorial experience. It is designed to feel like a high-end, high-tech research interface embedded within a primordial environment. We achieve this by balancing the "primitive" (earthy textures, deep jungle tones) with the "prestige" (glassmorphism, ultra-refined typography, and glowing accents).

To break the "template" look, designers must embrace **Intentional Asymmetry**. Hero sections should utilize overlapping elements—such as a large `display-lg` headline partially obscured by a glassmorphic card—to create a sense of three-dimensional depth and organic growth.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the "Deep Jungle," utilizing low-light greens and midnight blues to create an immersive, focused environment.

*   **Primary (#8bd79b):** Use for "growth" actions and success states. It represents the vibrant life of the canopy.
*   **Secondary (#ffb693):** An earthy, clay-like tone used for secondary interactions.
*   **Tertiary (#ffb95f):** The "Amber" accent. This is your bioluminescent glow. Use it sparingly for critical calls to action or to highlight "fossilized" data.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off content. In this system, boundaries are defined by light, not lines. Sections must be separated by shifting from `surface` to `surface_container_low` or `surface_container_high`. 

### Surface Hierarchy & Nesting
Think of the UI as a series of physical layers.
1.  **Base Layer:** `surface` (#0b1326).
2.  **Sectioning:** Use `surface_container` for large content blocks.
3.  **Component Level:** Use `surface_container_highest` for cards to make them "float" above the jungle floor.

### The "Glass & Gradient" Rule
To achieve the "Modern" half of the aesthetic, floating navigation and high-priority modals must use **Glassmorphism**. Apply a 60% opacity to your surface tokens and a `backdrop-blur` of 12px–20px. 
*   **Signature Textures:** For CTAs, apply a linear gradient from `primary` (#8bd79b) to `primary_container` (#166534) at a 135-degree angle. This adds a "wet" leaf-like sheen that flat colors lack.

---

## 3. Typography: Editorial Authority
We pair the brutalist strength of **Epilogue** (Display/Headlines) with the technical precision of **Inter** (Body).

*   **Display & Headlines (Epilogue):** These should be treated as architectural elements. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create a commanding, "monumental" presence.
*   **Body & Titles (Inter):** Inter provides the "modern lab" contrast. Use `body-md` for high readability. 
*   **The Hierarchy Goal:** Use extreme scale contrast. A small `label-md` in all-caps Amber (`tertiary`) placed next to a massive `headline-lg` creates a sophisticated, editorial look reminiscent of a high-end nature journal.

---

## 4. Elevation & Depth
In "Jurassic Modern," depth is atmospheric, not structural.

*   **The Layering Principle:** Instead of shadows, stack your tokens. A `surface_container_lowest` card placed on a `surface_container_high` background creates a "recessed" look, like a fossil embedded in stone.
*   **Bioluminescent Shadows (Amber Glow):** For high-priority elements, do not use grey shadows. Use a diffused shadow (Blur: 32px, Spread: -4px) using the `tertiary` color (#ffb95f) at 10% opacity. This mimics the glow of amber in the dark.
*   **The "Ghost Border" Fallback:** If a container lacks contrast, use the `outline_variant` token at **15% opacity**. It should be felt, not seen.
*   **Roundedness:** All containers must strictly adhere to `xl` (1.5rem) corner radii. This softens the "Brutalist" typography and makes the UI feel organic and tactile.

---

## 5. Components

### Buttons
*   **Primary:** Gradient (`primary` to `primary_container`), `xl` roundedness, white text (`on_primary_container`).
*   **Secondary:** Glassmorphic fill (`surface_bright` at 20% opacity) with a `tertiary` (Amber) text color.
*   **Tertiary:** Ghost style. No background, `label-md` typography, slight hover glow.

### Cards & Lists
*   **Constraint:** Dividers are strictly forbidden. 
*   **Execution:** Use `spacing-8` (2rem) to separate list items. For cards, use `surface_container_highest` with an `xl` radius. 
*   **Interactive State:** On hover, a card should transition its "Ghost Border" from 15% to 40% opacity and increase its background brightness slightly.

### Input Fields
*   **Base:** `surface_container_lowest`.
*   **Focus State:** The border should not just "turn on"—the background should subtly transition toward `primary_container` with an Amber `tertiary` cursor.

### Signature Component: The "Specimen Tag" (Chips)
*   Used for metadata or status. Use `secondary_container` with `on_secondary_container` text. Apply a `sm` radius instead of `xl` to give them a "stamped" or "notched" look, contrasting with the overall rounded system.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where imagery or text breaks the grid.
*   **Do** use high-contrast typography scales (e.g., 56px headline next to 12px label).
*   **Do** leverage backdrop blurs to keep the "Jungle" background colors visible through the UI.

### Don't:
*   **Don't** use pure black (#000) or pure grey. Every dark tone must be tinted with green or blue.
*   **Don't** use 1px solid, opaque borders. It breaks the "Bioluminescent" immersion.
*   **Don't** use standard "drop shadows." If it doesn't look like an ambient glow, don't use it.
*   **Don't** crowd the interface. The "Jurassic" feel requires "breathing room" (use `spacing-16` or `spacing-20` for section margins).

**Page Structure:**
1. Header with navigation (same as index.html)
2. Interactive Map of the world
3. Sidebar with locations and details
4. Footer with links
