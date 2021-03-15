#!/bin/bash
Stats_Line=`top -l 1 -n 0 -F -R`
Raw_CPU=$(ps -A -o %cpu | awk '{s+=$1} END {print s}')
Cores=$(sysctl hw.ncpu | awk '{print $2}')
Used_Mem=$(echo $Stats_Line | awk '{print $2}')
Wired_Mem=$(echo $Stats_Line | awk '{print $4}'| sed 's/(//')
memsize=`sysctl hw.memsize| awk '{print $2}'`
let totalmemory=$memsize/1048576
printf "***ps Data***\n Raw_CPU: $Raw_CPU \n Core_Qty: $Cores \n Total_Memory: $totalmemory \n***Top Data ***\n$Stats_Line"

#to multiply number\*number

