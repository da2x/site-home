all: dist

extension = config.xml site-home.html \
            scripts/*.js includes/*.js \
            icon-*.png ToolbarIcon.png ToolbarIcon@2x.png ToolbarIcon-Win.png \
            COPYING

sysexcludes = '.DS_Store' '__MACOSX' \
              'Thumbs.db' 'desktop.ini'

site-home.oex: $(extension)
	zip -9r ./site-home.oex . -i $(extension) -x $(sysexcludes)

dist: site-home.oex

clean:
	rm -f ./site-home.oex
