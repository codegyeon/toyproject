from flask import Flask, render_template, request, jsonify

from pymongo import MongoClient

client = MongoClient('mongodb+srv://sparta:sparta313@cluster0.44y0f.mongodb.net/Cluster0?retryWrites=true&w=majority')

db = client.dbsnow

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/newuser')
def newuser():
    return render_template('newuser.html')

@app.route("/new_account", methods=["POST"])
def login_try():
    name_receive = request.form['name_give']
    id_receive = request.form['id_give']
    key1_receive = request.form['key1_give']

    all_users = list(db.users.find({}, {'_id': False}))

    for i in all_users:
        if i['id'] == id_receive:
            return jsonify({'msg': 'id 중복'})

    doc = {
        'name': name_receive,
        'id': id_receive,
        'key1': key1_receive,
    }
    print(doc)
    db.users.insert_one(doc)

    return jsonify({'msg': '회원가입 성공!'})

@app.route("/login_account", methods=["POST"])
def web_mars_get():
    id_receive = request.form['id_give']
    key1_receive = request.form['key1_give']
    user_list = list(db.users.find({}, {'_id': False}))
    user = db.users.find_one({'id': id_receive})

    if not user:
        return jsonify({'msg': 'id 틀림'})
    elif db.users.find_one({'id': id_receive})['key1'] != key1_receive:
        return jsonify({'msg': '비밀 번호 틀림'})
    else:
        return jsonify({'msg': '로그인'})
    # for e in user_list:
    #     if e['id'] != id_receive:
    #         return jsonify({'msg': 'id 틀림'})
    #     elif e['id']['key1'] != key1_receive:
    #         return jsonify({'msg': '비밀 번호 틀림'})
    #     else:
    #         return jsonify({'msg': '로그인'})




if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)