# Image assets

## About page — duplicate image correction

`studio-inspection.webp` is the dedicated studio image in the About page approach
section. The PPF material story retains `material-ppf.webp`.
Generated with built-in ImageGen on 2026-10-01; encoded with Sharp as WebP,
quality 86. Concept asset, not a photograph of real premises.
Exact prompt and source: `docs/image-prompts/studio-inspection.md`.

## Interior Detailing — stage 18

`interior-detailing.webp` replaces the exterior car photograph on the interior
service page. Generated with built-in ImageGen on 2026-10-01, encoded as WebP
with Sharp (quality 86). Concept photograph, not evidence of customer work.
Prompt and original filename: `docs/image-prompts/interior-detailing.md`.

`hero-porsche.webp` was generated with the built-in ImageGen tool on 2026-09-30
for the fictional NOIR Detailing portfolio website. It is a concept asset,
not a photograph documenting work performed by a real studio.
The generated PNG was encoded as WebP with Sharp; its composition was preserved.

## Homepage images — stage 11

Generated with the built-in ImageGen tool on 2026-09-30. These are conceptual
assets for a fictional portfolio, not evidence of customer work.
PNG originals were encoded as WebP using Sharp without editing composition.

| Asset | Original generated PNG | Purpose |
| --- | --- | --- |
| project-porsche.webp | exec-a3f1a677-7b79-4041-985e-1eae4de4112c.png | Featured project |
| material-ppf.webp | exec-f1e8bcfd-bf74-4451-83c6-d10badf96b6c.png | PPF material story |
| paint-before.webp | exec-0d3f6551-f49f-4344-a602-af332250415c.png | Concept paint defects |
| paint-after.webp | exec-14e36f85-354c-490c-abff-a2c717bbaf60.png | ImageGen edit removing defects |

The comparison explicitly identifies itself as a visualization.
Originals are retained in the Codex generated_images directory.

### Stage 11 prompts

### project

Use case photorealistic-natural. Create one landscape 16:9 editorial automotive photograph for NOIR Detailing, a fictional premium Moscow detailing atelier portfolio. Silver Porsche 911 Carrera 4S matching a modern 992 coupe. Rear three-quarter view, whole car visible in right-center with generous breathing room, low camera, sculptural rear fender, red continuous rear light unlit, silver multi-spoke wheels. Warm charcoal clean studio, large soft overhead white strip light reflections on immaculate silver paint. Refined Singer / Polestar photographic direction, natural photographic texture, realistic proportions, car clearly visible not too dark, quietly cinematic, restrained. No words, graphic UI, watermarks, logos added, people, neon, urban scenery, smoke, HDR. This is concept photography for a fictional portfolio, not documentary evidence of a real customer's project.

### material

Use case photorealistic-natural. Single landscape 4:3 editorial macro photograph for a premium automotive atelier material story. Very close crop of a professional's two gloved hands carefully fitting a clear transparent paint protection film over the curved silver fender of a modern Porsche in a pristine softly lit studio. Thin transparent film edge slightly lifted visibly bending in fingers with fine water droplets underneath, small soft rubber squeegee touching surface. Focus on tactile material, optically clear transparent edge, immaculate silver paint with clean white reflected strip light. Black nitrile gloves, dark neutral workshop background out of focus, no face. Natural photographic texture and plausible anatomy. Quiet technical craft, high-end automotive editorial, no logos, words, watermark, neon or exaggerated HDR. Concept photo for a fictional portfolio not documentary work.

### before

Use case photorealistic-natural. One landscape 16:9 high-end editorial macro photo for a detailing paint-correction comparison. Tight close-up of a curved dark graphite metallic automotive hood, fills the whole image, no car outline, no badges, no people. Diagonal soft white studio strip light reflected from upper left to lower right shows moderate fine circular swirl marks, hairline washing scratches and cloudy reflection on clear coat. Realistic subtle damage, not deep gouges. Surface geometrically smooth with slight curvature. Carefully controlled dark clean studio lighting, minimal composition, photographic texture, not CGI. Enough light so swirls visible at phone size, fine and physically credible. No text, no split screen, no added graphics. Fictional portfolio demonstration asset; not real customer evidence. The image will later be edited to remove scratches while keeping geometry and lighting identical.

### after

Edit target: attached graphite automotive paint macro photograph. Remove every swirl mark, hairline scratch and cloudy abrasion from the clear coat, showing the same paint after careful professional paint correction. Preserve exact composition, framing, perspective, surface curvature, diagonal white reflected studio light position and shape, corner edges, color, metallic flake texture, exposure and background. Change only paint defects and reflection clarity. Reflection becomes crisp, paint darker and clear where previously hazy, natural polished gloss without waxy CGI look. Do not move any object or light, do not add graphics, words or split screen. Identical aspect ratio and matched pixel registration are essential for an interactive before/after comparison. Fictional portfolio visual demonstration not evidence of real customer work.


## Generation prompt

Use case: photorealistic-natural. Asset type: background photograph for NOIR Detailing, a fictional premium automotive care atelier website hero. Generate one photorealistic high-end editorial automotive studio photograph, landscape 16:9 at high resolution. Subject: a silver Porsche 911 Carrera 4S, tightly cropped front-left quarter showing its curved hood, round headlight, sculpted front fender, a partial wheel and the lower windshield, occupying the right 65% of the image, car nose faces the left. Not a centered full-car photo. Camera close at hood level, cinematic but realistic studio product photography with precise beautiful soft overhead strip-light reflections on flawless silver paint, restrained warm-black workshop surroundings, no neon. Left 35% is nearly black negative space, without objects, suitable for large white website typography that will be added separately in HTML. Car should remain very legible in the right half; elegantly lit bright silver on dark, don't underexpose the body. Black floor, no scenery, no people. Premium craftsmanship, tactile paint, optically clear finish, natural photographic texture, minimal tasteful composition. No text, no lettering, no watermarks, no graphic UI, no artificial gradients, no smoke, no aggressive tuning, no spoiler wing, no fake excessive HDR. This is an asset for a fictional portfolio studio, not documentary evidence of a real customer project.
