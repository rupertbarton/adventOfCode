import time
start_time = time.time()

def calculate_priority(item):
    if item.isupper():
        return ord(item)-(ord("A")-27)
    else:
        return ord(item)-(ord("a")-1)

with open("input.txt") as file:
    lines = file.read().splitlines()
    
    total_priority = 0
    
    for index, line in enumerate(lines):
        if index%3 == 0:
            rucksack_1 = set(line)
        elif index%3 == 1:
            rucksack_2 = set(line)
        else:
            for i in line:
                if i in rucksack_1 and i in rucksack_2:
                    total_priority += calculate_priority(i)
                    break

    print(total_priority)
    
print("--- %s seconds ---" % (time.time() - start_time))