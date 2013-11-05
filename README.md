### Requirements for OSX

Homebrew and NodeJS

### Installation

```
brew install gdal
npm install -g mapshaper
```

Add this to you ```.bashrc``` or ```.profile```:

```
export PYTHONPATH=/usr/local/lib/python2.7/site-packages:$PYTHONPATH
```

Install Kartograph.py ([instructions](http://kartograph.org/docs/kartograph.py/install-macosx.html))

```
sudo pip install -r https://raw.github.com/kartograph/kartograph.py/master/requirements-nogdal.txt
sudo pip install https://github.com/kartograph/kartograph.py/zipball/master
```

And now you can run mapbuilder:

```
git clone https://gist.github.com/7298899.git
cd 7298899
chmod +x mapbuilder.sh
./mapbuilder.sh
```