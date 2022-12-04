import time
start_time = time.time()

with open("input.txt") as file:
    lines = file.read().splitlines()
    
    def is_in_range(value, range):
        return value >= range[0] and value <= range[1]
        
    total = 0
    
    for line in lines:
        elf_1 = list(map(int, line.split(",")[0].split("-")))
        elf_2 = list(map(int, line.split(",")[1].split("-")))
        
        if (is_in_range(elf_1[0], elf_2)
        or  is_in_range(elf_1[1], elf_2)
        or  is_in_range(elf_2[0], elf_1)
        or  is_in_range(elf_2[1], elf_1)):
            total+=1
    
    # print(total)
print("--- %s seconds ---" % (time.time() - start_time))