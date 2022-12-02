def get_lowest(l):
    lowest_index = 0
    for index, i in enumerate(l):
         if l[lowest_index] > i: lowest_index = index
    return lowest_index
        
    

with open("input.txt") as file:
    lines = file.read().splitlines()
    
    max_cs = [0,0,0]
    current = 0
    
    lines += [""]
    
    for i in lines:
        i = int(i.strip() or 0)
        current+=i
        if i == 0:
            if current > max_cs[get_lowest(max_cs)]: max_cs[get_lowest(max_cs)] = current
            current = 0
        
    print(sum(max_cs[:3]))