brew install chruby ruby-install xz
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.bashrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.bashrc
source ~/.bashrc
# run 'chruby' to see actual version and update the next commant
echo "chruby ruby-3.1.3" >> ~/.bashrc
source ~/.bashrc
# ruby -v to see actual version to check if it is installed
sudo gem install jekyll
sudo gem install  bundler
# live preview
jekyll serve --livereloadjekyll serve --livereload