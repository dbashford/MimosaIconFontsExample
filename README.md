MimosaIconFontsExample
======================

An example project showing the usage of the mimosa-svgs-to-iconfonts module with the [Mimosa build tool](mimosa.io).

Usage
======
1. npm install -g mimosa
2. `git clone https://github.com/dbashford/MimosaIconFontsExample`
3. `cd MimosaIconFontsExample`
4. `npm install`
5. `mimosa watch -s`
6. open http://localhost:3000
7. click the buttons!
8. browse the code

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
