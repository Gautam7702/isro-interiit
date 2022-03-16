def bordered_average(array, index, towards):
  if towards == "left":
    if index <= 400:
      return sum(array[:index]) / index
    else:
      return sum(array[index - 400:index]) / 400
  elif towards == "right":
    if len(array) - index <= 400:
      return sum(array[index:]) / (len(array) - index)
    else:
      return sum(array[index:index + 400]) / 400
  else:
    return 0
  
def create_sparse_resources(matrix):
  init_time = matrix[0][0]
  length = int(matrix[-1][0] - init_time) + 1
  array = [0] * int(length)
  flags = [0] * int(length)
  for data in matrix:
    index = int(data[0] - init_time)
    array[index] = float(data[1])
    flags[index] = 1
  return array, flags

def complete_curve(matrix):
  array, flags = create_sparse_resources(matrix)

  last_open_end = None
  avg = sum(array)/len(array)
  for i in range(len(flags) - 1):
    if flags[i] == 0 and flags[i-1] == 1:
      array[i] = bordered_average(array, i, "left")
      last_open_end = i
      # print(f"in {last_open_end}, filled {array[i]}:{type(array[i])}")
    elif flags[i] == 1 and flags[i-1] == 0:
      array[i-1] = bordered_average(array, i, "right")
      if last_open_end != None:
        increment = (array[i - 1] - array[last_open_end]) / (i - last_open_end)
        # print(f"filling from {last_open_end} to {i}")
        for j in range(last_open_end, i):
          array[j] = array[j - 1] + increment
        last_open_end = None
  
  return array