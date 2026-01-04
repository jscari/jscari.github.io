Use https://bssg.dragas.net/


⚠️ Important note for macOS users

The default version of bash included with macOS is too old and not compatible with BSSG. You must install a newer version of bash using Homebrew.

# First, install a newer version of bash
brew install bash

# Then install other dependencies
brew install cmark
# Optional:
# brew install socat
# brew install pandoc
# brew install parallel

After installing the newer bash version, you may need to add it to your allowed shells list and set it as your default shell:

# Add the new bash to allowed shells
echo $(brew --prefix)/bin/bash | sudo tee -a /etc/shells

# Change your default shell (optional)
chsh -s $(brew --prefix)/bin/bash



Remember to set the MARKDOWN_PROCESSOR variable in your config.sh.local if you choose to use pandoc or markdown.pl instead of the default cmark. For markdown.pl, ensure the script is downloaded and available in your PATH.



1. Clone the BSSG core repository

git clone https://brew.bsd.cafe/stefano/BSSG.git
cd BSSG

2. Initialize your site directory

./bssg.sh init /Users/js/repositories/jscari.github.io/blog/input


This command creates a new, separate site directory with all necessary folders (src, pages, drafts, static) and a config.sh.local file. The script will ask if you want to automatically configure the core scripts to use your new site.
3. Create your first post

./bssg.sh post

