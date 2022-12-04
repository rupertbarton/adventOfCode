with open("input.txt") as file:
    lines = file.read().splitlines()
    
    total = 0
    
    for line in lines:
        elf_1 = list(map(int, line.split(",")[0].split("-")))
        elf_2 = list(map(int, line.split(",")[1].split("-")))
        
        elf_1_diff = elf_1[1] - elf_1[0]
        elf_2_diff = elf_2[1] - elf_2[0]
        
        elf_1_is_larger = elf_1_diff - elf_2_diff >= 0
        
        big_elf = elf_1 if elf_1_is_larger else elf_2
        small_elf = elf_2 if elf_1_is_larger else elf_1
        
        if big_elf[1]>=small_elf[1] and big_elf[0]<=small_elf[0]:
            total+=1
    
    print(total)
