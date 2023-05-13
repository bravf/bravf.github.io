project=$1
rm -rf $project
cd ../$project
npm run build
cd ../bravf.github.io
mv ../$project/dist/ $project
git add .
git commit -m 'update'
git push