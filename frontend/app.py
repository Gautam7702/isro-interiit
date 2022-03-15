from fileinput import filename
from flask import Flask, render_template,request,redirect
import os
import json

app = Flask(__name__)
UPLOADFOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOADFOLDER

@app.route('/')
def homePage():
    return render_template('index.html')

@app.route('/submit',methods=['GET','POST'])
def uploadFile():
    if(request.method == 'POST'):
        if 'file' not in request.files :
            return redirect('/')
        file = request.files['file']
        filename = file.filename
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        f = open('static/sample_response.json')
        data = json.load(f)
        return render_template('results.html',graphData = data)

if(__name__=='__main__'):
    app.run(debug=True)