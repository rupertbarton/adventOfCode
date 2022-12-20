with open("input.txt") as file:
    lines = file.read().splitlines()
    
    for line in lines:
        current = line[:4]
        for index, value in enumerate(line[3:]):
            if len(set(current)) == 4:
                print(index+3)
                break
            current = line[index:index+4]
            
            