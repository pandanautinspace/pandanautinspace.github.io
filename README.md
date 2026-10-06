# kennethb.me
It's always morning somewhere.

## Editing
- **Bio / intro:** `index.html` (top section)
- **"Now" list:** `_data/now.yml`
- **CV + Experience list:** `_data/cv.json` (add `"pdf": "/assets/cv.pdf"` under `basics` to show a download link)
- **Projects:** one file per project in `_projects/`. Front matter:

```yaml
title: Depth of Fun
subtitle: One-line hook shown under the title     # optional
date: 2026-02-01
status: Ongoing                # optional; replaces the date label
featured: 3                    # optional; shows in "Selected work", ordered by this number
kind: Course project           # Research / Industry / Course project / Game ...
context: Advanced 3D Graphics, IP Paris
excerpt: One sentence for the home page.
image: /assets/projects/dof.jpg   # optional hero + card image (16:9 looks best)
video: /assets/projects/dof.mp4   # optional; autoplays muted, loops
tags: [Unity, Shaders]
links:
  - { label: Code, url: https://github.com/... }
```

Put media in `assets/projects/`. Keep videos short (≤10 s, ≤5 MB, H.264 MP4); for GIFs, convert to MP4.
You can edit any file directly on github.com (press `.` in the repo for a full web editor); GitHub Pages rebuilds in about a minute.

## Local preview
`bundle install && bundle exec jekyll serve`
