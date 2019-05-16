// 削除アイコン
let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
// 完了アイコン
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';

$(function() {


    // 追加ボタンがクリックされた時の処理
    $('#add').click(function () {

         // liタグを作成
        let li = $('<li>');

        // 入力欄（inputタグの）読み込み
        let inputTask = $('#task').val();

        // 入力された文字の取得
        li.text(inputTask);

         // 入力欄が空だったらボタンを押しても表示しない
         if (inputTask == '') {
            return;
        }

        // div追加
        let buttons = $('<div>').addClass('buttons');

        // divをliに追加
        $(li).append(buttons);

        // removeにbuttonタグの追加
        let remove = $('<button>').addClass('remove');
        remove.html(removeIcon);

        // buttons内にremoveボタンを追加
        $(buttons).append(remove);

        // removeをクリックしたとき
        $(remove).click(function() {
            li.fadeOut('slow', function() {
                li.remove();
            });
        });

        // doneにbuttonタグの追加
        let done = $('<button>').addClass('done');
        done.html(doneIcon);

        // buttons内にdoneボタンを追加
        $(buttons).append(done);

        // doneをクリックしたとき
        $(done).click(function() {
            li.appendTo('#done').hide().fadeIn('slow');
        });

        // 画面に表示
        $('#not-yet').prepend(li).hide().fadeIn('slow');

        // 入力欄の文字の削除
        $('#task').val('');
    });

});