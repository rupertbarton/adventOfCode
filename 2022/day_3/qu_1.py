def calculate_priority(item):
    if item.isupper():
        return ord(item)-(ord("A")-27)
    else:
        return ord(item)-(ord("a")-1)

with open("input.txt") as file:
    lines = file.read().splitlines()
    
    total_priority = 0
    
    for line in lines:
        compartment_1, compartment_2 = line[:len(line)//2], line[len(line)//2:]
        items = {}
        
        wrong_char = None
        
        for i in compartment_1:
            items[i] = True
        
        for i in compartment_2:
            if items.get(i, False):
                wrong_char = i
        total_priority+=calculate_priority(wrong_char)


    print(total_priority)