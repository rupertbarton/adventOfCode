
def cd(path, command):
    if "/" in command:
        return []
    elif ".." in command:
        return path[:-1]
    else:
        return path + [command.split(" ")[2]]
    
    
def set_nested_dir(path, new_dir, dir):
    if len(path) == 1:
        if path[0] in dir:
            for key in new_dir:
                 dir[path[0]][key] = new_dir[key]
        else:
            dir[path[0]] = new_dir
    elif len(path) == 0:
        for key in new_dir:
                dir[key] = new_dir[key]
    else:
        set_nested_dir(path[1:], new_dir, dir.get(path[0], {}))


def set_total_dir_size(dir):
    total = 0
    for key in dir:
        if isinstance(dir[key], dict):
            set_total_dir_size(dir[key])
            total += dir[key]["__value__"]
        else:
            total += int(dir[key])
    dir["__value__"] = total


def get_dirs_less_than_value(dir, value):
    total = []
    for key in dir:
        if isinstance(dir[key], dict):
            total += get_dirs_less_than_value(dir[key], value)
    if dir["__value__"] <= value:
        total += [dir["__value__"]]
    return total

with open("input.txt") as file:
    lines = file.read().splitlines()
    lines += ["$"]
    
    current_fs = {}
    
    current_path = []
    
    current_ls = {}
    ls = False
    for line in lines:
        if ls:
            if "$" in line:
                ls = False
                set_nested_dir(current_path, current_ls, current_fs)
            elif not "dir" in line.split(" ")[0]:
                file_name = line.split(" ")[1]
                file_size = line.split(" ")[0]
                current_ls[file_name] = file_size
        
        if "$ cd" in line:
            current_path = cd(current_path, line)
        if "$ ls" in line:
            current_ls = {}
            ls = True
    
    set_total_dir_size(current_fs)
    print(sum(get_dirs_less_than_value(current_fs, 100000)))