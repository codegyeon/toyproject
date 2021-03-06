from flask import Flask, render_template, request, jsonify,redirect
from flask import session, escape
import bcrypt
from pymongo import MongoClient

client = MongoClient('mongodb+srv://sparta:sparta313@cluster0.44y0f.mongodb.net/Cluster0?retryWrites=true&w=majority')

db = client.dbch

app = Flask(__name__)
app.secret_key = "ddfeurqo3$#%^-23"
app.config['JSON_AS_ASCII'] = False

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/name', methods=["GET"])
def name():
    if 'username' in session:
        username = session['username']
        return jsonify({'name': username})
    else:
        return jsonify("세션기록이 없습니다.")

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
    nickname_receive = request.form['nickname_give']

    # 암호화 후 저장
    key1_text = key1_receive
    # 해싱을 위해 바이트 코드로 변환
    keybyte_plain = key1_text.encode('UTF-8')
    # 해싱
    key_text = bcrypt.hashpw(keybyte_plain, bcrypt.gensalt()).hex()

    all_users = list(db.users.find({}, {'_id': False}))
    for i in all_users:
        if i['id'] == id_receive:
            return jsonify({'msg': 'id 중복'})
        else:
            doc = {
                    'name': name_receive,
                    'id': id_receive,
                    'key1': key_text,
                    'nickname':  nickname_receive
                }
            db.users.insert_one(doc)
            return jsonify({'msg': '회원가입 성공!'})

@app.route("/login_account", methods=["POST"])
def web_mars_get():
    id_receive = request.form['id_give']
    key1_receive = request.form['key1_give']
    user = db.users.find_one({'id': id_receive})

    # 로그인 시 입력된 비밀번호라고 가정
    input_text = key1_receive

    # 입력된 비밀번호를 바이트 코드로 변환
    byte_input = input_text.encode('UTF-8')


    # 기존 저장된 값을 연산을 위해 hex에서 바이트로 변경
    # origin_pw = bytes.fromhex(db.users.find_one({'id': id_receive})['key1'])
    # bcrypt.checkpw(byte_input, origin_pw)
    # origin_pw != byte_input
    if not user:
        return jsonify({'msg': 'id 틀림'})
    elif not bcrypt.checkpw(byte_input, bytes.fromhex(db.users.find_one({'id': id_receive})['key1'])):
        return jsonify({'msg': '비밀 번호 틀림'})
    else:

        #세션 부여
        session['username'] = db.users.find_one({'id': id_receive})['nickname']
        return jsonify({'msg': '로그인'})

@app.route('/logout', methods=['GET']) # POST는 필요없다.
def logout():
    session.pop('username', None)
    return redirect('/')




#------------- 응원 불러오기----------------
@app.route('/list',methods=['GET'])
def list():
    db.users

    session

#---------------응원 작성
@app.route('/cheering', methods=['POST'])
def cheering():
    che_receive = request.form['che_give']
    if 'username' in session:
        doc = {
            'che': che_receive,
            'nickname': session['username']
        }
        db.cheering.insert_one(doc)
        return jsonify({'msg': '업로드 성공'})
    else:
        return jsonify({'msg':'로그인이 필요합니다. '})
if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)