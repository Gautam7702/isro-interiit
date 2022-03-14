import json

def analyse(file):
    # Opening JSON file
    with open('sample_response.json', 'r') as openfile:
        # Reading from json file
        json_object = json.load(openfile)
        return json_object
  
