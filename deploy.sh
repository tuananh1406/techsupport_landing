rm -rf dist
npm run build
scp -r dist techsupport:
ssh techsupport -t 'sudo rm -rf /src/techsupport_landing/'
ssh techsupport -t 'sudo mv /home/anhnht/dist/ /src/techsupport_landing/'
ssh techsupport -t 'sudo systemctl restart nginx'
