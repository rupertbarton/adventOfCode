with open("test.txt") as file:
    lines = file.read().splitlines()
    
    highest_from_left = [-1 for _ in range(len(lines[0]))]
    highest_from_right = [-1 for _ in range(len(lines[0]))]
    highest_from_top = [-1 for _ in range(len(lines))]
    highest_from_bottom = [-1 for _ in range(len(lines))]
    
    trees_been_seen = [[0 for _ in range(len(lines[0]))] for _ in range(len(lines))]
    
    for row_index, row in enumerate(lines):
        for column_index, column in enumerate(row):
            
            if int(lines[row_index][column_index]) > highest_from_left[column_index]:
                trees_been_seen[row_index][column_index] = 1
                highest_from_left[column_index] = int(lines[row_index][column_index])
                
            if int(lines[row_index][column_index]) > highest_from_top[row_index]:
                trees_been_seen[row_index][column_index] = 1
                highest_from_top[row_index] = int(lines[row_index][column_index])
                
            if int(lines[-row_index-1][column_index]) > highest_from_right[column_index]:
                trees_been_seen[-row_index-1][column_index] = 1
                highest_from_right[column_index] = int(lines[-row_index-1][column_index])
                
            if int(lines[row_index][-column_index-1]) > highest_from_bottom[row_index]:
                trees_been_seen[row_index][-column_index-1] = 1
                highest_from_bottom[row_index] = int(lines[row_index][-column_index-1])
                
    print(highest_from_left)
    print(highest_from_right)
    print(highest_from_top)
    print(highest_from_bottom)
    print(trees_been_seen)
    for i in trees_been_seen:
        print(i)
    print(sum([sum(i) for i in trees_been_seen]))
