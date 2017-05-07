npm run p
tar -zcv -f build.tar.gz ./build
scp ./build.tar.gz root@119.29.73.170:/data/www/mini_fe/fe
ssh root@119.29.73.170 > /dev/null 2>&1 << eeooff
cd /data/www/mini_fe/fe
tar -zxv -f build.tar.gz
rm -f ./build.tar.gz
exit
eeooff
echo done!