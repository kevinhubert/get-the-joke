from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/joke', methods=['GET'])
def get_joke():
    headers = {"Accept": "application/json"}
    response = requests.get("https://icanhazdadjoke.com/", headers=headers)

    if response.status_code == 200:
        joke = response.json().get("joke", "No joke found")
    else:
        joke = "Failed to fetch a joke"

    return jsonify({"joke": joke})

if __name__ == '__main__':
    app.run(debug=True)
