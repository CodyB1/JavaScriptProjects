# JavaScriptProjects


# Basic Git commands


**Move between directories**

cd folder_name

cd ..

cd /

cd ~



**Create directory**

mkdir folder_name



**Set up new repository in existing directory**

echo "# JavaScriptProjects" >> README.md

git init

git add README.md
git commit -m "first commit"
git remote add origin https://github.com/CodyB1/JavaScriptProjects.git

git push -u origin master



**Save latest actions and push to github**

git add .
git commit -m "second commit"
git push -u origin master



**Check what’s happening in current local repository**

git status



**Pulling latest updates from github repository**

git pull



**Clone a respository as a new directory**

git clone https://github.com/CodyB1/JavaScriptProjects.git



**Set Url of local repository**

git remote set-url origin https://github.com/CodyB1/JavaScript30.git



**Get url of github respository (to check you are sending it to the right place**

git remote get-url origin



**Open directory in atom**

atom .
