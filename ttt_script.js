var player_X_25DEV010 = "X";
var player_step_count = 0;
function col_click(click_col) {
    // Check if the clicked cell is empty
    if (click_col.textContent === "") {
        // Update the info based on the current player
        if (player_X_25DEV010 === "X") {
            document.getElementById("info_id").textContent = "Player O Turn";
        }
        else {
            document.getElementById("info_id").textContent = "Player X Turn";
        }
        // Set the content of the clicked cell to the current player
        click_col.textContent = player_X_25DEV010;
        // Switch players
        player_X_25DEV010 = player_X_25DEV010 === "X" ? "O" : "X";
        player_step_count++;
    }
    // Check for a win after 4 moves
    if (player_step_count >= 4) {
        check_win();
    }
}
function check_win() {
    // Get the text content of each cell
    var id_1 = document.getElementById("1").textContent || "";
    var id_2 = document.getElementById("2").textContent || "";
    var id_3 = document.getElementById("3").textContent || "";
    var id_4 = document.getElementById("4").textContent || "";
    var id_5 = document.getElementById("5").textContent || "";
    var id_6 = document.getElementById("6").textContent || "";
    var id_7 = document.getElementById("7").textContent || "";
    var id_8 = document.getElementById("8").textContent || "";
    var id_9 = document.getElementById("9").textContent || "";
    // Check for winning conditions for player X
    if ((id_1 === 'X' && id_2 === 'X' && id_3 === 'X') ||
        (id_4 === 'X' && id_5 === 'X' && id_6 === 'X') ||
        (id_7 === 'X' && id_8 === 'X' && id_9 === 'X') ||
        (id_1 === 'X' && id_4 === 'X' && id_7 === 'X') ||
        (id_2 === 'X' && id_5 === 'X' && id_8 === 'X') ||
        (id_3 === 'X' && id_6 === 'X' && id_9 === 'X') ||
        (id_3 === 'X' && id_5 === 'X' && id_7 === 'X') ||
        (id_1 === 'X' && id_5 === 'X' && id_9 === 'X')) {
        document.getElementById("info_id").textContent = "X Player Wins";
        setTimeout(function () {
            reload();
        }, 2000);
    }
    // Check for winning conditions for player O
    else if ((id_1 === 'O' && id_2 === 'O' && id_3 === 'O') ||
        (id_4 === 'O' && id_5 === 'O' && id_6 === 'O') ||
        (id_7 === 'O' && id_8 === 'O' && id_9 === 'O') ||
        (id_1 === 'O' && id_4 === 'O' && id_7 === 'O') ||
        (id_2 === 'O' && id_5 === 'O' && id_8 === 'O') ||
        (id_3 === 'O' && id_6 === 'O' && id_9 === 'O') ||
        (id_3 === 'O' && id_5 === 'O' && id_7 === 'O') ||
        (id_1 === 'O' && id_5 === 'O' && id_9 === 'O')) {
        alert("O Player Wins");
        document.getElementById("info_id").textContent = "O Player Wins";
    }
}
function reload() {
    location.reload();
}
