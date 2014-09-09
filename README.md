PUBLIC-ENU-SCRIPTS
==================

To hold all js files

Make sure you change your folder to PUBLIC/ENU/23030 on your local. Open this folder on MS web matrix. Then, add this remote rep and do a pull to get latest changes.

****If you want to overwrite all your local changes from server then, use below commands.

For example, you have added this remote rep with name: JS_FILES.

Now, on webmatrix, open shell and paste below commands.

git fetch JS_FILES 
git reset --hard JS_FILES/master 
git clean -f -d
