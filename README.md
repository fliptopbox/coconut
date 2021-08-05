# Fun for a friend
Yet another conniseur of coconuts

## A super cool min HTTPServer w. hot reloading

```bash
> pip install httpwatcher
```
And then run it in the root directory.

## Buy the 3D model from here

https://www.turbosquid.com/3d-models/3d-model-coconut-cracked-1239817

(this script leeches the rendered frame sequence)


```bash
for i in {1..72}
do
    number=$(printf "%03d.jpg" $i)
    echo ">>> $number"
    curl "https://static.turbosquid.com/Preview/2018/01/04__11_55_55/0001.png4BC11DE1-76A4-4E67-9844-A3031BDE56EADefaultHQ-$i.jpg" >> $number
done
```
**IMPORTANT:** run the script in the destination folder
