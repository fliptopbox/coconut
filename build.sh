

# download all the assets
# (this way the repo stays light)

mkdir -p images/frames
cd images/frames

for i in {1..72}
do
    number=$(printf "%03d.jpg" $i)
    echo ">>> $number"
    curl "https://static.turbosquid.com/Preview/2018/01/04__11_55_55/0001.png4BC11DE1-76A4-4E67-9844-A3031BDE56EADefaultHQ-$i.jpg" >> $number
done

cd ../..

echo "Ready"
