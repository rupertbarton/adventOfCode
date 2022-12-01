with open("input") as file:
    lines = file.read().splitlines()
    
    max_c = 0
    current = 0
    
    lines += [""]
    
    for i in lines:
        i = int(i.strip() or 0)
        current+=i
        if i == 0:
            max_c = current if current > max_c else max_c
            current = 0
        
    
    print(max_c)