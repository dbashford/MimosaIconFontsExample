MimosaIconFontsExample
======================

An example project showing the usage of the mimosa-svgs-to-iconfonts module

Usage
======
1. `git clone https://github.com/dbashford/MimosaIconFontsExample`
2. `cd MimosaIconFontsExample`
3. `npm install`
4. `mimosa watch -s`
5. open http://localhost:3000
6. click the buttons!
7. browse the code

To generate icons, use the `mimosa iconfonts` command.

The `mimosa iconfonts` command does the following:

* Looks in `fonts/svgs/` for folders.
* Each folder gets turned into a separate font set.
* For each folder in `fonts/svgs` a folder is created in `fonts`.
* That folder contains each of the necessary font files and a `stylesheet.css` for that font.
* Each original `.svg` in the `svgs` folder has its own style in the `.css`, named for the name of the `.svg`.
* The font and the font files themselves are named for the folder in `svgs` where the font originated.

Other things to note:

* In the mimosa-config, the `svgs` folder is `exclude`d.  That is because we don't want each indivdual svg being copied over to `public`.  We only keep those svgs there so we can build the fonts.
* In the `views/layout.jade` you can see the `stylesheet` being brought in.