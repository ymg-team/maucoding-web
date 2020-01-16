cd /home/webdev/Web/academy.yussan.id

echo "update code from gitlab branch master..."
git pull origin master

echo "update deps"
yarn install

echo "rebuild app..."
yarn build:prod

echo "restart pm2..."
pm2 restart yussan-academy

echo "deploy finished and SITE IS LIVE..."
