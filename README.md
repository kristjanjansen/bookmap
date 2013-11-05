### View map

Point browser to ```client/index.html```

### Build map

1. Make sure you have Homebrew and NodeJS installed

  ```
  brew install gdal
  npm install -g mapshaper
  ```

2. Add this to your ```.bashrc``` or ```.profile```:

  ```
  export PYTHONPATH=/usr/local/lib/python2.7/site-packages:$PYTHONPATH
  ```

3. Install Kartograph.py ([instructions](http://kartograph.org/docs/kartograph.py/install-macosx.html))

  ```
  sudo pip install -r   https://raw.github.com/kartograph/kartograph.py/master/requirements-nogdal.txt
  sudo pip install https://github.com/kartograph/kartograph.py/zipball/master
  ```

4. Run the builder

  ```
  git clone https://github.com/kristjanjansen/ak_map
  cd ak_map
  chmod +x build.sh
  ./build.sh
  ```

