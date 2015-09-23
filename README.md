# generated-images
Repo for keeping angularjs-driven canvas-generated images.

Grunt will be used to build a frontend, which will include modules for specific projects, each of which will have a set of pages showing various generated canvas graphics.

# Modules
Angular file system will be modular and expressed as follows:
- application
- [some external project or grouping name]
  - [some image name]
    - [various files]
    - factory.js

factory.js is passed suitable resources to modify a canvas context.

Module files will be automatically set up based on folder names. They should not require dependencies for now, but the option of overwriting doesn't have to be ruled out.

Factory can inject other resources from inside grouping module.

I will be able to navigate a list of projects, and a secondary tier of navigation for a list of images. One at a time will do for now.
