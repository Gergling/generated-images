# generated-images
Repo for keeping angularjs-driven canvas-generated images.

Grunt will be used to build a frontend, which will include modules for specific projects, each of which will have a set of pages showing various generated canvas graphics.

# Modules
Angular file system will be modular and expressed as follows:
- [external project or grouping name]
  - [image name]
    - [various files/folders]

Once inside the image name folder, all files are included and can be in any file structure.

Module files will be automatically set up based on grouping folder names. They should not require dependencies for now, but the option of overwriting doesn't have to be ruled out.

The image name is how the image shows up in the groups list of images.

I will be able to navigate a list of projects, and a secondary tier of navigation for a list of images. One at a time will do for now.
