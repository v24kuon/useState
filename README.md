# useState 勉強まとめ

useState について勉強したのでそれに関するまとめ

## useState1

## **コンポーネントは頭文字を大文字で作成する**

state の変数はコンポーネントのレンダリングごとに一定。<br>
なのでレンダリング時値が 0 の場合はそれを 1 にするという処理が繰り返されるため<br>
関数を 2 つ書いても 1 しか増えない。<br>
なのでカッコ内に関数を書いてその関数の引数に更新直前の state の値を渡すことで<br>
その値に 1 を足すことができて今回の場合だと 2 づつ増えた<br>

## useState2

onChange→ 何か変更(文字を入力や消したり等)があった際に働く<br>
{(e) => setName({ ...name, first: e.target.value })}<br>
e→html のイベントハンドラー情報が返ってくる場所<br>
...name→{ first: '', last: '' }を要素ごとに分解する。分解しないとセットになっているため片方を変更するともう片方が消える<br>
e.target.value→ イベントハンドラーの中の value をターゲットにする<br>
