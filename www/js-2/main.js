const $board= $('#board');

function createBoard(rows, cols) {
    $board.empty();
    for(let i=0; i<rows; i++){
        const  $row= $('<div>').addClass('row');
        for(let j=0; j<cols; j++) {
            const $col= $('<div>')
                .addClass('col hidden')
                .attr('data-row', i)
                .attr('data-col', j);
            if(Math.random() <0.1) {
                $col.addClass('mine');
            }
            $row.append($col);
        }
        $board.append($row);
    }

}

function restart() {
    createBoard(10, 10);
}

function gameover(isWin) {
    var message= null;
    if (isWin) {
        message= "You Won !";
    }
    else {
        message= "You Lost !";
        $('.col.mine').css("background-color", "red")
    }
    setTimeout(function() {
        alert(message);
        restart();
    }, 1000);
}

function reveal (oi, oj) {
    const seen = {};

    function helper (i, j) {
        if (i >= 10 || j>= 10 || i<0 || j<0) {
            return;
        }
        const key= `${i} ${j}`;
        if (seen[key]) {
            return ;
        }
        // console.log(key)
        const $cell = $(`.col.hidden[data-row=${i}][data-col=${j}]`);
        const mineCount= getMineCount(i ,j);
        if (
          !$cell.hasClass('hidden') ||
          $cell.hasClass('mine')
        ) {
            return;
        }

        $cell.removeClass('hidden');

        if (mineCount) {
            $cell.text(mineCount);
            return;
        }
        for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <=1 ; dj++) {
                helper(i + di, j + dj);
            }
        }
    }
    helper(oi, oj);
}

function getMineCount(i, j) {
    let count= 0;
    for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <=1 ; dj++) {
            const ni= i+ di;
            const nj= j+ dj;

            if(ni >= 10 || nj>= 10 || nj<0 || ni<0) continue;
            const $cell =
                $(`.col.hidden[data-row=${ni}][data-col=${nj}]`);
            if ($cell.hasClass('mine')) {
                count++;
            }
        }
    }
    return count;
}

$board.on('click', '.col.hidden', function () {
    const $cell = $(this);
    const row= $cell.data('row');
    const col= $cell.data('col');
    // console.log(row, col);
    if($cell.hasClass('mine')) {
        gameover(false);
    } else {
        reveal(row, col);
        const isGameOver = $('.col.hidden').length === $('.col.mine').length
        if (isGameOver) {
            gameOver(true);
        }
    }
})

restart();
