scores = {
    "A": 1,
    "B": 2,
    "C": 3
}

callibration = {
    "X": "A",
    "Y": "B",
    "Z": "C"
}

def outcomeScore(home, away):
    if home == away: 
        return 3
    
    if (scores[home] - scores[away] == 1 or
    scores[home] - scores[away] == -2): 
        return 6
    
    return 0

outcome = {
    
}

with open("input.txt") as file:
    lines = file.read().splitlines()
    
    total_score = 0
    
    for i in lines:
        line = i.split(" ")
        home = callibration[line[1]]
        away = line[0]
        
        total_score += scores[home]
        total_score += outcomeScore(home, away)

    print(total_score)