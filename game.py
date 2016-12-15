#!/usr/bin/env python

from flask import Flask, render_template

app = Flask(__name__)
app.debug = True

@app.route('/')
def play_game():
	return render_template('game.html')

def main():
	app.run(host='127.0.0.1', port=3456)

if __name__ == '__main__':
	main()