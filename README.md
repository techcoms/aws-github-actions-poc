Run this once on EC2:

sudo apt update
sudo apt install -y nodejs npm git
sudo npm install -g pm2

sudo mkdir -p /var/www/aws-github-actions-poc
sudo chown -R ubuntu:ubuntu /var/www/aws-github-actions-poc

git clone https://github.com/<your-username>/aws-github-actions-poc.git \
  /var/www/aws-github-actions-poc


Start app once:

cd /var/www/aws-github-actions-poc
npm install
pm2 start ecosystem.config.js
pm2 save
