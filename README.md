Link: https://rm-postman.netlify.app/<br>
Reference: https://github.com/WebDevSimplified/postman-clone

This project is a minimal version of postman with support for some basic features.
The reference project was made in June 2021.
While building this project in July, 2024 there seeems to have been some dependency warnings while using snowpack.<br>

The project is deployed on netlify on a separate branch. It uses webpack for bundling. However due to the large size of `codemirror` and `bootstrap` the bundle size was around `~700Kb`.<br>
To reduce the bundle size, moved to use `bootstrap cdn` and `gzip` for bundle file reducing the bundle size to around `~130KB`
