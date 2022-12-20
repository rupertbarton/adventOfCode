with open("input.txt") as file:
    lines = file.read().splitlines()
    
    for line in lines:
        current = line[:14]
        for index, value in enumerate(line[13:]):
            if len(set(current)) == 14:
                print(index+13)
                break
            current = line[index:index+14]
            
            