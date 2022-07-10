#!/bin/sh
rand=$((1 + $RANDOM % 5))
if [[ "$rand" == "3" ]]; then
bin/console app:ggsel-download category
max=$(bin/console app:ggsel-download page)
for (( i=1; i <= $max; ++i ))
do
    bin/console app:ggsel-download game $i
done
bin/console app:ggsel-download seller
bin/console app:ggsel-download clean
bin/console app:generate-sitemap
bin/console cache:clear
fi