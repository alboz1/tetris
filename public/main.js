/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/sound/background-music.wav":
/*!***********************************************!*\
  !*** ./src/assets/sound/background-music.wav ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ca20dcbb883c167a6f4ec6adeb56a58d.wav");

/***/ }),

/***/ "./src/assets/sound/game-over.wav":
/*!****************************************!*\
  !*** ./src/assets/sound/game-over.wav ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0a600555773c2c671b7ae70f3056b35c.wav");

/***/ }),

/***/ "./src/assets/sound/hit.wav":
/*!**********************************!*\
  !*** ./src/assets/sound/hit.wav ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5ff113b93c56de2b7d95bec068058387.wav");

/***/ }),

/***/ "./src/assets/sound/line-clear.wav":
/*!*****************************************!*\
  !*** ./src/assets/sound/line-clear.wav ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b1a26d10eb18b28c573b689957e793ff.wav");

/***/ }),

/***/ "./src/assets/sound/moving.wav":
/*!*************************************!*\
  !*** ./src/assets/sound/moving.wav ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "468cb8e3afa088b35e4d226ebcc55ad6.wav");

/***/ }),

/***/ "./src/assets/styles/index.css":
/*!*************************************!*\
  !*** ./src/assets/styles/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/controllers/audio.js":
/*!**********************************!*\
  !*** ./src/controllers/audio.js ***!
  \**********************************/
/*! exports provided: sounds, playAudio, pauseAudio, stopAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sounds", function() { return sounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAudio", function() { return playAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseAudio", function() { return pauseAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAudio", function() { return stopAudio; });
/* harmony import */ var _assets_sound_background_music_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sound/background-music.wav */ "./src/assets/sound/background-music.wav");
/* harmony import */ var _assets_sound_hit_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sound/hit.wav */ "./src/assets/sound/hit.wav");
/* harmony import */ var _assets_sound_moving_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sound/moving.wav */ "./src/assets/sound/moving.wav");
/* harmony import */ var _assets_sound_game_over_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sound/game-over.wav */ "./src/assets/sound/game-over.wav");
/* harmony import */ var _assets_sound_line_clear_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sound/line-clear.wav */ "./src/assets/sound/line-clear.wav");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ "./src/controllers/player.js");







const sounds = {
    background: document.querySelector('#background-music'),
    hit: document.querySelector('#hit-music'),
    moving: document.querySelector('#moving-music'),
    gameover: document.querySelector('#game-over-music'),
    lineClear: document.querySelector('#line-clear-music')
};
sounds.background.setAttribute('src', _assets_sound_background_music_wav__WEBPACK_IMPORTED_MODULE_0__["default"]);
sounds.hit.setAttribute('src', _assets_sound_hit_wav__WEBPACK_IMPORTED_MODULE_1__["default"]);
sounds.moving.setAttribute('src', _assets_sound_moving_wav__WEBPACK_IMPORTED_MODULE_2__["default"]);
sounds.gameover.setAttribute('src', _assets_sound_game_over_wav__WEBPACK_IMPORTED_MODULE_3__["default"]);
sounds.lineClear.setAttribute('src', _assets_sound_line_clear_wav__WEBPACK_IMPORTED_MODULE_4__["default"]);

function playAudio(audio, attrs) {
    if (!_player__WEBPACK_IMPORTED_MODULE_5__["player"].settings.sound) return;

    if (attrs) {
        audio.setAttribute(attrs, '');
    }
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio
        .play()
        .then(() => {
        })
        .catch(error => {
            console.log(error);
        });
        
}

function pauseAudio(audio) {
    audio.pause();
}

function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
}

/***/ }),

/***/ "./src/controllers/board.js":
/*!**********************************!*\
  !*** ./src/controllers/board.js ***!
  \**********************************/
/*! exports provided: gridOptions, grid, drawBoard, sweepBoard, mergeToBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridOptions", function() { return gridOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBoard", function() { return drawBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sweepBoard", function() { return sweepBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeToBoard", function() { return mergeToBoard; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/controllers/player.js");
/* harmony import */ var _lib_getCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/getCanvas */ "./src/lib/getCanvas.js");
/* harmony import */ var _lib_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/draw */ "./src/lib/draw.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio */ "./src/controllers/audio.js");





const gridOptions = {
    cols: 11,
    rows: 20
};

const grid = Array.from({length: gridOptions.rows}, () => Array(gridOptions.cols).fill(0));

//draw pieces on the board
function drawBoard(position) {
    const ctx = Object(_lib_getCanvas__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])();
    Object(_lib_draw__WEBPACK_IMPORTED_MODULE_2__["draw"])(ctx, grid, { posX: position.x,  posY: position.y});
}

function sweepBoard() {
    let clearedRows = 0;

    grid.forEach((row, index) => {
        const lineClear = row.every(value => value > 0);
        if (lineClear) {
            clearedRows++;
            const newRow = grid.splice(index, 1)[0].fill(0);
            grid.unshift(newRow);
            Object(_audio__WEBPACK_IMPORTED_MODULE_3__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_3__["sounds"].lineClear);
        }
    });
    Object(_player__WEBPACK_IMPORTED_MODULE_0__["addScore"])(clearedRows);
}

function mergeToBoard(piece) {
    piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                grid[y + _player__WEBPACK_IMPORTED_MODULE_0__["player"].y][x + _player__WEBPACK_IMPORTED_MODULE_0__["player"].x] = value;
            }
        });
    });
    Object(_audio__WEBPACK_IMPORTED_MODULE_3__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_3__["sounds"].hit);
}


/***/ }),

/***/ "./src/controllers/events.js":
/*!***********************************!*\
  !*** ./src/controllers/events.js ***!
  \***********************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/controllers/player.js");
/* harmony import */ var _views_showNextPiece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/showNextPiece */ "./src/views/showNextPiece.js");
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piece */ "./src/controllers/piece.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio */ "./src/controllers/audio.js");
/* harmony import */ var _views_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/overlay */ "./src/views/overlay.js");






function events() {
    const playBtn = document.querySelector('.start-screen .play-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    playBtn.addEventListener('click', () => {
        Object(_audio__WEBPACK_IMPORTED_MODULE_3__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_3__["sounds"].background, 'loop');
        pauseBtn.style.display = 'inline-block';
        if (_player__WEBPACK_IMPORTED_MODULE_0__["player"].settings.pause) {
            _player__WEBPACK_IMPORTED_MODULE_0__["player"].settings.pause = false;
        }
        Object(_views_overlay__WEBPACK_IMPORTED_MODULE_4__["hideOverlay"])();
        if (_player__WEBPACK_IMPORTED_MODULE_0__["player"].gameOver) {
            const scoreElement = document.querySelector('#score');
            scoreElement.textContent = _player__WEBPACK_IMPORTED_MODULE_0__["player"].score;
            _player__WEBPACK_IMPORTED_MODULE_0__["player"].gameOver = false;
        }
        Object(_player__WEBPACK_IMPORTED_MODULE_0__["play"])();
        Object(_views_showNextPiece__WEBPACK_IMPORTED_MODULE_1__["showNextPiece"])(_piece__WEBPACK_IMPORTED_MODULE_2__["nextPiece"]);
    });

    //open options menu
    const optionsBtn = document.querySelector('.options-btn');
    optionsBtn.addEventListener('click', () => Object(_views_overlay__WEBPACK_IMPORTED_MODULE_4__["openMenu"])('options'));

    //open controls menu
    const controlsBtn = document.querySelector('.controls-btn');
    controlsBtn.addEventListener('click', () => Object(_views_overlay__WEBPACK_IMPORTED_MODULE_4__["openMenu"])('controls'));

    //back button to go back on start screen
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', _views_overlay__WEBPACK_IMPORTED_MODULE_4__["goBack"]);

    //checkbox to hide/show piece preview setting
    const checkbox = document.querySelector('#piece-preview');
    checkbox.addEventListener('change', (e) => {
        _player__WEBPACK_IMPORTED_MODULE_0__["player"].settings.piecePreview = e.target.checked;
    });

    //toggle sound
    const soundToggle = document.querySelector('#sound');
    soundToggle.addEventListener('change', (e) => {
        _player__WEBPACK_IMPORTED_MODULE_0__["player"].settings.sound = e.target.checked;
    });

    //pause game
    pauseBtn.addEventListener('click', () => {
        _player__WEBPACK_IMPORTED_MODULE_0__["player"].settings.pause = true;
        Object(_audio__WEBPACK_IMPORTED_MODULE_3__["pauseAudio"])(_audio__WEBPACK_IMPORTED_MODULE_3__["sounds"].background);
        Object(_views_overlay__WEBPACK_IMPORTED_MODULE_4__["showOverlay"])('Paused');
    });

    //choose controls
    const controls = document.querySelector('.controls');
    const chooseControl = controls.querySelector('.choose-control');
    let selectedControl = null;
    controls.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-control')) {
            selectedControl = e.target.getAttribute('data-control');
            Object(_views_overlay__WEBPACK_IMPORTED_MODULE_4__["openPanel"])(e);
        }
    });
    
    //event to make the key user pressed as a default control for the selected move
    document.addEventListener('keyup', (e) => {
        //close panel if escape key is pressed
        if (e.keyCode === 27) {
            Object(_views_overlay__WEBPACK_IMPORTED_MODULE_4__["closePanel"])();
            return;
        }
        if (chooseControl.classList.contains('active')) {
            const btnControl = document.querySelector(`[data-control="${selectedControl}"]`);
            _player__WEBPACK_IMPORTED_MODULE_0__["player"].settings.controls[btnControl.getAttribute('data-control')] = e.keyCode;
            btnControl.textContent = e.key;
            Object(_views_overlay__WEBPACK_IMPORTED_MODULE_4__["closePanel"])();
        }
    });

    //click anywhere outside to close panel (if you dont want to change the current control)
    document.addEventListener('click', (e) => {
        if (chooseControl.classList.contains('active') && !e.target.classList.contains('choose-control') && !e.target.classList.contains('btn-control') && !e.target.classList.contains('control-for')) {
            Object(_views_overlay__WEBPACK_IMPORTED_MODULE_4__["closePanel"])();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (_player__WEBPACK_IMPORTED_MODULE_0__["player"].settings.pause) return;
        Object(_piece__WEBPACK_IMPORTED_MODULE_2__["movePiece"])(e);
    });
}

/***/ }),

/***/ "./src/controllers/piece.js":
/*!**********************************!*\
  !*** ./src/controllers/piece.js ***!
  \**********************************/
/*! exports provided: curPiece, nextPiece, spawnPiece, collide, reset, rotate, createPiece, preview, piecePreview, getNextPiece, movePiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curPiece", function() { return curPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPiece", function() { return nextPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawnPiece", function() { return spawnPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collide", function() { return collide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPiece", function() { return createPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preview", function() { return preview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "piecePreview", function() { return piecePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextPiece", function() { return getNextPiece; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePiece", function() { return movePiece; });
/* harmony import */ var _lib_createRect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/createRect */ "./src/lib/createRect.js");
/* harmony import */ var _lib_getCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/getCanvas */ "./src/lib/getCanvas.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/controllers/player.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ "./src/controllers/board.js");
/* harmony import */ var _lib_draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/draw */ "./src/lib/draw.js");






let curPiece = createPiece();
let nextPiece = getNextPiece();

function spawnPiece() {
    const ctx = Object(_lib_getCanvas__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    Object(_lib_draw__WEBPACK_IMPORTED_MODULE_4__["draw"])(ctx, curPiece, { posX: _player__WEBPACK_IMPORTED_MODULE_2__["player"].x, posY: _player__WEBPACK_IMPORTED_MODULE_2__["player"].y });
    if (_player__WEBPACK_IMPORTED_MODULE_2__["player"].settings.piecePreview) {
        piecePreview();
    }
}

function collide(piece, offset) {
    for (let y = 0; y < piece.length; ++y) {
        for (let x = 0; x < piece[y].length; ++x) {
            if (piece[y][x] !== 0 && (_board__WEBPACK_IMPORTED_MODULE_3__["grid"][y + offset.y] && _board__WEBPACK_IMPORTED_MODULE_3__["grid"][y + offset.y][x + offset.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function reset() {
    curPiece = nextPiece;
    //put piece in the center of the board
    _player__WEBPACK_IMPORTED_MODULE_2__["player"].x = (_board__WEBPACK_IMPORTED_MODULE_3__["grid"][0].length / 2 | 0) - (curPiece[0].length / 2 | 0);
    _player__WEBPACK_IMPORTED_MODULE_2__["player"].y = 0;
    preview.piece = curPiece;
    preview.x = _player__WEBPACK_IMPORTED_MODULE_2__["player"].x;
    preview.y = 0;
    nextPiece = getNextPiece();

    if (collide(curPiece, _player__WEBPACK_IMPORTED_MODULE_2__["player"])) {
        _player__WEBPACK_IMPORTED_MODULE_2__["player"].gameOver = true;
    }
}

function rotate(piece, direction) {
    for (let y = 0; y < piece.length; ++y) {
        for (let x = 0; x < y; ++x) {
            //switch columns and rows
            [
                piece[x][y],
                piece[y][x],
            ] = [
                piece[y][x],
                piece[x][y],
            ]
        }
    }

    if (direction > 0) {
        piece.forEach(row => row.reverse());
    } else {
        piece.reverse();
    }
    preview.piece = piece;
}

function createPiece() {
    const pieces = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
 
    const blocks = [
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [2, 0, 0],
            [2, 2, 2],
            [0, 0, 0]
        ],
        [
            [0, 0, 3],
            [3, 3, 3],
            [0, 0, 0]
        ],
        [
            [4, 4],
            [4, 4]
        ],
        [
            [0, 5, 5],
            [5, 5, 0],
            [0, 0, 0]
        ],
        [
            [0, 6, 0],
            [6, 6, 6],
            [0, 0, 0]
        ],
        [
            [7, 7, 0],
            [0, 7, 7],
            [0, 0, 0]
        ]
    ];

    return blocks[Math.floor(Math.random() * pieces.length)];
}

//piece preview
const preview = {
    piece: curPiece.slice(),
    x: (_board__WEBPACK_IMPORTED_MODULE_3__["grid"][0].length / 2 | 0) - (curPiece[0].length / 2 | 0),
    y: 0,
}
function piecePreview() {
    const ctx = Object(_lib_getCanvas__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])();
    while (!collide(preview.piece, preview)) {
        preview.y++;
    }
    if (collide(preview.piece, preview)) {
        preview.y--;
    }
    preview.piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                Object(_lib_createRect__WEBPACK_IMPORTED_MODULE_0__["createRect"])(ctx, '15, 15, 15', preview.x + x, preview.y + y, 1, 1);
            }
        });
    });
    preview.y = _player__WEBPACK_IMPORTED_MODULE_2__["player"].y;
}

function getNextPiece() {
    const nextPiece = createPiece();
    return nextPiece;
}

function movePiece(event) {
    if (_player__WEBPACK_IMPORTED_MODULE_2__["player"].settings.controls.move_left === event.keyCode) {
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["playerMove"])(-1);
    } else if (_player__WEBPACK_IMPORTED_MODULE_2__["player"].settings.controls.move_right === event.keyCode) {
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["playerMove"])(1);
    } else if (_player__WEBPACK_IMPORTED_MODULE_2__["player"].settings.controls.move_down === event.keyCode) {
        event.preventDefault();
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["playerDrop"])(curPiece);
    } else if (_player__WEBPACK_IMPORTED_MODULE_2__["player"].settings.controls.rotate_left === event.keyCode) {
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["playerRotate"])(curPiece, 1);
    } else if (_player__WEBPACK_IMPORTED_MODULE_2__["player"].settings.controls.rotate_right === event.keyCode) {
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["playerRotate"])(curPiece, -1);
    } else if (_player__WEBPACK_IMPORTED_MODULE_2__["player"].settings.controls.hard_drop === event.keyCode) {
        event.preventDefault();
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["hardDrop"])(curPiece);
    }
}

/***/ }),

/***/ "./src/controllers/player.js":
/*!***********************************!*\
  !*** ./src/controllers/player.js ***!
  \***********************************/
/*! exports provided: player, playerMove, playerDrop, hardDrop, playerRotate, addScore, play */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMove", function() { return playerMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerDrop", function() { return playerDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hardDrop", function() { return hardDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerRotate", function() { return playerRotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScore", function() { return addScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/controllers/piece.js");
/* harmony import */ var _views_showNextPiece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/showNextPiece */ "./src/views/showNextPiece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board */ "./src/controllers/board.js");
/* harmony import */ var _views_showScore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/showScore */ "./src/views/showScore.js");
/* harmony import */ var _views_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/overlay */ "./src/views/overlay.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio */ "./src/controllers/audio.js");







const player = {
    x: (_board__WEBPACK_IMPORTED_MODULE_2__["grid"][0].length / 2 | 0) - (_piece__WEBPACK_IMPORTED_MODULE_0__["curPiece"][0].length / 2 | 0),
    y: 0,
    gameOver: false,
    score: 0,
    settings: {
        piecePreview: true,
        pause: false,
        sound: true,
        controls: {
            move_left: 37,
            move_right: 39,
            move_down: 40,
            //rotate counter clock btn
            rotate_left: 90,
            //rotate clock wise btn
            rotate_right: 88,
            hard_drop: 32
        }
    }
}

function playerMove(direction) {
    Object(_audio__WEBPACK_IMPORTED_MODULE_5__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_5__["sounds"].moving);
    player.x += direction;
    _piece__WEBPACK_IMPORTED_MODULE_0__["preview"].x += direction;
    if (Object(_piece__WEBPACK_IMPORTED_MODULE_0__["collide"])(_piece__WEBPACK_IMPORTED_MODULE_0__["curPiece"], player)) {
        player.x -= direction;
        _piece__WEBPACK_IMPORTED_MODULE_0__["preview"].x -= direction;
    }
}

function playerDrop(piece) {
    if (player.gameOver) return;
    player.y++;
    
    if (Object(_piece__WEBPACK_IMPORTED_MODULE_0__["collide"])(_piece__WEBPACK_IMPORTED_MODULE_0__["curPiece"], player)) {
        player.y--;
        Object(_board__WEBPACK_IMPORTED_MODULE_2__["mergeToBoard"])(piece);
        Object(_piece__WEBPACK_IMPORTED_MODULE_0__["reset"])();
        Object(_board__WEBPACK_IMPORTED_MODULE_2__["sweepBoard"])();
        Object(_views_showNextPiece__WEBPACK_IMPORTED_MODULE_1__["showNextPiece"])(_piece__WEBPACK_IMPORTED_MODULE_0__["nextPiece"]);
    }
}

function hardDrop(piece) {
    if (player.gameOver) return;
    while (!Object(_piece__WEBPACK_IMPORTED_MODULE_0__["collide"])(_piece__WEBPACK_IMPORTED_MODULE_0__["curPiece"], player)) {
        player.y++;
    }
    player.y--;
    Object(_board__WEBPACK_IMPORTED_MODULE_2__["mergeToBoard"])(piece);
    Object(_piece__WEBPACK_IMPORTED_MODULE_0__["reset"])();
    Object(_board__WEBPACK_IMPORTED_MODULE_2__["sweepBoard"])();
    Object(_views_showNextPiece__WEBPACK_IMPORTED_MODULE_1__["showNextPiece"])(_piece__WEBPACK_IMPORTED_MODULE_0__["nextPiece"]);
}

function playerRotate(piece, direction) {
    const position = player.x;
    let offset = 1;

    Object(_piece__WEBPACK_IMPORTED_MODULE_0__["rotate"])(piece, direction);
    while (Object(_piece__WEBPACK_IMPORTED_MODULE_0__["collide"])(_piece__WEBPACK_IMPORTED_MODULE_0__["curPiece"], player)) {
        player.x += offset;
        _piece__WEBPACK_IMPORTED_MODULE_0__["preview"].x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > piece[0].length) {
            Object(_piece__WEBPACK_IMPORTED_MODULE_0__["rotate"])(piece, -direction);
            player.x = position;
            _piece__WEBPACK_IMPORTED_MODULE_0__["preview"].x = position;
            return;
        }
    }
}

//add score
function addScore(linesCleared) {
    if (linesCleared === 1) {
        player.score += 40;
    } else if (linesCleared === 2) {
        player.score += 100;
    } else if (linesCleared === 3) {
        player.score += 300;
    } else if (linesCleared >= 4) {
        player.score += 1200;
    }
    Object(_views_showScore__WEBPACK_IMPORTED_MODULE_3__["showScore"])();
}


let dropCounter = 0;
let interval = 1000;
let lastTime = 0;

function play(time = 0) {
    if (player.settings.pause) {
        return;
    }

    if (player.gameOver) {
        Object(_views_overlay__WEBPACK_IMPORTED_MODULE_4__["showOverlay"])('Game Over');
        _board__WEBPACK_IMPORTED_MODULE_2__["grid"].forEach(row => row.fill(0));
        player.score = 0;
        Object(_audio__WEBPACK_IMPORTED_MODULE_5__["stopAudio"])(_audio__WEBPACK_IMPORTED_MODULE_5__["sounds"].background);
        Object(_audio__WEBPACK_IMPORTED_MODULE_5__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_5__["sounds"].gameover);
        return;
    }

    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > interval) {
        playerDrop(_piece__WEBPACK_IMPORTED_MODULE_0__["curPiece"]);
        dropCounter = 0;
    }
    
    Object(_piece__WEBPACK_IMPORTED_MODULE_0__["spawnPiece"])();
    Object(_board__WEBPACK_IMPORTED_MODULE_2__["drawBoard"])({ x: 0, y: 0 });
    requestAnimationFrame(play);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_getCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/getCanvas */ "./src/lib/getCanvas.js");
/* harmony import */ var _controllers_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/events */ "./src/controllers/events.js");
/* harmony import */ var _controllers_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/board */ "./src/controllers/board.js");
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/styles/index.css */ "./src/assets/styles/index.css");
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);





const blockSize = 25;
const ctx = Object(_lib_getCanvas__WEBPACK_IMPORTED_MODULE_0__["getCanvas"])();

ctx.canvas.width = _controllers_board__WEBPACK_IMPORTED_MODULE_2__["gridOptions"].cols * blockSize;
ctx.canvas.height = _controllers_board__WEBPACK_IMPORTED_MODULE_2__["gridOptions"].rows * blockSize;
ctx.scale(blockSize, blockSize);
Object(_controllers_events__WEBPACK_IMPORTED_MODULE_1__["events"])();

/***/ }),

/***/ "./src/lib/createRect.js":
/*!*******************************!*\
  !*** ./src/lib/createRect.js ***!
  \*******************************/
/*! exports provided: createRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRect", function() { return createRect; });
function createRect(ctx, color, x, y, width, height) {
    ctx.fillStyle = `rgba(${color}, 0.5)`;
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = `rgba(${color}, 1)`;
    ctx.fillRect(x + 0.084, y + 0.084, width / 1.2, height / 1.2);
}

/***/ }),

/***/ "./src/lib/draw.js":
/*!*************************!*\
  !*** ./src/lib/draw.js ***!
  \*************************/
/*! exports provided: draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony import */ var _createRect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRect */ "./src/lib/createRect.js");


const colors = [
    null,
    '51, 172, 254',
    '75, 105, 214',
    '237, 255, 122',
    '255, 202, 122',
    '129, 255, 122',
    '189, 122, 255',
    '255, 56, 56'
];

function draw(ctx, matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                Object(_createRect__WEBPACK_IMPORTED_MODULE_0__["createRect"])(ctx, colors[value], offset.posX + x, offset.posY + y, 1, 1);
            }
        });
    });
}

/***/ }),

/***/ "./src/lib/getCanvas.js":
/*!******************************!*\
  !*** ./src/lib/getCanvas.js ***!
  \******************************/
/*! exports provided: getCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanvas", function() { return getCanvas; });
function getCanvas() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    return ctx;
}

/***/ }),

/***/ "./src/views/overlay.js":
/*!******************************!*\
  !*** ./src/views/overlay.js ***!
  \******************************/
/*! exports provided: showOverlay, hideOverlay, goBack, openMenu, openPanel, closePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOverlay", function() { return showOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideOverlay", function() { return hideOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goBack", function() { return goBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMenu", function() { return openMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPanel", function() { return openPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePanel", function() { return closePanel; });
/* harmony import */ var _controllers_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/player */ "./src/controllers/player.js");


const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header-title');
function showOverlay(gameState) {
    const playBtn = document.querySelector('.start-screen .play-btn');
    const playerScoreEl = overlay.querySelector('.player-score');
    header.textContent = gameState;
    if (gameState === 'Paused') {
        playerScoreEl.style.display = 'none';
        playBtn.textContent = 'Resume';
    } else {
        const spanEl = playerScoreEl.querySelector('span');
        spanEl.textContent = _controllers_player__WEBPACK_IMPORTED_MODULE_0__["player"].score;
        playerScoreEl.style.display = 'block';

        playBtn.textContent = 'Play';

    }
    overlay.style.display = 'flex';
}

function hideOverlay() {
    overlay.style.display = 'none';
}

const settingsScreen = overlay.querySelector('.settings-screen');
const controls = overlay.querySelector('.controls');
const options = overlay.querySelector('.options');
const startScreen = overlay.querySelector('.start-screen');
const chooseControl = controls.querySelector('.choose-control');
function goBack() {
    settingsScreen.classList.remove('open');
    options.classList.remove('open');
    controls.classList.remove('open');
    chooseControl.classList.remove('active');
    startScreen.style.display = 'flex';
}

//open menu for options or controls
function openMenu(menu) {
    if (menu === 'options') {
        options.classList.add('open');
    } else if (menu === 'controls') {
        controls.classList.add('open');
    }
    settingsScreen.classList.add('open');
    startScreen.style.display = 'none';
}

//open panel when user clicks to change one of the keys
const panelOverlay = overlay.querySelector('.choose-control-overlay');
function openPanel(e) {
    const pElement = controls.querySelector('.control-for');
    pElement.textContent = `Choose a button for ${e.target.getAttribute('data-control').replace('_', ' ')}`;
    chooseControl.classList.add('active');
    panelOverlay.classList.add('active');
}

function closePanel() {
    chooseControl.classList.remove('active');
    panelOverlay.classList.remove('active');
}

/***/ }),

/***/ "./src/views/showNextPiece.js":
/*!************************************!*\
  !*** ./src/views/showNextPiece.js ***!
  \************************************/
/*! exports provided: showNextPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNextPiece", function() { return showNextPiece; });
/* harmony import */ var _lib_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/draw */ "./src/lib/draw.js");

const ctx = document.querySelector('#next-piece').getContext('2d');
ctx.canvas.width = 100;
ctx.canvas.height = 50;
ctx.scale(10, 10);

function showNextPiece(piece) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    Object(_lib_draw__WEBPACK_IMPORTED_MODULE_0__["draw"])(ctx, piece, { posX: (10 / 2 | 0) - (piece[0].length / 2 | 0), posY: (5 / 2) - (piece.length / 2 | 0)});
}

/***/ }),

/***/ "./src/views/showScore.js":
/*!********************************!*\
  !*** ./src/views/showScore.js ***!
  \********************************/
/*! exports provided: showScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showScore", function() { return showScore; });
/* harmony import */ var _controllers_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/player */ "./src/controllers/player.js");


function showScore() {
    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = _controllers_player__WEBPACK_IMPORTED_MODULE_0__["player"].score;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZC9iYWNrZ3JvdW5kLW11c2ljLndhdiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kL2dhbWUtb3Zlci53YXYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZC9oaXQud2F2Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc291bmQvbGluZS1jbGVhci53YXYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZC9tb3Zpbmcud2F2Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvY3JlYXRlUmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9nZXRDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Nob3dOZXh0UGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Nob3dTY29yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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Q0Esa0RBQWtELHdEQUF3RDtBQUMxRztBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsSUFBSSxzREFBSSxjQUFjLHdGQUF3RjtBQUM5RyxDOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBK0M7O0FBRXhDO0FBQ1A7QUFDQSwrQkFBK0IsMERBQU07QUFDckMsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2EyMGRjYmI4ODNjMTY3YTZmNGVjNmFkZWI1NmE1OGQud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBhNjAwNTU1NzczYzJjNjcxYjdhZTcwZjMwNTZiMzVjLndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1ZmYxMTNiOTNjNTZkZTJiN2Q5NWJlYzA2ODA1ODM4Ny53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjFhMjZkMTBlYjE4YjI4YzU3M2I2ODk5NTdlNzkzZmYud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ2OGNiOGUzYWZhMDg4YjM1ZTRkMjI2ZWJjYzU1YWQ2LndhdlwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBiZ011c2ljIGZyb20gJy4uL2Fzc2V0cy9zb3VuZC9iYWNrZ3JvdW5kLW11c2ljLndhdic7XHJcbmltcG9ydCBoaXQgZnJvbSAnLi4vYXNzZXRzL3NvdW5kL2hpdC53YXYnO1xyXG5pbXBvcnQgbW92aW5nIGZyb20gJy4uL2Fzc2V0cy9zb3VuZC9tb3Zpbmcud2F2JztcclxuaW1wb3J0IGdhbWVPdmVyIGZyb20gJy4uL2Fzc2V0cy9zb3VuZC9nYW1lLW92ZXIud2F2JztcclxuaW1wb3J0IGxpbmVDbGVhciBmcm9tICcuLi9hc3NldHMvc291bmQvbGluZS1jbGVhci53YXYnO1xyXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcblxyXG5leHBvcnQgY29uc3Qgc291bmRzID0ge1xyXG4gICAgYmFja2dyb3VuZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2tncm91bmQtbXVzaWMnKSxcclxuICAgIGhpdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpdC1tdXNpYycpLFxyXG4gICAgbW92aW5nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92aW5nLW11c2ljJyksXHJcbiAgICBnYW1lb3ZlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtb3Zlci1tdXNpYycpLFxyXG4gICAgbGluZUNsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGluZS1jbGVhci1tdXNpYycpXHJcbn07XHJcbnNvdW5kcy5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnc3JjJywgYmdNdXNpYyk7XHJcbnNvdW5kcy5oaXQuc2V0QXR0cmlidXRlKCdzcmMnLCBoaXQpO1xyXG5zb3VuZHMubW92aW5nLnNldEF0dHJpYnV0ZSgnc3JjJywgbW92aW5nKTtcclxuc291bmRzLmdhbWVvdmVyLnNldEF0dHJpYnV0ZSgnc3JjJywgZ2FtZU92ZXIpO1xyXG5zb3VuZHMubGluZUNsZWFyLnNldEF0dHJpYnV0ZSgnc3JjJywgbGluZUNsZWFyKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGF5QXVkaW8oYXVkaW8sIGF0dHJzKSB7XHJcbiAgICBpZiAoIXBsYXllci5zZXR0aW5ncy5zb3VuZCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChhdHRycykge1xyXG4gICAgICAgIGF1ZGlvLnNldEF0dHJpYnV0ZShhdHRycywgJycpO1xyXG4gICAgfVxyXG4gICAgYXVkaW8udm9sdW1lID0gMC41O1xyXG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYXVkaW9cclxuICAgICAgICAucGxheSgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGF1c2VBdWRpbyhhdWRpbykge1xyXG4gICAgYXVkaW8ucGF1c2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BBdWRpbyhhdWRpbykge1xyXG4gICAgYXVkaW8ucGF1c2UoKTtcclxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxufSIsImltcG9ydCB7IHBsYXllciwgYWRkU2NvcmUgfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IGdldENhbnZhcyB9IGZyb20gJy4uL2xpYi9nZXRDYW52YXMnO1xyXG5pbXBvcnQgeyBkcmF3IH0gZnJvbSAnLi4vbGliL2RyYXcnO1xyXG5pbXBvcnQgeyBzb3VuZHMsIHBsYXlBdWRpbyB9IGZyb20gJy4vYXVkaW8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyaWRPcHRpb25zID0ge1xyXG4gICAgY29sczogMTEsXHJcbiAgICByb3dzOiAyMFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKHtsZW5ndGg6IGdyaWRPcHRpb25zLnJvd3N9LCAoKSA9PiBBcnJheShncmlkT3B0aW9ucy5jb2xzKS5maWxsKDApKTtcclxuXHJcbi8vZHJhdyBwaWVjZXMgb24gdGhlIGJvYXJkXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Qm9hcmQocG9zaXRpb24pIHtcclxuICAgIGNvbnN0IGN0eCA9IGdldENhbnZhcygpO1xyXG4gICAgZHJhdyhjdHgsIGdyaWQsIHsgcG9zWDogcG9zaXRpb24ueCwgIHBvc1k6IHBvc2l0aW9uLnl9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3ZWVwQm9hcmQoKSB7XHJcbiAgICBsZXQgY2xlYXJlZFJvd3MgPSAwO1xyXG5cclxuICAgIGdyaWQuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpbmVDbGVhciA9IHJvdy5ldmVyeSh2YWx1ZSA9PiB2YWx1ZSA+IDApO1xyXG4gICAgICAgIGlmIChsaW5lQ2xlYXIpIHtcclxuICAgICAgICAgICAgY2xlYXJlZFJvd3MrKztcclxuICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gZ3JpZC5zcGxpY2UoaW5kZXgsIDEpWzBdLmZpbGwoMCk7XHJcbiAgICAgICAgICAgIGdyaWQudW5zaGlmdChuZXdSb3cpO1xyXG4gICAgICAgICAgICBwbGF5QXVkaW8oc291bmRzLmxpbmVDbGVhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBhZGRTY29yZShjbGVhcmVkUm93cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVRvQm9hcmQocGllY2UpIHtcclxuICAgIHBpZWNlLmZvckVhY2goKHJvdywgeSkgPT4ge1xyXG4gICAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkW3kgKyBwbGF5ZXIueV1beCArIHBsYXllci54XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHBsYXlBdWRpbyhzb3VuZHMuaGl0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBwbGF5ZXIsIHBsYXkgfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IHNob3dOZXh0UGllY2UgfSBmcm9tICcuLi92aWV3cy9zaG93TmV4dFBpZWNlJztcclxuaW1wb3J0IHsgbW92ZVBpZWNlLCBuZXh0UGllY2UgfSBmcm9tICcuL3BpZWNlJztcclxuaW1wb3J0IHsgc291bmRzLCBwbGF5QXVkaW8sIHBhdXNlQXVkaW8gfSBmcm9tICcuL2F1ZGlvJztcclxuaW1wb3J0IHsgaGlkZU92ZXJsYXksIHNob3dPdmVybGF5LCBnb0JhY2ssIG9wZW5NZW51LCBvcGVuUGFuZWwsIGNsb3NlUGFuZWwgfSBmcm9tICcuLi92aWV3cy9vdmVybGF5JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoKSB7XHJcbiAgICBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LXNjcmVlbiAucGxheS1idG4nKTtcclxuICAgIGNvbnN0IHBhdXNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdXNlLWJ0bicpO1xyXG4gICAgcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwbGF5QXVkaW8oc291bmRzLmJhY2tncm91bmQsICdsb29wJyk7XHJcbiAgICAgICAgcGF1c2VCdG4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgIGlmIChwbGF5ZXIuc2V0dGluZ3MucGF1c2UpIHtcclxuICAgICAgICAgICAgcGxheWVyLnNldHRpbmdzLnBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhpZGVPdmVybGF5KCk7XHJcbiAgICAgICAgaWYgKHBsYXllci5nYW1lT3Zlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzY29yZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcclxuICAgICAgICAgICAgc2NvcmVFbGVtZW50LnRleHRDb250ZW50ID0gcGxheWVyLnNjb3JlO1xyXG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGxheSgpO1xyXG4gICAgICAgIHNob3dOZXh0UGllY2UobmV4dFBpZWNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vb3BlbiBvcHRpb25zIG1lbnVcclxuICAgIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9ucy1idG4nKTtcclxuICAgIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTWVudSgnb3B0aW9ucycpKTtcclxuXHJcbiAgICAvL29wZW4gY29udHJvbHMgbWVudVxyXG4gICAgY29uc3QgY29udHJvbHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMtYnRuJyk7XHJcbiAgICBjb250cm9sc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5NZW51KCdjb250cm9scycpKTtcclxuXHJcbiAgICAvL2JhY2sgYnV0dG9uIHRvIGdvIGJhY2sgb24gc3RhcnQgc2NyZWVuXHJcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2stYnRuJyk7XHJcbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29CYWNrKTtcclxuXHJcbiAgICAvL2NoZWNrYm94IHRvIGhpZGUvc2hvdyBwaWVjZSBwcmV2aWV3IHNldHRpbmdcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BpZWNlLXByZXZpZXcnKTtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgcGxheWVyLnNldHRpbmdzLnBpZWNlUHJldmlldyA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3RvZ2dsZSBzb3VuZFxyXG4gICAgY29uc3Qgc291bmRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291bmQnKTtcclxuICAgIHNvdW5kVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgcGxheWVyLnNldHRpbmdzLnNvdW5kID0gZS50YXJnZXQuY2hlY2tlZDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vcGF1c2UgZ2FtZVxyXG4gICAgcGF1c2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyLnNldHRpbmdzLnBhdXNlID0gdHJ1ZTtcclxuICAgICAgICBwYXVzZUF1ZGlvKHNvdW5kcy5iYWNrZ3JvdW5kKTtcclxuICAgICAgICBzaG93T3ZlcmxheSgnUGF1c2VkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2Nob29zZSBjb250cm9sc1xyXG4gICAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcclxuICAgIGNvbnN0IGNob29zZUNvbnRyb2wgPSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcuY2hvb3NlLWNvbnRyb2wnKTtcclxuICAgIGxldCBzZWxlY3RlZENvbnRyb2wgPSBudWxsO1xyXG4gICAgY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1jb250cm9sJykpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRDb250cm9sID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRyb2wnKTtcclxuICAgICAgICAgICAgb3BlblBhbmVsKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvL2V2ZW50IHRvIG1ha2UgdGhlIGtleSB1c2VyIHByZXNzZWQgYXMgYSBkZWZhdWx0IGNvbnRyb2wgZm9yIHRoZSBzZWxlY3RlZCBtb3ZlXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICAgICAgLy9jbG9zZSBwYW5lbCBpZiBlc2NhcGUga2V5IGlzIHByZXNzZWRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICBjbG9zZVBhbmVsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNob29zZUNvbnRyb2wuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBidG5Db250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29udHJvbD1cIiR7c2VsZWN0ZWRDb250cm9sfVwiXWApO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc2V0dGluZ3MuY29udHJvbHNbYnRuQ29udHJvbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udHJvbCcpXSA9IGUua2V5Q29kZTtcclxuICAgICAgICAgICAgYnRuQ29udHJvbC50ZXh0Q29udGVudCA9IGUua2V5O1xyXG4gICAgICAgICAgICBjbG9zZVBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jbGljayBhbnl3aGVyZSBvdXRzaWRlIHRvIGNsb3NlIHBhbmVsIChpZiB5b3UgZG9udCB3YW50IHRvIGNoYW5nZSB0aGUgY3VycmVudCBjb250cm9sKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChjaG9vc2VDb250cm9sLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hvb3NlLWNvbnRyb2wnKSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tY29udHJvbCcpICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRyb2wtZm9yJykpIHtcclxuICAgICAgICAgICAgY2xvc2VQYW5lbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICBpZiAocGxheWVyLnNldHRpbmdzLnBhdXNlKSByZXR1cm47XHJcbiAgICAgICAgbW92ZVBpZWNlKGUpO1xyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVSZWN0IH0gZnJvbSAnLi4vbGliL2NyZWF0ZVJlY3QnO1xyXG5pbXBvcnQgeyBnZXRDYW52YXMgfSBmcm9tICcuLi9saWIvZ2V0Q2FudmFzJztcclxuaW1wb3J0IHsgcGxheWVyLCBwbGF5ZXJEcm9wLCBwbGF5ZXJNb3ZlLCBwbGF5ZXJSb3RhdGUsIGhhcmREcm9wIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBncmlkIH0gZnJvbSAnLi9ib2FyZCc7XHJcbmltcG9ydCB7IGRyYXcgfSBmcm9tICcuLi9saWIvZHJhdyc7XHJcblxyXG5leHBvcnQgbGV0IGN1clBpZWNlID0gY3JlYXRlUGllY2UoKTtcclxuZXhwb3J0IGxldCBuZXh0UGllY2UgPSBnZXROZXh0UGllY2UoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGF3blBpZWNlKCkge1xyXG4gICAgY29uc3QgY3R4ID0gZ2V0Q2FudmFzKCk7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGRyYXcoY3R4LCBjdXJQaWVjZSwgeyBwb3NYOiBwbGF5ZXIueCwgcG9zWTogcGxheWVyLnkgfSk7XHJcbiAgICBpZiAocGxheWVyLnNldHRpbmdzLnBpZWNlUHJldmlldykge1xyXG4gICAgICAgIHBpZWNlUHJldmlldygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29sbGlkZShwaWVjZSwgb2Zmc2V0KSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHBpZWNlLmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwaWVjZVt5XS5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICBpZiAocGllY2VbeV1beF0gIT09IDAgJiYgKGdyaWRbeSArIG9mZnNldC55XSAmJiBncmlkW3kgKyBvZmZzZXQueV1beCArIG9mZnNldC54XSkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICBjdXJQaWVjZSA9IG5leHRQaWVjZTtcclxuICAgIC8vcHV0IHBpZWNlIGluIHRoZSBjZW50ZXIgb2YgdGhlIGJvYXJkXHJcbiAgICBwbGF5ZXIueCA9IChncmlkWzBdLmxlbmd0aCAvIDIgfCAwKSAtIChjdXJQaWVjZVswXS5sZW5ndGggLyAyIHwgMCk7XHJcbiAgICBwbGF5ZXIueSA9IDA7XHJcbiAgICBwcmV2aWV3LnBpZWNlID0gY3VyUGllY2U7XHJcbiAgICBwcmV2aWV3LnggPSBwbGF5ZXIueDtcclxuICAgIHByZXZpZXcueSA9IDA7XHJcbiAgICBuZXh0UGllY2UgPSBnZXROZXh0UGllY2UoKTtcclxuXHJcbiAgICBpZiAoY29sbGlkZShjdXJQaWVjZSwgcGxheWVyKSkge1xyXG4gICAgICAgIHBsYXllci5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUocGllY2UsIGRpcmVjdGlvbikge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwaWVjZS5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeTsgKyt4KSB7XHJcbiAgICAgICAgICAgIC8vc3dpdGNoIGNvbHVtbnMgYW5kIHJvd3NcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgcGllY2VbeF1beV0sXHJcbiAgICAgICAgICAgICAgICBwaWVjZVt5XVt4XSxcclxuICAgICAgICAgICAgXSA9IFtcclxuICAgICAgICAgICAgICAgIHBpZWNlW3ldW3hdLFxyXG4gICAgICAgICAgICAgICAgcGllY2VbeF1beV0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgICBwaWVjZS5mb3JFYWNoKHJvdyA9PiByb3cucmV2ZXJzZSgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGllY2UucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG4gICAgcHJldmlldy5waWVjZSA9IHBpZWNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGllY2UoKSB7XHJcbiAgICBjb25zdCBwaWVjZXMgPSBbJ0knLCAnSicsICdMJywgJ08nLCAnUycsICdUJywgJ1onXTtcclxuIFxyXG4gICAgY29uc3QgYmxvY2tzID0gW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFsyLCAwLCAwXSxcclxuICAgICAgICAgICAgWzIsIDIsIDJdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWzAsIDAsIDNdLFxyXG4gICAgICAgICAgICBbMywgMywgM10sXHJcbiAgICAgICAgICAgIFswLCAwLCAwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbNCwgNF0sXHJcbiAgICAgICAgICAgIFs0LCA0XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbMCwgNSwgNV0sXHJcbiAgICAgICAgICAgIFs1LCA1LCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFswLCA2LCAwXSxcclxuICAgICAgICAgICAgWzYsIDYsIDZdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWzcsIDcsIDBdLFxyXG4gICAgICAgICAgICBbMCwgNywgN10sXHJcbiAgICAgICAgICAgIFswLCAwLCAwXVxyXG4gICAgICAgIF1cclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIGJsb2Nrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwaWVjZXMubGVuZ3RoKV07XHJcbn1cclxuXHJcbi8vcGllY2UgcHJldmlld1xyXG5leHBvcnQgY29uc3QgcHJldmlldyA9IHtcclxuICAgIHBpZWNlOiBjdXJQaWVjZS5zbGljZSgpLFxyXG4gICAgeDogKGdyaWRbMF0ubGVuZ3RoIC8gMiB8IDApIC0gKGN1clBpZWNlWzBdLmxlbmd0aCAvIDIgfCAwKSxcclxuICAgIHk6IDAsXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBpZWNlUHJldmlldygpIHtcclxuICAgIGNvbnN0IGN0eCA9IGdldENhbnZhcygpO1xyXG4gICAgd2hpbGUgKCFjb2xsaWRlKHByZXZpZXcucGllY2UsIHByZXZpZXcpKSB7XHJcbiAgICAgICAgcHJldmlldy55Kys7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGlkZShwcmV2aWV3LnBpZWNlLCBwcmV2aWV3KSkge1xyXG4gICAgICAgIHByZXZpZXcueS0tO1xyXG4gICAgfVxyXG4gICAgcHJldmlldy5waWVjZS5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUmVjdChjdHgsICcxNSwgMTUsIDE1JywgcHJldmlldy54ICsgeCwgcHJldmlldy55ICsgeSwgMSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcHJldmlldy55ID0gcGxheWVyLnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0UGllY2UoKSB7XHJcbiAgICBjb25zdCBuZXh0UGllY2UgPSBjcmVhdGVQaWVjZSgpO1xyXG4gICAgcmV0dXJuIG5leHRQaWVjZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVQaWVjZShldmVudCkge1xyXG4gICAgaWYgKHBsYXllci5zZXR0aW5ncy5jb250cm9scy5tb3ZlX2xlZnQgPT09IGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICBwbGF5ZXJNb3ZlKC0xKTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyLnNldHRpbmdzLmNvbnRyb2xzLm1vdmVfcmlnaHQgPT09IGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICBwbGF5ZXJNb3ZlKDEpO1xyXG4gICAgfSBlbHNlIGlmIChwbGF5ZXIuc2V0dGluZ3MuY29udHJvbHMubW92ZV9kb3duID09PSBldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwbGF5ZXJEcm9wKGN1clBpZWNlKTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyLnNldHRpbmdzLmNvbnRyb2xzLnJvdGF0ZV9sZWZ0ID09PSBldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgcGxheWVyUm90YXRlKGN1clBpZWNlLCAxKTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyLnNldHRpbmdzLmNvbnRyb2xzLnJvdGF0ZV9yaWdodCA9PT0gZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgIHBsYXllclJvdGF0ZShjdXJQaWVjZSwgLTEpO1xyXG4gICAgfSBlbHNlIGlmIChwbGF5ZXIuc2V0dGluZ3MuY29udHJvbHMuaGFyZF9kcm9wID09PSBldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoYXJkRHJvcChjdXJQaWVjZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjb2xsaWRlLCByb3RhdGUsIHJlc2V0LCBzcGF3blBpZWNlLCBjdXJQaWVjZSwgcHJldmlldywgbmV4dFBpZWNlIH0gZnJvbSAnLi9waWVjZSc7XHJcbmltcG9ydCB7IHNob3dOZXh0UGllY2UgfSBmcm9tICcuLi92aWV3cy9zaG93TmV4dFBpZWNlJztcclxuaW1wb3J0IHsgZ3JpZCwgbWVyZ2VUb0JvYXJkLCBzd2VlcEJvYXJkLCBkcmF3Qm9hcmQgfSBmcm9tICcuL2JvYXJkJztcclxuaW1wb3J0IHsgc2hvd1Njb3JlIH0gZnJvbSAnLi4vdmlld3Mvc2hvd1Njb3JlJztcclxuaW1wb3J0IHsgc2hvd092ZXJsYXkgfSBmcm9tICcuLi92aWV3cy9vdmVybGF5JztcclxuaW1wb3J0IHsgcGxheUF1ZGlvLCBzb3VuZHMsIHN0b3BBdWRpbyB9IGZyb20gJy4vYXVkaW8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXllciA9IHtcclxuICAgIHg6IChncmlkWzBdLmxlbmd0aCAvIDIgfCAwKSAtIChjdXJQaWVjZVswXS5sZW5ndGggLyAyIHwgMCksXHJcbiAgICB5OiAwLFxyXG4gICAgZ2FtZU92ZXI6IGZhbHNlLFxyXG4gICAgc2NvcmU6IDAsXHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHBpZWNlUHJldmlldzogdHJ1ZSxcclxuICAgICAgICBwYXVzZTogZmFsc2UsXHJcbiAgICAgICAgc291bmQ6IHRydWUsXHJcbiAgICAgICAgY29udHJvbHM6IHtcclxuICAgICAgICAgICAgbW92ZV9sZWZ0OiAzNyxcclxuICAgICAgICAgICAgbW92ZV9yaWdodDogMzksXHJcbiAgICAgICAgICAgIG1vdmVfZG93bjogNDAsXHJcbiAgICAgICAgICAgIC8vcm90YXRlIGNvdW50ZXIgY2xvY2sgYnRuXHJcbiAgICAgICAgICAgIHJvdGF0ZV9sZWZ0OiA5MCxcclxuICAgICAgICAgICAgLy9yb3RhdGUgY2xvY2sgd2lzZSBidG5cclxuICAgICAgICAgICAgcm90YXRlX3JpZ2h0OiA4OCxcclxuICAgICAgICAgICAgaGFyZF9kcm9wOiAzMlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoZGlyZWN0aW9uKSB7XHJcbiAgICBwbGF5QXVkaW8oc291bmRzLm1vdmluZyk7XHJcbiAgICBwbGF5ZXIueCArPSBkaXJlY3Rpb247XHJcbiAgICBwcmV2aWV3LnggKz0gZGlyZWN0aW9uO1xyXG4gICAgaWYgKGNvbGxpZGUoY3VyUGllY2UsIHBsYXllcikpIHtcclxuICAgICAgICBwbGF5ZXIueCAtPSBkaXJlY3Rpb247XHJcbiAgICAgICAgcHJldmlldy54IC09IGRpcmVjdGlvbjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllckRyb3AocGllY2UpIHtcclxuICAgIGlmIChwbGF5ZXIuZ2FtZU92ZXIpIHJldHVybjtcclxuICAgIHBsYXllci55Kys7XHJcbiAgICBcclxuICAgIGlmIChjb2xsaWRlKGN1clBpZWNlLCBwbGF5ZXIpKSB7XHJcbiAgICAgICAgcGxheWVyLnktLTtcclxuICAgICAgICBtZXJnZVRvQm9hcmQocGllY2UpO1xyXG4gICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgc3dlZXBCb2FyZCgpO1xyXG4gICAgICAgIHNob3dOZXh0UGllY2UobmV4dFBpZWNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhcmREcm9wKHBpZWNlKSB7XHJcbiAgICBpZiAocGxheWVyLmdhbWVPdmVyKSByZXR1cm47XHJcbiAgICB3aGlsZSAoIWNvbGxpZGUoY3VyUGllY2UsIHBsYXllcikpIHtcclxuICAgICAgICBwbGF5ZXIueSsrO1xyXG4gICAgfVxyXG4gICAgcGxheWVyLnktLTtcclxuICAgIG1lcmdlVG9Cb2FyZChwaWVjZSk7XHJcbiAgICByZXNldCgpO1xyXG4gICAgc3dlZXBCb2FyZCgpO1xyXG4gICAgc2hvd05leHRQaWVjZShuZXh0UGllY2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyUm90YXRlKHBpZWNlLCBkaXJlY3Rpb24pIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gcGxheWVyLng7XHJcbiAgICBsZXQgb2Zmc2V0ID0gMTtcclxuXHJcbiAgICByb3RhdGUocGllY2UsIGRpcmVjdGlvbik7XHJcbiAgICB3aGlsZSAoY29sbGlkZShjdXJQaWVjZSwgcGxheWVyKSkge1xyXG4gICAgICAgIHBsYXllci54ICs9IG9mZnNldDtcclxuICAgICAgICBwcmV2aWV3LnggKz0gb2Zmc2V0O1xyXG4gICAgICAgIG9mZnNldCA9IC0ob2Zmc2V0ICsgKG9mZnNldCA+IDAgPyAxIDogLTEpKTtcclxuICAgICAgICBpZiAob2Zmc2V0ID4gcGllY2VbMF0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJvdGF0ZShwaWVjZSwgLWRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIHBsYXllci54ID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgIHByZXZpZXcueCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2FkZCBzY29yZVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkU2NvcmUobGluZXNDbGVhcmVkKSB7XHJcbiAgICBpZiAobGluZXNDbGVhcmVkID09PSAxKSB7XHJcbiAgICAgICAgcGxheWVyLnNjb3JlICs9IDQwO1xyXG4gICAgfSBlbHNlIGlmIChsaW5lc0NsZWFyZWQgPT09IDIpIHtcclxuICAgICAgICBwbGF5ZXIuc2NvcmUgKz0gMTAwO1xyXG4gICAgfSBlbHNlIGlmIChsaW5lc0NsZWFyZWQgPT09IDMpIHtcclxuICAgICAgICBwbGF5ZXIuc2NvcmUgKz0gMzAwO1xyXG4gICAgfSBlbHNlIGlmIChsaW5lc0NsZWFyZWQgPj0gNCkge1xyXG4gICAgICAgIHBsYXllci5zY29yZSArPSAxMjAwO1xyXG4gICAgfVxyXG4gICAgc2hvd1Njb3JlKCk7XHJcbn1cclxuXHJcblxyXG5sZXQgZHJvcENvdW50ZXIgPSAwO1xyXG5sZXQgaW50ZXJ2YWwgPSAxMDAwO1xyXG5sZXQgbGFzdFRpbWUgPSAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXkodGltZSA9IDApIHtcclxuICAgIGlmIChwbGF5ZXIuc2V0dGluZ3MucGF1c2UpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBsYXllci5nYW1lT3Zlcikge1xyXG4gICAgICAgIHNob3dPdmVybGF5KCdHYW1lIE92ZXInKTtcclxuICAgICAgICBncmlkLmZvckVhY2gocm93ID0+IHJvdy5maWxsKDApKTtcclxuICAgICAgICBwbGF5ZXIuc2NvcmUgPSAwO1xyXG4gICAgICAgIHN0b3BBdWRpbyhzb3VuZHMuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgcGxheUF1ZGlvKHNvdW5kcy5nYW1lb3Zlcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbHRhVGltZSA9IHRpbWUgLSBsYXN0VGltZTtcclxuICAgIGxhc3RUaW1lID0gdGltZTtcclxuICAgIGRyb3BDb3VudGVyICs9IGRlbHRhVGltZTtcclxuICAgIGlmIChkcm9wQ291bnRlciA+IGludGVydmFsKSB7XHJcbiAgICAgICAgcGxheWVyRHJvcChjdXJQaWVjZSk7XHJcbiAgICAgICAgZHJvcENvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzcGF3blBpZWNlKCk7XHJcbiAgICBkcmF3Qm9hcmQoeyB4OiAwLCB5OiAwIH0pO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBsYXkpO1xyXG59IiwiaW1wb3J0IHsgZ2V0Q2FudmFzIH0gZnJvbSAnLi9saWIvZ2V0Q2FudmFzJztcclxuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9jb250cm9sbGVycy9ldmVudHMnO1xyXG5pbXBvcnQgeyBncmlkT3B0aW9ucyB9IGZyb20gJy4vY29udHJvbGxlcnMvYm9hcmQnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9pbmRleC5jc3MnO1xyXG5cclxuY29uc3QgYmxvY2tTaXplID0gMjU7XHJcbmNvbnN0IGN0eCA9IGdldENhbnZhcygpO1xyXG5cclxuY3R4LmNhbnZhcy53aWR0aCA9IGdyaWRPcHRpb25zLmNvbHMgKiBibG9ja1NpemU7XHJcbmN0eC5jYW52YXMuaGVpZ2h0ID0gZ3JpZE9wdGlvbnMucm93cyAqIGJsb2NrU2l6ZTtcclxuY3R4LnNjYWxlKGJsb2NrU2l6ZSwgYmxvY2tTaXplKTtcclxuZXZlbnRzKCk7IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlY3QoY3R4LCBjb2xvciwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7Y29sb3J9LCAwLjUpYDtcclxuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke2NvbG9yfSwgMSlgO1xyXG4gICAgY3R4LmZpbGxSZWN0KHggKyAwLjA4NCwgeSArIDAuMDg0LCB3aWR0aCAvIDEuMiwgaGVpZ2h0IC8gMS4yKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZVJlY3QgfSBmcm9tICcuL2NyZWF0ZVJlY3QnO1xyXG5cclxuY29uc3QgY29sb3JzID0gW1xyXG4gICAgbnVsbCxcclxuICAgICc1MSwgMTcyLCAyNTQnLFxyXG4gICAgJzc1LCAxMDUsIDIxNCcsXHJcbiAgICAnMjM3LCAyNTUsIDEyMicsXHJcbiAgICAnMjU1LCAyMDIsIDEyMicsXHJcbiAgICAnMTI5LCAyNTUsIDEyMicsXHJcbiAgICAnMTg5LCAxMjIsIDI1NScsXHJcbiAgICAnMjU1LCA1NiwgNTYnXHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhdyhjdHgsIG1hdHJpeCwgb2Zmc2V0KSB7XHJcbiAgICBtYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XHJcbiAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVJlY3QoY3R4LCBjb2xvcnNbdmFsdWVdLCBvZmZzZXQucG9zWCArIHgsIG9mZnNldC5wb3NZICsgeSwgMSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldENhbnZhcygpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKTtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIHJldHVybiBjdHg7XHJcbn0iLCJpbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy9wbGF5ZXInO1xyXG5cclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItdGl0bGUnKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dPdmVybGF5KGdhbWVTdGF0ZSkge1xyXG4gICAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1zY3JlZW4gLnBsYXktYnRuJyk7XHJcbiAgICBjb25zdCBwbGF5ZXJTY29yZUVsID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNjb3JlJyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBnYW1lU3RhdGU7XHJcbiAgICBpZiAoZ2FtZVN0YXRlID09PSAnUGF1c2VkJykge1xyXG4gICAgICAgIHBsYXllclNjb3JlRWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBwbGF5QnRuLnRleHRDb250ZW50ID0gJ1Jlc3VtZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHNwYW5FbCA9IHBsYXllclNjb3JlRWwucXVlcnlTZWxlY3Rvcignc3BhbicpO1xyXG4gICAgICAgIHNwYW5FbC50ZXh0Q29udGVudCA9IHBsYXllci5zY29yZTtcclxuICAgICAgICBwbGF5ZXJTY29yZUVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBwbGF5QnRuLnRleHRDb250ZW50ID0gJ1BsYXknO1xyXG5cclxuICAgIH1cclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVPdmVybGF5KCkge1xyXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG5jb25zdCBzZXR0aW5nc1NjcmVlbiA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXNjcmVlbicpO1xyXG5jb25zdCBjb250cm9scyA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzJyk7XHJcbmNvbnN0IG9wdGlvbnMgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb25zJyk7XHJcbmNvbnN0IHN0YXJ0U2NyZWVuID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtc2NyZWVuJyk7XHJcbmNvbnN0IGNob29zZUNvbnRyb2wgPSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcuY2hvb3NlLWNvbnRyb2wnKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdvQmFjaygpIHtcclxuICAgIHNldHRpbmdzU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgIG9wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgY29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgY2hvb3NlQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHN0YXJ0U2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn1cclxuXHJcbi8vb3BlbiBtZW51IGZvciBvcHRpb25zIG9yIGNvbnRyb2xzXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuTWVudShtZW51KSB7XHJcbiAgICBpZiAobWVudSA9PT0gJ29wdGlvbnMnKSB7XHJcbiAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICB9IGVsc2UgaWYgKG1lbnUgPT09ICdjb250cm9scycpIHtcclxuICAgICAgICBjb250cm9scy5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICB9XHJcbiAgICBzZXR0aW5nc1NjcmVlbi5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XHJcbiAgICBzdGFydFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG4vL29wZW4gcGFuZWwgd2hlbiB1c2VyIGNsaWNrcyB0byBjaGFuZ2Ugb25lIG9mIHRoZSBrZXlzXHJcbmNvbnN0IHBhbmVsT3ZlcmxheSA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLmNob29zZS1jb250cm9sLW92ZXJsYXknKTtcclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5QYW5lbChlKSB7XHJcbiAgICBjb25zdCBwRWxlbWVudCA9IGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLWZvcicpO1xyXG4gICAgcEVsZW1lbnQudGV4dENvbnRlbnQgPSBgQ2hvb3NlIGEgYnV0dG9uIGZvciAke2UudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jb250cm9sJykucmVwbGFjZSgnXycsICcgJyl9YDtcclxuICAgIGNob29zZUNvbnRyb2wuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBwYW5lbE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBhbmVsKCkge1xyXG4gICAgY2hvb3NlQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHBhbmVsT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSIsImltcG9ydCB7IGRyYXcgfSBmcm9tICcuLi9saWIvZHJhdyc7XHJcbmNvbnN0IGN0eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0LXBpZWNlJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuY3R4LmNhbnZhcy53aWR0aCA9IDEwMDtcclxuY3R4LmNhbnZhcy5oZWlnaHQgPSA1MDtcclxuY3R4LnNjYWxlKDEwLCAxMCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd05leHRQaWVjZShwaWVjZSkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICBkcmF3KGN0eCwgcGllY2UsIHsgcG9zWDogKDEwIC8gMiB8IDApIC0gKHBpZWNlWzBdLmxlbmd0aCAvIDIgfCAwKSwgcG9zWTogKDUgLyAyKSAtIChwaWVjZS5sZW5ndGggLyAyIHwgMCl9KTtcclxufSIsImltcG9ydCB7IHBsYXllciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3BsYXllcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Njb3JlKCkge1xyXG4gICAgY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJyk7XHJcbiAgICBzY29yZUVsZW1lbnQudGV4dENvbnRlbnQgPSBwbGF5ZXIuc2NvcmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9