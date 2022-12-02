scores = {
    "A": 1,
    "B": 2,
    "C": 3
}

outcome_scores = {
    "X": 0,
    "Y": 3,
    "Z": 6
}

def get_shape_score(result, away):
    if result == "X":
        return (scores[away] - 2) % 3 + 1
    if result == "Y":
        return scores[away]
    if result == "Z":
        return scores[away] % 3 + 1


with open("input.txt") as file:
    lines = file.read().splitlines()
    
    total_score = 0
    
    for i in lines:
        line = i.split(" ")
        outcome = line[1]
        away = line[0]
        
        total_score += get_shape_score(outcome, away)
        total_score += outcome_scores[outcome]

    print(total_score)