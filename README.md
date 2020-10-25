# abcipl_code

git clone git@github.com:richaminda/abcipl_code.git

cd abcipl_code

npx create-react-app abcipl_react_flask

cd abcipl_react_flask

mkdir api

cd api

py -m pip install --user virtualenv

py -m venv env

.\env\Scripts\activate

pip install flask python-dotenv

pip install -U flask-cors

flask run

