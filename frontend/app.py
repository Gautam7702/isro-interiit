from flask import Flask, render_template,request,redirect,jsonify
import os
import json
import sys
sys.path.insert(1, 'C:\\Users\\gomci\\OneDrive\\Desktop\\isro_final\\isro-interiit')    
from backend.main import get_analysis_data
    

app = Flask(__name__)
UPLOADFOLDER = 'frontend\\uploads'
app.config['UPLOAD_FOLDER'] = UPLOADFOLDER
@app.route('/')
def homePage():
    return render_template('index.html')

@app.route('/submit',methods=['GET','POST'])
def uploadFile():
    if(request.method == 'POST'):
        if 'file' not in request.files :
            return redirect('/')
        print(request)
        file = request.files['file']
        filename = file.filename
        # print(file)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        path = "frontend/uploads/"+filename 
        f = get_analysis_data(path,"fits")
        # print(f)
        return render_template('results.html',graphData = f)
if(__name__=='__main__'):
    app.run(debug=True)