#!/bin/bash

input="mock_data_qu2.txt"
# input="input.txt"
sum=0

declare -A numbers

numbers=( [one]="1" \
          [two]="2"\
          [three]="3"\
          [four]="4"\
          [five]="5"\
          [six]="6"\
          [seven]="7"\
          [eight]="8"\
          [nine]="9" \
          [1]="1" \
          [2]="2"\
          [3]="3"\
          [4]="4"\
          [5]="5"\
          [6]="6"\
          [7]="7"\
          [8]="8"\
          [9]="9" \
        )

int_regex="[0-9]|one|two|three|four|five|six|seven|eight|nine"

regex_double="($int_regex).*($int_regex)$"
regex_single="($int_regex)$"

while IFS= read -r line
do
  if [[ $line =~ $regex_double ]]
  then
  echo
  echo ${BASH_REMATCH[1]}
  echo ${BASH_REMATCH[2]}
    current="${numbers[${BASH_REMATCH[1]}]}${numbers[${BASH_REMATCH[2]}]}"
  
  elif [[ $line =~ $regex_single ]]
  then
    current="${numbers[${BASH_REMATCH[1]}]}${numbers[${BASH_REMATCH[1]}]}"
  fi
  sum=$(( $sum + $current ))
  echo "current: $current"
  echo "sum: $sum"
  echo $line
done < "$input"

echo $sum