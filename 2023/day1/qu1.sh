#!/bin/bash

# input="mock_data.txt"
input="input.txt"
sum=0

regex_double="^[a-zA-Z]*([0-9]).*([0-9])[a-zA-Z]*$"
regex_single="^[a-zA-Z]*([0-9])[a-zA-Z]*$"

while IFS= read -r line
do
  if [[ $line =~ $regex_double ]]
  then
    current="${BASH_REMATCH[1]}${BASH_REMATCH[2]}"
  
  elif [[ $line =~ $regex_single ]]
  then
    current="${BASH_REMATCH[1]}${BASH_REMATCH[1]}"
  fi
  sum=$(( $sum + $current ))
done < "$input"

echo $sum