with open("input.txt") as file:
    lines = file.read().splitlines()
    
    def calculate_tail_pos(h_pos, t_pos):
        tail_will_move = False
        new_pos = t_pos[:]
        for i in range(2):
            if abs(h_pos[i]-t_pos[i]) > 1:
                tail_will_move = True

        if tail_will_move:
            new_pos = [(h_pos[i]+t_pos[i]) / 2 for i in range(2)]
            
        for i in range(2):
            if new_pos[i] % 1 > 0:
                new_pos[i] = int(h_pos[i])
            new_pos[i] = int(new_pos[i])
        
        return new_pos
        
    
    h_pos = [0,0]
    t_pos = [[0,0]] * 9
    visited_spots = {str(t_pos[-1])}
    
    for line in lines:
        direction, distance = line.split(" ")
        distance = int(distance)
        
        while distance > 0:
            if "U" in direction: h_pos[1] += 1
            elif "D" in direction: h_pos[1] -= 1
            elif "L" in direction: h_pos[0] -= 1
            elif "R" in direction: h_pos[0] += 1
            for index, t in enumerate(t_pos):
                if index == 0:
                    t_pos[index] = calculate_tail_pos(h_pos, t)
                else:
                    t_pos[index] = calculate_tail_pos(t_pos[index-1], t)
            distance -= 1
            visited_spots.add(str(t_pos[-1]))
            
    print(len(visited_spots))
            