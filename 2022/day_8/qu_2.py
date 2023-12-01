from turtle import right


with open("input.txt") as file:
    lines = file.read().splitlines()
    
    tree_scenic_values = [[0 for _ in range(len(lines[0]))] for _ in range(len(lines))]
    
    for row_index, row in enumerate(lines):
        for column_index, value in enumerate(row):
            
            left = 0
            right = 0
            up = 0
            down = 0
            
            for i in range(column_index): # LEFT
                if int(row[column_index-i-1]) >= int(value):
                    left = i + 1
                    break
                if column_index-i-1 == 0:
                    left = column_index
                    break
            
            
            for i in range(len(row) - column_index): # RIGHT
                if i == len(row) - column_index-1:
                    right = len(row) - column_index-1
                    break
                if int(row[column_index+i+1]) >= int(value):
                    right = i+1
                    break
            
            
            for i in range(row_index): # UP
                if int(lines[row_index-i-1][column_index]) >= int(value):
                    up = i + 1
                    break
                if row_index-i-1 == 0:
                    up = row_index
                    break
            
            for i in range(len(lines) - row_index): # DOWNN
                if len(lines) - row_index - 1 == i:
                    down = len(lines) - row_index - 1
                    break
                if int(lines[row_index+i+1][column_index]) >= int(value):
                    down = i + 1
                    break
                    
                    
            tree_scenic_values[row_index][column_index] = down * up * left * right
                
    print(max([max(i) for i in tree_scenic_values]))