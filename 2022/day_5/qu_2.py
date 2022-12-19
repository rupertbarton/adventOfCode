with open("input.txt") as file:
    lines = file.read().splitlines()
    
    bottom_line = 9
    # bottom_line = 4
    
    stacks = {}
    for i in range(1,10):
        stacks[i] = []
    for i in range(bottom_line-1):
        for index, value in enumerate(lines[i]):
            if not value in "[] ":
                stacks[(index+3)/4].insert(0, value)
    
    for line in lines[bottom_line+1:]:
        count, start, end = [int(i) for i in line.split(" ")[1::2]]
        
        while count > 0:
            moving_crate = stacks[start].pop(-count)
            stacks[end].append(moving_crate)
            count-=1
    print(stacks)
    top = ""
    for i in range(1,10):
        if len(stacks[i])>0:
            top += stacks[i][-1]
    print(top)