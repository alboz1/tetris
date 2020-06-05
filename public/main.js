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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d75e3fd6bc3f03c0009a339bce2965e0.wav");

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
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/player_model */ "./src/models/player_model.js");


const sounds = {
    background: document.querySelector('#background-music'),
    hit: document.querySelector('#hit-sound'),
    moving: document.querySelector('#moving-sound'),
    gameover: document.querySelector('#game-over-sound'),
    lineClear: document.querySelector('#line-clear-sound')
};

function playAudio(audio, attrs) {
    if (!_models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].settings.sound) return;

    if (attrs) {
        audio.setAttribute(attrs, '');
    }
    audio.volume = 0.5;
    audio
        .play()
        .then(() => {
        })
        .catch(error => {
            console.log(error);
        });
    audio.currentTime = 0;
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
/*! exports provided: drawBoard, sweepBoard, mergeToBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBoard", function() { return drawBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sweepBoard", function() { return sweepBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeToBoard", function() { return mergeToBoard; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/controllers/player.js");
/* harmony import */ var _models_grid_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/grid_model */ "./src/models/grid_model.js");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/player_model */ "./src/models/player_model.js");
/* harmony import */ var _lib_getCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/getCanvas */ "./src/lib/getCanvas.js");
/* harmony import */ var _lib_draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/draw */ "./src/lib/draw.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio */ "./src/controllers/audio.js");







//draw pieces on the board
function drawBoard(position) {
    const ctx = Object(_lib_getCanvas__WEBPACK_IMPORTED_MODULE_3__["getCanvas"])();
    Object(_lib_draw__WEBPACK_IMPORTED_MODULE_4__["draw"])(ctx, _models_grid_model__WEBPACK_IMPORTED_MODULE_1__["grid"], { posX: position.x,  posY: position.y});
}

function sweepBoard() {
    let clearedRows = 0;

    _models_grid_model__WEBPACK_IMPORTED_MODULE_1__["grid"].forEach((row, index) => {
        const lineClear = row.every(value => value > 0);
        if (lineClear) {
            clearedRows++;
            const newRow = _models_grid_model__WEBPACK_IMPORTED_MODULE_1__["grid"].splice(index, 1)[0].fill(0);
            _models_grid_model__WEBPACK_IMPORTED_MODULE_1__["grid"].unshift(newRow);
            Object(_audio__WEBPACK_IMPORTED_MODULE_5__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_5__["sounds"].lineClear);
        }
    });
    Object(_player__WEBPACK_IMPORTED_MODULE_0__["addScore"])(clearedRows);
}

function mergeToBoard(piece) {
    piece.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value > 0) {
                _models_grid_model__WEBPACK_IMPORTED_MODULE_1__["grid"][y + _models_player_model__WEBPACK_IMPORTED_MODULE_2__["player"].y][x + _models_player_model__WEBPACK_IMPORTED_MODULE_2__["player"].x] = value;
            }
        });
    });
    Object(_audio__WEBPACK_IMPORTED_MODULE_5__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_5__["sounds"].hit);
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
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/player_model */ "./src/models/player_model.js");
/* harmony import */ var _views_showNextPiece__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/showNextPiece */ "./src/views/showNextPiece.js");
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piece */ "./src/controllers/piece.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio */ "./src/controllers/audio.js");
/* harmony import */ var _views_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/overlay */ "./src/views/overlay.js");
/* harmony import */ var _lib_getDiff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/getDiff */ "./src/lib/getDiff.js");
/* harmony import */ var _views_loadingBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/loadingBar */ "./src/views/loadingBar.js");









function events() {
    //play/resume button
    const playBtn = document.querySelector('.start-screen .play-btn');
    playBtn.addEventListener('click', () => {
        //check if player enabled background music
        if (_models_player_model__WEBPACK_IMPORTED_MODULE_1__["player"].settings.music) {
            Object(_audio__WEBPACK_IMPORTED_MODULE_4__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_4__["sounds"].background, 'loop');
        }

        if (_models_player_model__WEBPACK_IMPORTED_MODULE_1__["player"].settings.pause) {
            _models_player_model__WEBPACK_IMPORTED_MODULE_1__["player"].settings.pause = false;
        }
        Object(_views_overlay__WEBPACK_IMPORTED_MODULE_5__["hideOverlay"])();
        Object(_player__WEBPACK_IMPORTED_MODULE_0__["play"])();
        Object(_views_showNextPiece__WEBPACK_IMPORTED_MODULE_2__["showNextPiece"])(_piece__WEBPACK_IMPORTED_MODULE_3__["nextPiece"]);
    });

    //open options menu
    const settingsBtn = document.querySelector('.settings-btn');
    settingsBtn.addEventListener('click', () => Object(_views_overlay__WEBPACK_IMPORTED_MODULE_5__["openMenu"])('settings'));

    //open controls menu
    const controlsBtn = document.querySelector('.controls-btn');
    controlsBtn.addEventListener('click', () => Object(_views_overlay__WEBPACK_IMPORTED_MODULE_5__["openMenu"])('controls'));

    //back button to go back on start screen
    const backBtn = document.querySelector('.back-btn');
    backBtn.addEventListener('click', _views_overlay__WEBPACK_IMPORTED_MODULE_5__["goBack"]);

    //checkbox to hide/show piece preview setting
    const checkbox = document.querySelector('#piece-preview');
    checkbox.addEventListener('change', (e) => {
        _models_player_model__WEBPACK_IMPORTED_MODULE_1__["player"].settings.piecePreview = e.target.checked;
    });

    //toggle sound
    const soundToggle = document.querySelector('#sound');
    soundToggle.addEventListener('change', (e) => {
        _models_player_model__WEBPACK_IMPORTED_MODULE_1__["player"].settings.sound = e.target.checked;
    });

    //toggle background music
    const musicToggle = document.querySelector('#music');
    musicToggle.addEventListener('change', (e) => {
        _models_player_model__WEBPACK_IMPORTED_MODULE_1__["player"].settings.music = e.target.checked;
    });

    //pause game
    const pauseBtn = document.querySelector('.pause-btn');
    pauseBtn.addEventListener('click', () => {
        _models_player_model__WEBPACK_IMPORTED_MODULE_1__["player"].settings.pause = true;
        Object(_audio__WEBPACK_IMPORTED_MODULE_4__["pauseAudio"])(_audio__WEBPACK_IMPORTED_MODULE_4__["sounds"].background);
        Object(_views_overlay__WEBPACK_IMPORTED_MODULE_5__["showOverlay"])('Paused');
    });

    //new game
    const newGameBtn = document.querySelector('.new-game');
    newGameBtn.addEventListener('click', _player__WEBPACK_IMPORTED_MODULE_0__["newGame"]);

    //choose controls
    const controls = document.querySelector('.controls');
    const chooseControl = controls.querySelector('.choose-control');
    let selectedControl = null;
    controls.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-control')) {
            selectedControl = e.target.getAttribute('data-control');
            Object(_views_overlay__WEBPACK_IMPORTED_MODULE_5__["openPanel"])(e);
        }
    });
    
    //event to make the key user pressed as a default control for the selected move
    document.addEventListener('keyup', (e) => {
        //close panel if escape key is pressed
        if (e.keyCode === 27) {
            Object(_views_overlay__WEBPACK_IMPORTED_MODULE_5__["closePanel"])();
            return;
        }
        if (chooseControl.classList.contains('active')) {
            const btnControl = document.querySelector(`[data-control="${selectedControl}"]`);
            _models_player_model__WEBPACK_IMPORTED_MODULE_1__["player"].settings.controls[btnControl.getAttribute('data-control')] = e.keyCode;
            btnControl.textContent = e.key === ' ' ? 'Space' : e.key;
            Object(_views_overlay__WEBPACK_IMPORTED_MODULE_5__["closePanel"])();
        }
    });

    //click anywhere outside to close panel (if you dont want to change the current control)
    document.addEventListener('click', (e) => {
        if (
            chooseControl.classList.contains('active') &&
            !e.target.classList.contains('choose-control') &&
            !e.target.classList.contains('btn-control') &&
            !e.target.classList.contains('control-for')
        ) {
            Object(_views_overlay__WEBPACK_IMPORTED_MODULE_5__["closePanel"])();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (_models_player_model__WEBPACK_IMPORTED_MODULE_1__["player"].settings.pause || chooseControl.classList.contains('active')) return;
        Object(_piece__WEBPACK_IMPORTED_MODULE_3__["movePiece"])(e);
    });

    //loading bar
    const progressBar = document.querySelector('.progress-bar-foreground');
    let progress = 0;
    Object.values(_audio__WEBPACK_IMPORTED_MODULE_4__["sounds"]).forEach(soundEl => {
        soundEl.addEventListener('loadedmetadata', () => {
            progress += 20;
            progressBar.style.width = `${progress}%`;
        });
    });
    progressBar.addEventListener('transitionend', () => {
        if (progress === 100) {
            Object(_views_loadingBar__WEBPACK_IMPORTED_MODULE_7__["removeLoadingScreen"])();
        }
    });

    //mobile controls
    const canvas = document.querySelector('#canvas');
    let prevTouchPosY = 0;
    //touch sensitivity
    let sensitivity = 0;

    //track moving speed when player swipes
    let movingSpeed = 0;

    let touchMoved = true;
    //moving horizontally
    let movingH = false;

    let yDown = null;
    let xDown = null;
    canvas.addEventListener('touchmove', (e) => {
        if (_models_player_model__WEBPACK_IMPORTED_MODULE_1__["player"].settings.pause) return;
        e.preventDefault();
        touchMoved = true;
        const touch = e.changedTouches[0];
        const { xDiff, yDiff } = Object(_lib_getDiff__WEBPACK_IMPORTED_MODULE_6__["getDiff"])(e, xDown, yDown);
        
        if (sensitivity > 7) {
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                movingH = true;
                if (xDiff > 0) {
                    //move left
                    Object(_player__WEBPACK_IMPORTED_MODULE_0__["playerMove"])(-1);
                } else {
                    //move right
                    Object(_player__WEBPACK_IMPORTED_MODULE_0__["playerMove"])(1);
                }
            }
            //move piece down
            if (touch.pageY - prevTouchPosY > 0 && !movingH) {
                Object(_player__WEBPACK_IMPORTED_MODULE_0__["playerDrop"])(_piece__WEBPACK_IMPORTED_MODULE_3__["curPiece"]);
                movingSpeed++;
                movingH = false;
            }

            sensitivity = 0;
        }
        sensitivity++;

        prevTouchPosY = touch.pageY;
    });

    canvas.addEventListener('touchend', (e) => {
        const { xDiff, yDiff } = Object(_lib_getDiff__WEBPACK_IMPORTED_MODULE_6__["getDiff"])(e, xDown, yDown);
        movingH = false;

        if (Math.abs(xDiff) < Math.abs(yDiff)) {
            if (yDiff < 0 && movingSpeed <= 1) {
                Object(_player__WEBPACK_IMPORTED_MODULE_0__["hardDrop"])(_piece__WEBPACK_IMPORTED_MODULE_3__["curPiece"]);
            }
            //reset after player drops piece and lifts finger
            yDown = null;
        }
        
        if (!touchMoved) {
            Object(_player__WEBPACK_IMPORTED_MODULE_0__["playerRotate"])(_piece__WEBPACK_IMPORTED_MODULE_3__["curPiece"], 1);
        }
        movingSpeed = 0;
    });

    canvas.addEventListener('touchstart', (e) => {
        xDown = e.changedTouches[0].clientX;
        yDown = e.changedTouches[0].clientY;
        touchMoved = false;
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
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/player_model */ "./src/models/player_model.js");
/* harmony import */ var _models_grid_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/grid_model */ "./src/models/grid_model.js");
/* harmony import */ var _lib_draw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/draw */ "./src/lib/draw.js");
/* harmony import */ var _views_favicon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/favicon */ "./src/views/favicon.js");








let curPiece = createPiece();
let nextPiece = getNextPiece();

function spawnPiece() {
    //center piece
    const ctx = Object(_lib_getCanvas__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    Object(_lib_draw__WEBPACK_IMPORTED_MODULE_5__["draw"])(ctx, curPiece, { posX: _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].x, posY: _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].y });
    if (_models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].settings.piecePreview) {
        piecePreview();
    }
}

function collide(piece, offset) {
    for (let y = 0; y < piece.length; ++y) {
        for (let x = 0; x < piece[y].length; ++x) {
            if (piece[y][x] !== 0 && (_models_grid_model__WEBPACK_IMPORTED_MODULE_4__["grid"][y + offset.y] && _models_grid_model__WEBPACK_IMPORTED_MODULE_4__["grid"][y + offset.y][x + offset.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function reset() {
    curPiece = nextPiece;
    _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].x = (_models_grid_model__WEBPACK_IMPORTED_MODULE_4__["grid"][0].length / 2 | 0) - (curPiece[0].length / 2 | 0); //put piece in the center of the board
    _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].y = 0;
    preview.piece = curPiece;
    preview.x = _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].x;
    preview.y = 0;
    nextPiece = getNextPiece();
    Object(_views_favicon__WEBPACK_IMPORTED_MODULE_6__["showFavicon"])(curPiece);
    //check game over
    if (collide(curPiece, _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"])) {
        _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].gameOver = true;
        _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].highScore = _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].score > _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].highScore ? _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].score : _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].highScore;
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
    x: (_models_grid_model__WEBPACK_IMPORTED_MODULE_4__["grid"][0].length / 2 | 0) - (curPiece[0].length / 2 | 0),
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
    preview.y = _models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].y;
}

function getNextPiece() {
    const nextPiece = createPiece();
    return nextPiece;
}

function movePiece(event) {
    if (_models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].settings.controls.move_left === event.keyCode) {
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["playerMove"])(-1);
    } else if (_models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].settings.controls.move_right === event.keyCode) {
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["playerMove"])(1);
    } else if (_models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].settings.controls.move_down === event.keyCode) {
        event.preventDefault();
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["playerDrop"])(curPiece);
    } else if (_models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].settings.controls.rotate_left === event.keyCode) {
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["playerRotate"])(curPiece, 1);
    } else if (_models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].settings.controls.rotate_right === event.keyCode) {
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["playerRotate"])(curPiece, -1);
    } else if (_models_player_model__WEBPACK_IMPORTED_MODULE_3__["player"].settings.controls.hard_drop === event.keyCode) {
        event.preventDefault();
        Object(_player__WEBPACK_IMPORTED_MODULE_2__["hardDrop"])(curPiece);
    }
}

/***/ }),

/***/ "./src/controllers/player.js":
/*!***********************************!*\
  !*** ./src/controllers/player.js ***!
  \***********************************/
/*! exports provided: playerMove, playerDrop, hardDrop, playerRotate, addScore, play, newGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerMove", function() { return playerMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerDrop", function() { return playerDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hardDrop", function() { return hardDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerRotate", function() { return playerRotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScore", function() { return addScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGame", function() { return newGame; });
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/player_model */ "./src/models/player_model.js");
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece */ "./src/controllers/piece.js");
/* harmony import */ var _views_showNextPiece__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/showNextPiece */ "./src/views/showNextPiece.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ "./src/controllers/board.js");
/* harmony import */ var _views_showScore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/showScore */ "./src/views/showScore.js");
/* harmony import */ var _views_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/overlay */ "./src/views/overlay.js");
/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio */ "./src/controllers/audio.js");
/* harmony import */ var _models_grid_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/grid_model */ "./src/models/grid_model.js");










function playerMove(direction) {
    Object(_audio__WEBPACK_IMPORTED_MODULE_6__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_6__["sounds"].moving);
    _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].x += direction;
    _piece__WEBPACK_IMPORTED_MODULE_1__["preview"].x += direction;
    if (Object(_piece__WEBPACK_IMPORTED_MODULE_1__["collide"])(_piece__WEBPACK_IMPORTED_MODULE_1__["curPiece"], _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"])) {
        _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].x -= direction;
        _piece__WEBPACK_IMPORTED_MODULE_1__["preview"].x -= direction;
    }
}

function playerDrop(piece) {
    if (_models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].gameOver) return;
    _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].y++;
    
    if (Object(_piece__WEBPACK_IMPORTED_MODULE_1__["collide"])(_piece__WEBPACK_IMPORTED_MODULE_1__["curPiece"], _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"])) {
        _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].y--;
        Object(_board__WEBPACK_IMPORTED_MODULE_3__["mergeToBoard"])(piece);
        Object(_piece__WEBPACK_IMPORTED_MODULE_1__["reset"])();
        Object(_board__WEBPACK_IMPORTED_MODULE_3__["sweepBoard"])();
        Object(_views_showNextPiece__WEBPACK_IMPORTED_MODULE_2__["showNextPiece"])(_piece__WEBPACK_IMPORTED_MODULE_1__["nextPiece"]);
    }
}

function hardDrop(piece) {
    if (_models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].gameOver) return;
    while (!Object(_piece__WEBPACK_IMPORTED_MODULE_1__["collide"])(_piece__WEBPACK_IMPORTED_MODULE_1__["curPiece"], _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"])) {
        _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].y++;
    }
    _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].y--;
    Object(_board__WEBPACK_IMPORTED_MODULE_3__["mergeToBoard"])(piece);
    Object(_piece__WEBPACK_IMPORTED_MODULE_1__["reset"])();
    Object(_board__WEBPACK_IMPORTED_MODULE_3__["sweepBoard"])();
    Object(_views_showNextPiece__WEBPACK_IMPORTED_MODULE_2__["showNextPiece"])(_piece__WEBPACK_IMPORTED_MODULE_1__["nextPiece"]);
}

function playerRotate(piece, direction) {
    const position = _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].x;
    let offset = 1;

    Object(_piece__WEBPACK_IMPORTED_MODULE_1__["rotate"])(piece, direction);
    while (Object(_piece__WEBPACK_IMPORTED_MODULE_1__["collide"])(_piece__WEBPACK_IMPORTED_MODULE_1__["curPiece"], _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"])) {
        _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].x += offset;
        _piece__WEBPACK_IMPORTED_MODULE_1__["preview"].x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > piece[0].length) {
            Object(_piece__WEBPACK_IMPORTED_MODULE_1__["rotate"])(piece, -direction);
            _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].x = position;
            _piece__WEBPACK_IMPORTED_MODULE_1__["preview"].x = position;
            return;
        }
    }
}

//add score
function addScore(linesCleared) {
    if (linesCleared === 1) {
        _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].score += 40;
    } else if (linesCleared === 2) {
        _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].score += 100;
    } else if (linesCleared === 3) {
        _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].score += 300;
    } else if (linesCleared >= 4) {
        _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].score += 1200;
    }
    Object(_views_showScore__WEBPACK_IMPORTED_MODULE_4__["showScore"])();
}


let dropCounter = 0;
let interval = 1000;
let lastTime = 0;

function play(time = 0) {
    if (_models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].settings.pause) {
        return;
    }

    if (_models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].gameOver) {
        Object(_views_overlay__WEBPACK_IMPORTED_MODULE_5__["showOverlay"])('Game Over');
        Object(_audio__WEBPACK_IMPORTED_MODULE_6__["stopAudio"])(_audio__WEBPACK_IMPORTED_MODULE_6__["sounds"].background);
        Object(_audio__WEBPACK_IMPORTED_MODULE_6__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_6__["sounds"].gameover);
        return;
    }

    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > interval) {
        playerDrop(_piece__WEBPACK_IMPORTED_MODULE_1__["curPiece"]);
        dropCounter = 0;
    }
    
    Object(_piece__WEBPACK_IMPORTED_MODULE_1__["spawnPiece"])();
    Object(_board__WEBPACK_IMPORTED_MODULE_3__["drawBoard"])({ x: 0, y: 0 });
    requestAnimationFrame(play);
}

function newGame() {
    //reset grid and player's score
    _models_grid_model__WEBPACK_IMPORTED_MODULE_7__["grid"].forEach(row => row.fill(0));
    _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].score = 0;
    _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].gameOver = false;
    Object(_piece__WEBPACK_IMPORTED_MODULE_1__["reset"])();
    if (_models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].settings.music) {
        Object(_audio__WEBPACK_IMPORTED_MODULE_6__["playAudio"])(_audio__WEBPACK_IMPORTED_MODULE_6__["sounds"].background, 'loop');
    }

    if (_models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].settings.pause) {
        _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].settings.pause = false;
    }
    Object(_views_overlay__WEBPACK_IMPORTED_MODULE_5__["hideOverlay"])();

    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].score;
    
    play();
    Object(_views_showNextPiece__WEBPACK_IMPORTED_MODULE_2__["showNextPiece"])(_piece__WEBPACK_IMPORTED_MODULE_1__["nextPiece"]);
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
/* harmony import */ var _models_grid_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/grid_model */ "./src/models/grid_model.js");
/* harmony import */ var _assets_sound_background_music_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/sound/background-music.wav */ "./src/assets/sound/background-music.wav");
/* harmony import */ var _assets_sound_hit_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/sound/hit.wav */ "./src/assets/sound/hit.wav");
/* harmony import */ var _assets_sound_moving_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/sound/moving.wav */ "./src/assets/sound/moving.wav");
/* harmony import */ var _assets_sound_game_over_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/sound/game-over.wav */ "./src/assets/sound/game-over.wav");
/* harmony import */ var _assets_sound_line_clear_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sound/line-clear.wav */ "./src/assets/sound/line-clear.wav");
/* harmony import */ var _controllers_audio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/audio */ "./src/controllers/audio.js");
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/styles/index.css */ "./src/assets/styles/index.css");
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_index_css__WEBPACK_IMPORTED_MODULE_9__);











window.addEventListener('DOMContentLoaded', () => {
    const smallDevices = window.matchMedia('(max-width: 375px)').matches;

    let blockSize = 25;
    const ctx = Object(_lib_getCanvas__WEBPACK_IMPORTED_MODULE_0__["getCanvas"])();
    if (smallDevices) {
        blockSize = 23;
    }
    ctx.canvas.width = _models_grid_model__WEBPACK_IMPORTED_MODULE_2__["gridOptions"].cols * blockSize;
    ctx.canvas.height = _models_grid_model__WEBPACK_IMPORTED_MODULE_2__["gridOptions"].rows * blockSize;
    ctx.scale(blockSize, blockSize);
    Object(_controllers_events__WEBPACK_IMPORTED_MODULE_1__["events"])();
    
    _controllers_audio__WEBPACK_IMPORTED_MODULE_8__["sounds"].background.setAttribute('src', _assets_sound_background_music_wav__WEBPACK_IMPORTED_MODULE_3__["default"]);
    _controllers_audio__WEBPACK_IMPORTED_MODULE_8__["sounds"].hit.setAttribute('src', _assets_sound_hit_wav__WEBPACK_IMPORTED_MODULE_4__["default"]);
    _controllers_audio__WEBPACK_IMPORTED_MODULE_8__["sounds"].moving.setAttribute('src', _assets_sound_moving_wav__WEBPACK_IMPORTED_MODULE_5__["default"]);
    _controllers_audio__WEBPACK_IMPORTED_MODULE_8__["sounds"].gameover.setAttribute('src', _assets_sound_game_over_wav__WEBPACK_IMPORTED_MODULE_6__["default"]);
    _controllers_audio__WEBPACK_IMPORTED_MODULE_8__["sounds"].lineClear.setAttribute('src', _assets_sound_line_clear_wav__WEBPACK_IMPORTED_MODULE_7__["default"]);
});

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

/***/ "./src/lib/getDiff.js":
/*!****************************!*\
  !*** ./src/lib/getDiff.js ***!
  \****************************/
/*! exports provided: getDiff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiff", function() { return getDiff; });
//get difference between first touch and last touch
function getDiff(event, firstTouchX, firstTouchY) {
    const yUp = event.changedTouches[0].clientY;
    const xUp = event.changedTouches[0].clientX;

    const xDiff = firstTouchX - xUp;
    const yDiff = firstTouchY - yUp;

    return {
        xDiff,
        yDiff
    }
}

/***/ }),

/***/ "./src/models/grid_model.js":
/*!**********************************!*\
  !*** ./src/models/grid_model.js ***!
  \**********************************/
/*! exports provided: gridOptions, grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridOptions", function() { return gridOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
const gridOptions = {
    cols: 11,
    rows: 20
};

const grid = Array.from({length: gridOptions.rows}, () => Array(gridOptions.cols).fill(0));

/***/ }),

/***/ "./src/models/player_model.js":
/*!************************************!*\
  !*** ./src/models/player_model.js ***!
  \************************************/
/*! exports provided: player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony import */ var _controllers_piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/piece */ "./src/controllers/piece.js");
/* harmony import */ var _grid_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid_model */ "./src/models/grid_model.js");



const player = {
    x: (_grid_model__WEBPACK_IMPORTED_MODULE_1__["grid"][0].length / 2 | 0) - (_controllers_piece__WEBPACK_IMPORTED_MODULE_0__["curPiece"][0].length / 2 | 0),
    y: 0,
    gameOver: false,
    score: 0,
    highScore: 0,
    settings: {
        piecePreview: true,
        pause: true,
        music: true,
        sound: true,
        controls: {
            move_left: 37,
            move_right: 39,
            move_down: 40,
            rotate_left: 90,
            rotate_right: 88,
            hard_drop: 32
        }
    }
}

/***/ }),

/***/ "./src/views/favicon.js":
/*!******************************!*\
  !*** ./src/views/favicon.js ***!
  \******************************/
/*! exports provided: showFavicon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFavicon", function() { return showFavicon; });
/* harmony import */ var _lib_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/draw */ "./src/lib/draw.js");


const favIconCanvas = document.querySelector('#favicon-piece');
const faviconCtx = favIconCanvas.getContext('2d');
faviconCtx.scale(5,5);

function showFavicon(piece) {
    faviconCtx.clearRect(0, 0, faviconCtx.canvas.width, faviconCtx.canvas.height);
    Object(_lib_draw__WEBPACK_IMPORTED_MODULE_0__["draw"])(faviconCtx, piece, { posX: 0, posY: 0 });
    document.querySelector('link[rel="icon"]').setAttribute('href', favIconCanvas.toDataURL());
}

/***/ }),

/***/ "./src/views/loadingBar.js":
/*!*********************************!*\
  !*** ./src/views/loadingBar.js ***!
  \*********************************/
/*! exports provided: removeLoadingScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLoadingScreen", function() { return removeLoadingScreen; });
function removeLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const progressBar = loadingScreen.querySelector('.progress-bar-background');
    progressBar.style.opacity = '0';
    loadingScreen.classList.add('remove');
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
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/player_model */ "./src/models/player_model.js");


const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header-title');
const startScreen = overlay.querySelector('.start-screen');

function showOverlay(gameState) {
    const playBtn = document.querySelector('.start-screen .play-btn');
    const scoreEl = overlay.querySelector('.player-score');
    const highScoreEl = overlay.querySelector('.player-highscore');
    header.textContent = gameState;
    
    const newGameBtn = document.querySelector('.new-game');
    if (gameState === 'Paused') {
        scoreEl.style.display = 'none';
        highScoreEl.style.display = 'none';
        playBtn.textContent = 'Resume';
        playBtn.style.display = 'block';
    } else {
        const score = scoreEl.querySelector('span');
        const highScore = highScoreEl.querySelector('span');
        score.textContent = _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].score;
        highScore.textContent = _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].highScore;
        scoreEl.style.display = 'block';
        highScoreEl.style.display = 'block';
        playBtn.style.display = 'none';
        
    }
    newGameBtn.style.display = 'block';
    overlay.style.display = 'flex';
}

function hideOverlay() {
    overlay.style.display = 'none';
}

const settingsScreen = overlay.querySelector('.settings-screen');
const controls = overlay.querySelector('.controls');
const settings = overlay.querySelector('.settings');
const chooseControl = controls.querySelector('.choose-control');
function goBack() {
    settingsScreen.classList.remove('open');
    settings.classList.remove('open');
    controls.classList.remove('open');
    chooseControl.classList.remove('active');
    startScreen.style.display = 'flex';
}

//open menu for settings or controls
function openMenu(menu) {
    if (menu === 'settings') {
        settings.classList.add('open');
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
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/player_model */ "./src/models/player_model.js");


function showScore() {
    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = _models_player_model__WEBPACK_IMPORTED_MODULE_0__["player"].score;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZC9iYWNrZ3JvdW5kLW11c2ljLndhdiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kL2dhbWUtb3Zlci53YXYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZC9oaXQud2F2Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc291bmQvbGluZS1jbGVhci53YXYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zb3VuZC9tb3Zpbmcud2F2Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvY3JlYXRlUmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9nZXRDYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9nZXREaWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZ3JpZF9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3BsYXllcl9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmF2aWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9hZGluZ0Jhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2hvd05leHRQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2hvd1Njb3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7QUNBL0UsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRDs7QUFFekM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxTQUFTLDJEQUFNOztBQUVmO0FBQ0E7QUFD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Q0w7QUFDQTtBQUNBLDRCQUE0QiwyREFBTTtBQUNsQyxnQ0FBZ0MsMkRBQU07QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQSxrREFBa0Qsd0RBQXdEO0FBQzFHO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxJQUFJLHNEQUFJLGNBQWMsd0ZBQXdGO0FBQzlHLEM7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFnRDs7QUFFekM7QUFDUDtBQUNBLCtCQUErQiwyREFBTTtBQUNyQyxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTIwZGNiYjg4M2MxNjdhNmY0ZWM2YWRlYjU2YTU4ZC53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDc1ZTNmZDZiYzNmMDNjMDAwOWEzMzliY2UyOTY1ZTAud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVmZjExM2I5M2M1NmRlMmI3ZDk1YmVjMDY4MDU4Mzg3LndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiMWEyNmQxMGViMThiMjhjNTczYjY4OTk1N2U3OTNmZi53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDY4Y2I4ZTNhZmEwODhiMzVlNGQyMjZlYmNjNTVhZDYud2F2XCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi4vbW9kZWxzL3BsYXllcl9tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3Qgc291bmRzID0ge1xyXG4gICAgYmFja2dyb3VuZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhY2tncm91bmQtbXVzaWMnKSxcclxuICAgIGhpdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpdC1zb3VuZCcpLFxyXG4gICAgbW92aW5nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92aW5nLXNvdW5kJyksXHJcbiAgICBnYW1lb3ZlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUtb3Zlci1zb3VuZCcpLFxyXG4gICAgbGluZUNsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGluZS1jbGVhci1zb3VuZCcpXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGxheUF1ZGlvKGF1ZGlvLCBhdHRycykge1xyXG4gICAgaWYgKCFwbGF5ZXIuc2V0dGluZ3Muc291bmQpIHJldHVybjtcclxuXHJcbiAgICBpZiAoYXR0cnMpIHtcclxuICAgICAgICBhdWRpby5zZXRBdHRyaWJ1dGUoYXR0cnMsICcnKTtcclxuICAgIH1cclxuICAgIGF1ZGlvLnZvbHVtZSA9IDAuNTtcclxuICAgIGF1ZGlvXHJcbiAgICAgICAgLnBsYXkoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdXNlQXVkaW8oYXVkaW8pIHtcclxuICAgIGF1ZGlvLnBhdXNlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9wQXVkaW8oYXVkaW8pIHtcclxuICAgIGF1ZGlvLnBhdXNlKCk7XHJcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XHJcbn0iLCJpbXBvcnQgeyBhZGRTY29yZSB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgZ3JpZCB9IGZyb20gJy4uL21vZGVscy9ncmlkX21vZGVsJztcclxuaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi4vbW9kZWxzL3BsYXllcl9tb2RlbCc7XHJcbmltcG9ydCB7IGdldENhbnZhcyB9IGZyb20gJy4uL2xpYi9nZXRDYW52YXMnO1xyXG5pbXBvcnQgeyBkcmF3IH0gZnJvbSAnLi4vbGliL2RyYXcnO1xyXG5pbXBvcnQgeyBzb3VuZHMsIHBsYXlBdWRpbyB9IGZyb20gJy4vYXVkaW8nO1xyXG5cclxuLy9kcmF3IHBpZWNlcyBvbiB0aGUgYm9hcmRcclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdCb2FyZChwb3NpdGlvbikge1xyXG4gICAgY29uc3QgY3R4ID0gZ2V0Q2FudmFzKCk7XHJcbiAgICBkcmF3KGN0eCwgZ3JpZCwgeyBwb3NYOiBwb3NpdGlvbi54LCAgcG9zWTogcG9zaXRpb24ueX0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3dlZXBCb2FyZCgpIHtcclxuICAgIGxldCBjbGVhcmVkUm93cyA9IDA7XHJcblxyXG4gICAgZ3JpZC5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGluZUNsZWFyID0gcm93LmV2ZXJ5KHZhbHVlID0+IHZhbHVlID4gMCk7XHJcbiAgICAgICAgaWYgKGxpbmVDbGVhcikge1xyXG4gICAgICAgICAgICBjbGVhcmVkUm93cysrO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdSb3cgPSBncmlkLnNwbGljZShpbmRleCwgMSlbMF0uZmlsbCgwKTtcclxuICAgICAgICAgICAgZ3JpZC51bnNoaWZ0KG5ld1Jvdyk7XHJcbiAgICAgICAgICAgIHBsYXlBdWRpbyhzb3VuZHMubGluZUNsZWFyKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGFkZFNjb3JlKGNsZWFyZWRSb3dzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVG9Cb2FyZChwaWVjZSkge1xyXG4gICAgcGllY2UuZm9yRWFjaCgocm93LCB5KSA9PiB7XHJcbiAgICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGdyaWRbeSArIHBsYXllci55XVt4ICsgcGxheWVyLnhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcGxheUF1ZGlvKHNvdW5kcy5oaXQpO1xyXG59XHJcbiIsImltcG9ydCB7IHBsYXksIHBsYXllck1vdmUsIHBsYXllclJvdGF0ZSwgcGxheWVyRHJvcCwgaGFyZERyb3AsIG5ld0dhbWUgfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IHBsYXllciB9IGZyb20gJy4uL21vZGVscy9wbGF5ZXJfbW9kZWwnO1xyXG5pbXBvcnQgeyBzaG93TmV4dFBpZWNlIH0gZnJvbSAnLi4vdmlld3Mvc2hvd05leHRQaWVjZSc7XHJcbmltcG9ydCB7IG1vdmVQaWVjZSwgbmV4dFBpZWNlLCBjdXJQaWVjZSB9IGZyb20gJy4vcGllY2UnO1xyXG5pbXBvcnQgeyBzb3VuZHMsIHBsYXlBdWRpbywgcGF1c2VBdWRpbyB9IGZyb20gJy4vYXVkaW8nO1xyXG5pbXBvcnQgeyBoaWRlT3ZlcmxheSwgc2hvd092ZXJsYXksIGdvQmFjaywgb3Blbk1lbnUsIG9wZW5QYW5lbCwgY2xvc2VQYW5lbCB9IGZyb20gJy4uL3ZpZXdzL292ZXJsYXknO1xyXG5pbXBvcnQgeyBnZXREaWZmIH0gZnJvbSAnLi4vbGliL2dldERpZmYnO1xyXG5pbXBvcnQgeyByZW1vdmVMb2FkaW5nU2NyZWVuIH0gZnJvbSAnLi4vdmlld3MvbG9hZGluZ0Jhcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKCkge1xyXG4gICAgLy9wbGF5L3Jlc3VtZSBidXR0b25cclxuICAgIGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtc2NyZWVuIC5wbGF5LWJ0bicpO1xyXG4gICAgcGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvL2NoZWNrIGlmIHBsYXllciBlbmFibGVkIGJhY2tncm91bmQgbXVzaWNcclxuICAgICAgICBpZiAocGxheWVyLnNldHRpbmdzLm11c2ljKSB7XHJcbiAgICAgICAgICAgIHBsYXlBdWRpbyhzb3VuZHMuYmFja2dyb3VuZCwgJ2xvb3AnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIuc2V0dGluZ3MucGF1c2UpIHtcclxuICAgICAgICAgICAgcGxheWVyLnNldHRpbmdzLnBhdXNlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhpZGVPdmVybGF5KCk7XHJcbiAgICAgICAgcGxheSgpO1xyXG4gICAgICAgIHNob3dOZXh0UGllY2UobmV4dFBpZWNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vb3BlbiBvcHRpb25zIG1lbnVcclxuICAgIGNvbnN0IHNldHRpbmdzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLWJ0bicpO1xyXG4gICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTWVudSgnc2V0dGluZ3MnKSk7XHJcblxyXG4gICAgLy9vcGVuIGNvbnRyb2xzIG1lbnVcclxuICAgIGNvbnN0IGNvbnRyb2xzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzLWJ0bicpO1xyXG4gICAgY29udHJvbHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTWVudSgnY29udHJvbHMnKSk7XHJcblxyXG4gICAgLy9iYWNrIGJ1dHRvbiB0byBnbyBiYWNrIG9uIHN0YXJ0IHNjcmVlblxyXG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrLWJ0bicpO1xyXG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvQmFjayk7XHJcblxyXG4gICAgLy9jaGVja2JveCB0byBoaWRlL3Nob3cgcGllY2UgcHJldmlldyBzZXR0aW5nXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaWVjZS1wcmV2aWV3Jyk7XHJcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIHBsYXllci5zZXR0aW5ncy5waWVjZVByZXZpZXcgPSBlLnRhcmdldC5jaGVja2VkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy90b2dnbGUgc291bmRcclxuICAgIGNvbnN0IHNvdW5kVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kJyk7XHJcbiAgICBzb3VuZFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIHBsYXllci5zZXR0aW5ncy5zb3VuZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3RvZ2dsZSBiYWNrZ3JvdW5kIG11c2ljXHJcbiAgICBjb25zdCBtdXNpY1RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdXNpYycpO1xyXG4gICAgbXVzaWNUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICBwbGF5ZXIuc2V0dGluZ3MubXVzaWMgPSBlLnRhcmdldC5jaGVja2VkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9wYXVzZSBnYW1lXHJcbiAgICBjb25zdCBwYXVzZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXVzZS1idG4nKTtcclxuICAgIHBhdXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHBsYXllci5zZXR0aW5ncy5wYXVzZSA9IHRydWU7XHJcbiAgICAgICAgcGF1c2VBdWRpbyhzb3VuZHMuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgc2hvd092ZXJsYXkoJ1BhdXNlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9uZXcgZ2FtZVxyXG4gICAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZScpO1xyXG4gICAgbmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0dhbWUpO1xyXG5cclxuICAgIC8vY2hvb3NlIGNvbnRyb2xzXHJcbiAgICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xyXG4gICAgY29uc3QgY2hvb3NlQ29udHJvbCA9IGNvbnRyb2xzLnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtY29udHJvbCcpO1xyXG4gICAgbGV0IHNlbGVjdGVkQ29udHJvbCA9IG51bGw7XHJcbiAgICBjb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLWNvbnRyb2wnKSkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENvbnRyb2wgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udHJvbCcpO1xyXG4gICAgICAgICAgICBvcGVuUGFuZWwoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vZXZlbnQgdG8gbWFrZSB0aGUga2V5IHVzZXIgcHJlc3NlZCBhcyBhIGRlZmF1bHQgY29udHJvbCBmb3IgdGhlIHNlbGVjdGVkIG1vdmVcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgICAgICAvL2Nsb3NlIHBhbmVsIGlmIGVzY2FwZSBrZXkgaXMgcHJlc3NlZFxyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgIGNsb3NlUGFuZWwoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hvb3NlQ29udHJvbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ0bkNvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb250cm9sPVwiJHtzZWxlY3RlZENvbnRyb2x9XCJdYCk7XHJcbiAgICAgICAgICAgIHBsYXllci5zZXR0aW5ncy5jb250cm9sc1tidG5Db250cm9sLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250cm9sJyldID0gZS5rZXlDb2RlO1xyXG4gICAgICAgICAgICBidG5Db250cm9sLnRleHRDb250ZW50ID0gZS5rZXkgPT09ICcgJyA/ICdTcGFjZScgOiBlLmtleTtcclxuICAgICAgICAgICAgY2xvc2VQYW5lbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vY2xpY2sgYW55d2hlcmUgb3V0c2lkZSB0byBjbG9zZSBwYW5lbCAoaWYgeW91IGRvbnQgd2FudCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgY29udHJvbClcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGNob29zZUNvbnRyb2wuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJlxyXG4gICAgICAgICAgICAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaG9vc2UtY29udHJvbCcpICYmXHJcbiAgICAgICAgICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1jb250cm9sJykgJiZcclxuICAgICAgICAgICAgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29udHJvbC1mb3InKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjbG9zZVBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChwbGF5ZXIuc2V0dGluZ3MucGF1c2UgfHwgY2hvb3NlQ29udHJvbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XHJcbiAgICAgICAgbW92ZVBpZWNlKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9sb2FkaW5nIGJhclxyXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtYmFyLWZvcmVncm91bmQnKTtcclxuICAgIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgICBPYmplY3QudmFsdWVzKHNvdW5kcykuZm9yRWFjaChzb3VuZEVsID0+IHtcclxuICAgICAgICBzb3VuZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyArPSAyMDtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHtwcm9ncmVzc30lYDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcHJvZ3Jlc3NCYXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IDEwMCkge1xyXG4gICAgICAgICAgICByZW1vdmVMb2FkaW5nU2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9tb2JpbGUgY29udHJvbHNcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKTtcclxuICAgIGxldCBwcmV2VG91Y2hQb3NZID0gMDtcclxuICAgIC8vdG91Y2ggc2Vuc2l0aXZpdHlcclxuICAgIGxldCBzZW5zaXRpdml0eSA9IDA7XHJcblxyXG4gICAgLy90cmFjayBtb3Zpbmcgc3BlZWQgd2hlbiBwbGF5ZXIgc3dpcGVzXHJcbiAgICBsZXQgbW92aW5nU3BlZWQgPSAwO1xyXG5cclxuICAgIGxldCB0b3VjaE1vdmVkID0gdHJ1ZTtcclxuICAgIC8vbW92aW5nIGhvcml6b250YWxseVxyXG4gICAgbGV0IG1vdmluZ0ggPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgeURvd24gPSBudWxsO1xyXG4gICAgbGV0IHhEb3duID0gbnVsbDtcclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChwbGF5ZXIuc2V0dGluZ3MucGF1c2UpIHJldHVybjtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG91Y2hNb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgICAgIGNvbnN0IHsgeERpZmYsIHlEaWZmIH0gPSBnZXREaWZmKGUsIHhEb3duLCB5RG93bik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNlbnNpdGl2aXR5ID4gNykge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeERpZmYpID4gTWF0aC5hYnMoeURpZmYpKSB7XHJcbiAgICAgICAgICAgICAgICBtb3ZpbmdIID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh4RGlmZiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL21vdmUgbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1vdmUoLTEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL21vdmUgcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNb3ZlKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vbW92ZSBwaWVjZSBkb3duXHJcbiAgICAgICAgICAgIGlmICh0b3VjaC5wYWdlWSAtIHByZXZUb3VjaFBvc1kgPiAwICYmICFtb3ZpbmdIKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJEcm9wKGN1clBpZWNlKTtcclxuICAgICAgICAgICAgICAgIG1vdmluZ1NwZWVkKys7XHJcbiAgICAgICAgICAgICAgICBtb3ZpbmdIID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbnNpdGl2aXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Vuc2l0aXZpdHkrKztcclxuXHJcbiAgICAgICAgcHJldlRvdWNoUG9zWSA9IHRvdWNoLnBhZ2VZO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IHhEaWZmLCB5RGlmZiB9ID0gZ2V0RGlmZihlLCB4RG93biwgeURvd24pO1xyXG4gICAgICAgIG1vdmluZ0ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHhEaWZmKSA8IE1hdGguYWJzKHlEaWZmKSkge1xyXG4gICAgICAgICAgICBpZiAoeURpZmYgPCAwICYmIG1vdmluZ1NwZWVkIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIGhhcmREcm9wKGN1clBpZWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3Jlc2V0IGFmdGVyIHBsYXllciBkcm9wcyBwaWVjZSBhbmQgbGlmdHMgZmluZ2VyXHJcbiAgICAgICAgICAgIHlEb3duID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0b3VjaE1vdmVkKSB7XHJcbiAgICAgICAgICAgIHBsYXllclJvdGF0ZShjdXJQaWVjZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vdmluZ1NwZWVkID0gMDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcclxuICAgICAgICB4RG93biA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICB5RG93biA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICB0b3VjaE1vdmVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IGNyZWF0ZVJlY3QgfSBmcm9tICcuLi9saWIvY3JlYXRlUmVjdCc7XHJcbmltcG9ydCB7IGdldENhbnZhcyB9IGZyb20gJy4uL2xpYi9nZXRDYW52YXMnO1xyXG5pbXBvcnQgeyBwbGF5ZXJEcm9wLCBwbGF5ZXJNb3ZlLCBwbGF5ZXJSb3RhdGUsIGhhcmREcm9wIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuLi9tb2RlbHMvcGxheWVyX21vZGVsJztcclxuaW1wb3J0IHsgZ3JpZCB9IGZyb20gJy4uL21vZGVscy9ncmlkX21vZGVsJztcclxuaW1wb3J0IHsgZHJhdyB9IGZyb20gJy4uL2xpYi9kcmF3JztcclxuaW1wb3J0IHsgc2hvd0Zhdmljb24gfSBmcm9tICcuLi92aWV3cy9mYXZpY29uJztcclxuXHJcbmV4cG9ydCBsZXQgY3VyUGllY2UgPSBjcmVhdGVQaWVjZSgpO1xyXG5leHBvcnQgbGV0IG5leHRQaWVjZSA9IGdldE5leHRQaWVjZSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwYXduUGllY2UoKSB7XHJcbiAgICAvL2NlbnRlciBwaWVjZVxyXG4gICAgY29uc3QgY3R4ID0gZ2V0Q2FudmFzKCk7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGRyYXcoY3R4LCBjdXJQaWVjZSwgeyBwb3NYOiBwbGF5ZXIueCwgcG9zWTogcGxheWVyLnkgfSk7XHJcbiAgICBpZiAocGxheWVyLnNldHRpbmdzLnBpZWNlUHJldmlldykge1xyXG4gICAgICAgIHBpZWNlUHJldmlldygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29sbGlkZShwaWVjZSwgb2Zmc2V0KSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHBpZWNlLmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwaWVjZVt5XS5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICBpZiAocGllY2VbeV1beF0gIT09IDAgJiYgKGdyaWRbeSArIG9mZnNldC55XSAmJiBncmlkW3kgKyBvZmZzZXQueV1beCArIG9mZnNldC54XSkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICBjdXJQaWVjZSA9IG5leHRQaWVjZTtcclxuICAgIHBsYXllci54ID0gKGdyaWRbMF0ubGVuZ3RoIC8gMiB8IDApIC0gKGN1clBpZWNlWzBdLmxlbmd0aCAvIDIgfCAwKTsgLy9wdXQgcGllY2UgaW4gdGhlIGNlbnRlciBvZiB0aGUgYm9hcmRcclxuICAgIHBsYXllci55ID0gMDtcclxuICAgIHByZXZpZXcucGllY2UgPSBjdXJQaWVjZTtcclxuICAgIHByZXZpZXcueCA9IHBsYXllci54O1xyXG4gICAgcHJldmlldy55ID0gMDtcclxuICAgIG5leHRQaWVjZSA9IGdldE5leHRQaWVjZSgpO1xyXG4gICAgc2hvd0Zhdmljb24oY3VyUGllY2UpO1xyXG4gICAgLy9jaGVjayBnYW1lIG92ZXJcclxuICAgIGlmIChjb2xsaWRlKGN1clBpZWNlLCBwbGF5ZXIpKSB7XHJcbiAgICAgICAgcGxheWVyLmdhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICBwbGF5ZXIuaGlnaFNjb3JlID0gcGxheWVyLnNjb3JlID4gcGxheWVyLmhpZ2hTY29yZSA/IHBsYXllci5zY29yZSA6IHBsYXllci5oaWdoU2NvcmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUocGllY2UsIGRpcmVjdGlvbikge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwaWVjZS5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeTsgKyt4KSB7XHJcbiAgICAgICAgICAgIC8vc3dpdGNoIGNvbHVtbnMgYW5kIHJvd3NcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgcGllY2VbeF1beV0sXHJcbiAgICAgICAgICAgICAgICBwaWVjZVt5XVt4XSxcclxuICAgICAgICAgICAgXSA9IFtcclxuICAgICAgICAgICAgICAgIHBpZWNlW3ldW3hdLFxyXG4gICAgICAgICAgICAgICAgcGllY2VbeF1beV0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcclxuICAgICAgICBwaWVjZS5mb3JFYWNoKHJvdyA9PiByb3cucmV2ZXJzZSgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGllY2UucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG4gICAgcHJldmlldy5waWVjZSA9IHBpZWNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGllY2UoKSB7XHJcbiAgICBjb25zdCBwaWVjZXMgPSBbJ0knLCAnSicsICdMJywgJ08nLCAnUycsICdUJywgJ1onXTtcclxuIFxyXG4gICAgY29uc3QgYmxvY2tzID0gW1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBbMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDAsIDBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFsyLCAwLCAwXSxcclxuICAgICAgICAgICAgWzIsIDIsIDJdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWzAsIDAsIDNdLFxyXG4gICAgICAgICAgICBbMywgMywgM10sXHJcbiAgICAgICAgICAgIFswLCAwLCAwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbNCwgNF0sXHJcbiAgICAgICAgICAgIFs0LCA0XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBbMCwgNSwgNV0sXHJcbiAgICAgICAgICAgIFs1LCA1LCAwXSxcclxuICAgICAgICAgICAgWzAsIDAsIDBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFswLCA2LCAwXSxcclxuICAgICAgICAgICAgWzYsIDYsIDZdLFxyXG4gICAgICAgICAgICBbMCwgMCwgMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgWzcsIDcsIDBdLFxyXG4gICAgICAgICAgICBbMCwgNywgN10sXHJcbiAgICAgICAgICAgIFswLCAwLCAwXVxyXG4gICAgICAgIF1cclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIGJsb2Nrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwaWVjZXMubGVuZ3RoKV07XHJcbn1cclxuXHJcbi8vcGllY2UgcHJldmlld1xyXG5leHBvcnQgY29uc3QgcHJldmlldyA9IHtcclxuICAgIHBpZWNlOiBjdXJQaWVjZS5zbGljZSgpLFxyXG4gICAgeDogKGdyaWRbMF0ubGVuZ3RoIC8gMiB8IDApIC0gKGN1clBpZWNlWzBdLmxlbmd0aCAvIDIgfCAwKSxcclxuICAgIHk6IDAsXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBpZWNlUHJldmlldygpIHtcclxuICAgIGNvbnN0IGN0eCA9IGdldENhbnZhcygpO1xyXG4gICAgd2hpbGUgKCFjb2xsaWRlKHByZXZpZXcucGllY2UsIHByZXZpZXcpKSB7XHJcbiAgICAgICAgcHJldmlldy55Kys7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGlkZShwcmV2aWV3LnBpZWNlLCBwcmV2aWV3KSkge1xyXG4gICAgICAgIHByZXZpZXcueS0tO1xyXG4gICAgfVxyXG4gICAgcHJldmlldy5waWVjZS5mb3JFYWNoKChyb3csIHkpID0+IHtcclxuICAgICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUmVjdChjdHgsICcxNSwgMTUsIDE1JywgcHJldmlldy54ICsgeCwgcHJldmlldy55ICsgeSwgMSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcHJldmlldy55ID0gcGxheWVyLnk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0UGllY2UoKSB7XHJcbiAgICBjb25zdCBuZXh0UGllY2UgPSBjcmVhdGVQaWVjZSgpO1xyXG4gICAgcmV0dXJuIG5leHRQaWVjZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVQaWVjZShldmVudCkge1xyXG4gICAgaWYgKHBsYXllci5zZXR0aW5ncy5jb250cm9scy5tb3ZlX2xlZnQgPT09IGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICBwbGF5ZXJNb3ZlKC0xKTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyLnNldHRpbmdzLmNvbnRyb2xzLm1vdmVfcmlnaHQgPT09IGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICBwbGF5ZXJNb3ZlKDEpO1xyXG4gICAgfSBlbHNlIGlmIChwbGF5ZXIuc2V0dGluZ3MuY29udHJvbHMubW92ZV9kb3duID09PSBldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBwbGF5ZXJEcm9wKGN1clBpZWNlKTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyLnNldHRpbmdzLmNvbnRyb2xzLnJvdGF0ZV9sZWZ0ID09PSBldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgcGxheWVyUm90YXRlKGN1clBpZWNlLCAxKTtcclxuICAgIH0gZWxzZSBpZiAocGxheWVyLnNldHRpbmdzLmNvbnRyb2xzLnJvdGF0ZV9yaWdodCA9PT0gZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgIHBsYXllclJvdGF0ZShjdXJQaWVjZSwgLTEpO1xyXG4gICAgfSBlbHNlIGlmIChwbGF5ZXIuc2V0dGluZ3MuY29udHJvbHMuaGFyZF9kcm9wID09PSBldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoYXJkRHJvcChjdXJQaWVjZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuLi9tb2RlbHMvcGxheWVyX21vZGVsJztcclxuaW1wb3J0IHsgY29sbGlkZSwgcm90YXRlLCByZXNldCwgc3Bhd25QaWVjZSwgY3VyUGllY2UsIHByZXZpZXcsIG5leHRQaWVjZSB9IGZyb20gJy4vcGllY2UnO1xyXG5pbXBvcnQgeyBzaG93TmV4dFBpZWNlIH0gZnJvbSAnLi4vdmlld3Mvc2hvd05leHRQaWVjZSc7XHJcbmltcG9ydCB7IG1lcmdlVG9Cb2FyZCwgc3dlZXBCb2FyZCwgZHJhd0JvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XHJcbmltcG9ydCB7IHNob3dTY29yZSB9IGZyb20gJy4uL3ZpZXdzL3Nob3dTY29yZSc7XHJcbmltcG9ydCB7IHNob3dPdmVybGF5IH0gZnJvbSAnLi4vdmlld3Mvb3ZlcmxheSc7XHJcbmltcG9ydCB7IHBsYXlBdWRpbywgc291bmRzLCBzdG9wQXVkaW8gfSBmcm9tICcuL2F1ZGlvJztcclxuaW1wb3J0IHsgaGlkZU92ZXJsYXkgfSBmcm9tICcuLi92aWV3cy9vdmVybGF5JztcclxuaW1wb3J0IHsgZ3JpZCB9IGZyb20gJy4uL21vZGVscy9ncmlkX21vZGVsJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJNb3ZlKGRpcmVjdGlvbikge1xyXG4gICAgcGxheUF1ZGlvKHNvdW5kcy5tb3ZpbmcpO1xyXG4gICAgcGxheWVyLnggKz0gZGlyZWN0aW9uO1xyXG4gICAgcHJldmlldy54ICs9IGRpcmVjdGlvbjtcclxuICAgIGlmIChjb2xsaWRlKGN1clBpZWNlLCBwbGF5ZXIpKSB7XHJcbiAgICAgICAgcGxheWVyLnggLT0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHByZXZpZXcueCAtPSBkaXJlY3Rpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJEcm9wKHBpZWNlKSB7XHJcbiAgICBpZiAocGxheWVyLmdhbWVPdmVyKSByZXR1cm47XHJcbiAgICBwbGF5ZXIueSsrO1xyXG4gICAgXHJcbiAgICBpZiAoY29sbGlkZShjdXJQaWVjZSwgcGxheWVyKSkge1xyXG4gICAgICAgIHBsYXllci55LS07XHJcbiAgICAgICAgbWVyZ2VUb0JvYXJkKHBpZWNlKTtcclxuICAgICAgICByZXNldCgpO1xyXG4gICAgICAgIHN3ZWVwQm9hcmQoKTtcclxuICAgICAgICBzaG93TmV4dFBpZWNlKG5leHRQaWVjZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXJkRHJvcChwaWVjZSkge1xyXG4gICAgaWYgKHBsYXllci5nYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgd2hpbGUgKCFjb2xsaWRlKGN1clBpZWNlLCBwbGF5ZXIpKSB7XHJcbiAgICAgICAgcGxheWVyLnkrKztcclxuICAgIH1cclxuICAgIHBsYXllci55LS07XHJcbiAgICBtZXJnZVRvQm9hcmQocGllY2UpO1xyXG4gICAgcmVzZXQoKTtcclxuICAgIHN3ZWVwQm9hcmQoKTtcclxuICAgIHNob3dOZXh0UGllY2UobmV4dFBpZWNlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllclJvdGF0ZShwaWVjZSwgZGlyZWN0aW9uKSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBsYXllci54O1xyXG4gICAgbGV0IG9mZnNldCA9IDE7XHJcblxyXG4gICAgcm90YXRlKHBpZWNlLCBkaXJlY3Rpb24pO1xyXG4gICAgd2hpbGUgKGNvbGxpZGUoY3VyUGllY2UsIHBsYXllcikpIHtcclxuICAgICAgICBwbGF5ZXIueCArPSBvZmZzZXQ7XHJcbiAgICAgICAgcHJldmlldy54ICs9IG9mZnNldDtcclxuICAgICAgICBvZmZzZXQgPSAtKG9mZnNldCArIChvZmZzZXQgPiAwID8gMSA6IC0xKSk7XHJcbiAgICAgICAgaWYgKG9mZnNldCA+IHBpZWNlWzBdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByb3RhdGUocGllY2UsIC1kaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBwbGF5ZXIueCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICBwcmV2aWV3LnggPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy9hZGQgc2NvcmVcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFNjb3JlKGxpbmVzQ2xlYXJlZCkge1xyXG4gICAgaWYgKGxpbmVzQ2xlYXJlZCA9PT0gMSkge1xyXG4gICAgICAgIHBsYXllci5zY29yZSArPSA0MDtcclxuICAgIH0gZWxzZSBpZiAobGluZXNDbGVhcmVkID09PSAyKSB7XHJcbiAgICAgICAgcGxheWVyLnNjb3JlICs9IDEwMDtcclxuICAgIH0gZWxzZSBpZiAobGluZXNDbGVhcmVkID09PSAzKSB7XHJcbiAgICAgICAgcGxheWVyLnNjb3JlICs9IDMwMDtcclxuICAgIH0gZWxzZSBpZiAobGluZXNDbGVhcmVkID49IDQpIHtcclxuICAgICAgICBwbGF5ZXIuc2NvcmUgKz0gMTIwMDtcclxuICAgIH1cclxuICAgIHNob3dTY29yZSgpO1xyXG59XHJcblxyXG5cclxubGV0IGRyb3BDb3VudGVyID0gMDtcclxubGV0IGludGVydmFsID0gMTAwMDtcclxubGV0IGxhc3RUaW1lID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGF5KHRpbWUgPSAwKSB7XHJcbiAgICBpZiAocGxheWVyLnNldHRpbmdzLnBhdXNlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwbGF5ZXIuZ2FtZU92ZXIpIHtcclxuICAgICAgICBzaG93T3ZlcmxheSgnR2FtZSBPdmVyJyk7XHJcbiAgICAgICAgc3RvcEF1ZGlvKHNvdW5kcy5iYWNrZ3JvdW5kKTtcclxuICAgICAgICBwbGF5QXVkaW8oc291bmRzLmdhbWVvdmVyKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsdGFUaW1lID0gdGltZSAtIGxhc3RUaW1lO1xyXG4gICAgbGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgZHJvcENvdW50ZXIgKz0gZGVsdGFUaW1lO1xyXG4gICAgaWYgKGRyb3BDb3VudGVyID4gaW50ZXJ2YWwpIHtcclxuICAgICAgICBwbGF5ZXJEcm9wKGN1clBpZWNlKTtcclxuICAgICAgICBkcm9wQ291bnRlciA9IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYXduUGllY2UoKTtcclxuICAgIGRyYXdCb2FyZCh7IHg6IDAsIHk6IDAgfSk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocGxheSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lKCkge1xyXG4gICAgLy9yZXNldCBncmlkIGFuZCBwbGF5ZXIncyBzY29yZVxyXG4gICAgZ3JpZC5mb3JFYWNoKHJvdyA9PiByb3cuZmlsbCgwKSk7XHJcbiAgICBwbGF5ZXIuc2NvcmUgPSAwO1xyXG4gICAgcGxheWVyLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICByZXNldCgpO1xyXG4gICAgaWYgKHBsYXllci5zZXR0aW5ncy5tdXNpYykge1xyXG4gICAgICAgIHBsYXlBdWRpbyhzb3VuZHMuYmFja2dyb3VuZCwgJ2xvb3AnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGxheWVyLnNldHRpbmdzLnBhdXNlKSB7XHJcbiAgICAgICAgcGxheWVyLnNldHRpbmdzLnBhdXNlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBoaWRlT3ZlcmxheSgpO1xyXG5cclxuICAgIGNvbnN0IHNjb3JlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZScpO1xyXG4gICAgc2NvcmVFbGVtZW50LnRleHRDb250ZW50ID0gcGxheWVyLnNjb3JlO1xyXG4gICAgXHJcbiAgICBwbGF5KCk7XHJcbiAgICBzaG93TmV4dFBpZWNlKG5leHRQaWVjZSk7XHJcbn0iLCJpbXBvcnQgeyBnZXRDYW52YXMgfSBmcm9tICcuL2xpYi9nZXRDYW52YXMnO1xyXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2V2ZW50cyc7XHJcbmltcG9ydCB7IGdyaWRPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvZ3JpZF9tb2RlbCc7XHJcbmltcG9ydCBiZ011c2ljIGZyb20gJy4vYXNzZXRzL3NvdW5kL2JhY2tncm91bmQtbXVzaWMud2F2JztcclxuaW1wb3J0IGhpdCBmcm9tICcuL2Fzc2V0cy9zb3VuZC9oaXQud2F2JztcclxuaW1wb3J0IG1vdmluZyBmcm9tICcuL2Fzc2V0cy9zb3VuZC9tb3Zpbmcud2F2JztcclxuaW1wb3J0IGdhbWVPdmVyIGZyb20gJy4vYXNzZXRzL3NvdW5kL2dhbWUtb3Zlci53YXYnO1xyXG5pbXBvcnQgbGluZUNsZWFyIGZyb20gJy4vYXNzZXRzL3NvdW5kL2xpbmUtY2xlYXIud2F2JztcclxuaW1wb3J0IHsgc291bmRzIH0gZnJvbSAnLi9jb250cm9sbGVycy9hdWRpbyc7XHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL2luZGV4LmNzcyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHNtYWxsRGV2aWNlcyA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAzNzVweCknKS5tYXRjaGVzO1xyXG5cclxuICAgIGxldCBibG9ja1NpemUgPSAyNTtcclxuICAgIGNvbnN0IGN0eCA9IGdldENhbnZhcygpO1xyXG4gICAgaWYgKHNtYWxsRGV2aWNlcykge1xyXG4gICAgICAgIGJsb2NrU2l6ZSA9IDIzO1xyXG4gICAgfVxyXG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IGdyaWRPcHRpb25zLmNvbHMgKiBibG9ja1NpemU7XHJcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGdyaWRPcHRpb25zLnJvd3MgKiBibG9ja1NpemU7XHJcbiAgICBjdHguc2NhbGUoYmxvY2tTaXplLCBibG9ja1NpemUpO1xyXG4gICAgZXZlbnRzKCk7XHJcbiAgICBcclxuICAgIHNvdW5kcy5iYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnc3JjJywgYmdNdXNpYyk7XHJcbiAgICBzb3VuZHMuaGl0LnNldEF0dHJpYnV0ZSgnc3JjJywgaGl0KTtcclxuICAgIHNvdW5kcy5tb3Zpbmcuc2V0QXR0cmlidXRlKCdzcmMnLCBtb3ZpbmcpO1xyXG4gICAgc291bmRzLmdhbWVvdmVyLnNldEF0dHJpYnV0ZSgnc3JjJywgZ2FtZU92ZXIpO1xyXG4gICAgc291bmRzLmxpbmVDbGVhci5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxpbmVDbGVhcik7XHJcbn0pOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWN0KGN0eCwgY29sb3IsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke2NvbG9yfSwgMC41KWA7XHJcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtjb2xvcn0sIDEpYDtcclxuICAgIGN0eC5maWxsUmVjdCh4ICsgMC4wODQsIHkgKyAwLjA4NCwgd2lkdGggLyAxLjIsIGhlaWdodCAvIDEuMik7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVSZWN0IH0gZnJvbSAnLi9jcmVhdGVSZWN0JztcclxuXHJcbmNvbnN0IGNvbG9ycyA9IFtcclxuICAgIG51bGwsXHJcbiAgICAnNTEsIDE3MiwgMjU0JyxcclxuICAgICc3NSwgMTA1LCAyMTQnLFxyXG4gICAgJzIzNywgMjU1LCAxMjInLFxyXG4gICAgJzI1NSwgMjAyLCAxMjInLFxyXG4gICAgJzEyOSwgMjU1LCAxMjInLFxyXG4gICAgJzE4OSwgMTIyLCAyNTUnLFxyXG4gICAgJzI1NSwgNTYsIDU2J1xyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXcoY3R4LCBtYXRyaXgsIG9mZnNldCkge1xyXG4gICAgbWF0cml4LmZvckVhY2goKHJvdywgeSkgPT4ge1xyXG4gICAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVSZWN0KGN0eCwgY29sb3JzW3ZhbHVlXSwgb2Zmc2V0LnBvc1ggKyB4LCBvZmZzZXQucG9zWSArIHksIDEsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRDYW52YXMoKSB7XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzJyk7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICByZXR1cm4gY3R4O1xyXG59IiwiLy9nZXQgZGlmZmVyZW5jZSBiZXR3ZWVuIGZpcnN0IHRvdWNoIGFuZCBsYXN0IHRvdWNoXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaWZmKGV2ZW50LCBmaXJzdFRvdWNoWCwgZmlyc3RUb3VjaFkpIHtcclxuICAgIGNvbnN0IHlVcCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICBjb25zdCB4VXAgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG5cclxuICAgIGNvbnN0IHhEaWZmID0gZmlyc3RUb3VjaFggLSB4VXA7XHJcbiAgICBjb25zdCB5RGlmZiA9IGZpcnN0VG91Y2hZIC0geVVwO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeERpZmYsXHJcbiAgICAgICAgeURpZmZcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBncmlkT3B0aW9ucyA9IHtcclxuICAgIGNvbHM6IDExLFxyXG4gICAgcm93czogMjBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBncmlkID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiBncmlkT3B0aW9ucy5yb3dzfSwgKCkgPT4gQXJyYXkoZ3JpZE9wdGlvbnMuY29scykuZmlsbCgwKSk7IiwiaW1wb3J0IHsgY3VyUGllY2UgfSBmcm9tICcuLi9jb250cm9sbGVycy9waWVjZSc7XHJcbmltcG9ydCB7IGdyaWQgfSBmcm9tICcuL2dyaWRfbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXllciA9IHtcclxuICAgIHg6IChncmlkWzBdLmxlbmd0aCAvIDIgfCAwKSAtIChjdXJQaWVjZVswXS5sZW5ndGggLyAyIHwgMCksXHJcbiAgICB5OiAwLFxyXG4gICAgZ2FtZU92ZXI6IGZhbHNlLFxyXG4gICAgc2NvcmU6IDAsXHJcbiAgICBoaWdoU2NvcmU6IDAsXHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHBpZWNlUHJldmlldzogdHJ1ZSxcclxuICAgICAgICBwYXVzZTogdHJ1ZSxcclxuICAgICAgICBtdXNpYzogdHJ1ZSxcclxuICAgICAgICBzb3VuZDogdHJ1ZSxcclxuICAgICAgICBjb250cm9sczoge1xyXG4gICAgICAgICAgICBtb3ZlX2xlZnQ6IDM3LFxyXG4gICAgICAgICAgICBtb3ZlX3JpZ2h0OiAzOSxcclxuICAgICAgICAgICAgbW92ZV9kb3duOiA0MCxcclxuICAgICAgICAgICAgcm90YXRlX2xlZnQ6IDkwLFxyXG4gICAgICAgICAgICByb3RhdGVfcmlnaHQ6IDg4LFxyXG4gICAgICAgICAgICBoYXJkX2Ryb3A6IDMyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgZHJhdyB9IGZyb20gJy4uL2xpYi9kcmF3JztcclxuXHJcbmNvbnN0IGZhdkljb25DYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2aWNvbi1waWVjZScpO1xyXG5jb25zdCBmYXZpY29uQ3R4ID0gZmF2SWNvbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5mYXZpY29uQ3R4LnNjYWxlKDUsNSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Zhdmljb24ocGllY2UpIHtcclxuICAgIGZhdmljb25DdHguY2xlYXJSZWN0KDAsIDAsIGZhdmljb25DdHguY2FudmFzLndpZHRoLCBmYXZpY29uQ3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZHJhdyhmYXZpY29uQ3R4LCBwaWVjZSwgeyBwb3NYOiAwLCBwb3NZOiAwIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJpY29uXCJdJykuc2V0QXR0cmlidXRlKCdocmVmJywgZmF2SWNvbkNhbnZhcy50b0RhdGFVUkwoKSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlTG9hZGluZ1NjcmVlbigpIHtcclxuICAgIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1zY3JlZW4nKTtcclxuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gbG9hZGluZ1NjcmVlbi5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQnKTtcclxuICAgIHByb2dyZXNzQmFyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICBsb2FkaW5nU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xyXG59IiwiaW1wb3J0IHsgcGxheWVyIH0gZnJvbSAnLi4vbW9kZWxzL3BsYXllcl9tb2RlbCc7XHJcblxyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci10aXRsZScpO1xyXG5jb25zdCBzdGFydFNjcmVlbiA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLnN0YXJ0LXNjcmVlbicpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dPdmVybGF5KGdhbWVTdGF0ZSkge1xyXG4gICAgY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1zY3JlZW4gLnBsYXktYnRuJyk7XHJcbiAgICBjb25zdCBzY29yZUVsID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXNjb3JlJyk7XHJcbiAgICBjb25zdCBoaWdoU2NvcmVFbCA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLnBsYXllci1oaWdoc2NvcmUnKTtcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGdhbWVTdGF0ZTtcclxuICAgIFxyXG4gICAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZScpO1xyXG4gICAgaWYgKGdhbWVTdGF0ZSA9PT0gJ1BhdXNlZCcpIHtcclxuICAgICAgICBzY29yZUVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgaGlnaFNjb3JlRWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBwbGF5QnRuLnRleHRDb250ZW50ID0gJ1Jlc3VtZSc7XHJcbiAgICAgICAgcGxheUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBzY29yZUVsLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcclxuICAgICAgICBjb25zdCBoaWdoU2NvcmUgPSBoaWdoU2NvcmVFbC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XHJcbiAgICAgICAgc2NvcmUudGV4dENvbnRlbnQgPSBwbGF5ZXIuc2NvcmU7XHJcbiAgICAgICAgaGlnaFNjb3JlLnRleHRDb250ZW50ID0gcGxheWVyLmhpZ2hTY29yZTtcclxuICAgICAgICBzY29yZUVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGhpZ2hTY29yZUVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHBsYXlCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG5ld0dhbWVCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlT3ZlcmxheSgpIHtcclxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuY29uc3Qgc2V0dGluZ3NTY3JlZW4gPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1zY3JlZW4nKTtcclxuY29uc3QgY29udHJvbHMgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xyXG5jb25zdCBzZXR0aW5ncyA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLnNldHRpbmdzJyk7XHJcbmNvbnN0IGNob29zZUNvbnRyb2wgPSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcuY2hvb3NlLWNvbnRyb2wnKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdvQmFjaygpIHtcclxuICAgIHNldHRpbmdzU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgIHNldHRpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgIGNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuICAgIGNob29zZUNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBzdGFydFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG59XHJcblxyXG4vL29wZW4gbWVudSBmb3Igc2V0dGluZ3Mgb3IgY29udHJvbHNcclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5NZW51KG1lbnUpIHtcclxuICAgIGlmIChtZW51ID09PSAnc2V0dGluZ3MnKSB7XHJcbiAgICAgICAgc2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgfSBlbHNlIGlmIChtZW51ID09PSAnY29udHJvbHMnKSB7XHJcbiAgICAgICAgY29udHJvbHMuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgfVxyXG4gICAgc2V0dGluZ3NTY3JlZW4uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgc3RhcnRTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuLy9vcGVuIHBhbmVsIHdoZW4gdXNlciBjbGlja3MgdG8gY2hhbmdlIG9uZSBvZiB0aGUga2V5c1xyXG5jb25zdCBwYW5lbE92ZXJsYXkgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5jaG9vc2UtY29udHJvbC1vdmVybGF5Jyk7XHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuUGFuZWwoZSkge1xyXG4gICAgY29uc3QgcEVsZW1lbnQgPSBjb250cm9scy5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC1mb3InKTtcclxuICAgIHBFbGVtZW50LnRleHRDb250ZW50ID0gYENob29zZSBhIGJ1dHRvbiBmb3IgJHtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udHJvbCcpLnJlcGxhY2UoJ18nLCAnICcpfWA7XHJcbiAgICBjaG9vc2VDb250cm9sLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgcGFuZWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQYW5lbCgpIHtcclxuICAgIGNob29zZUNvbnRyb2wuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBwYW5lbE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn0iLCJpbXBvcnQgeyBkcmF3IH0gZnJvbSAnLi4vbGliL2RyYXcnO1xyXG5jb25zdCBjdHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV4dC1waWVjZScpLmdldENvbnRleHQoJzJkJyk7XHJcbmN0eC5jYW52YXMud2lkdGggPSAxMDA7XHJcbmN0eC5jYW52YXMuaGVpZ2h0ID0gNTA7XHJcbmN0eC5zY2FsZSgxMCwgMTApO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOZXh0UGllY2UocGllY2UpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZHJhdyhjdHgsIHBpZWNlLCB7IHBvc1g6ICgxMCAvIDIgfCAwKSAtIChwaWVjZVswXS5sZW5ndGggLyAyIHwgMCksIHBvc1k6ICg1IC8gMikgLSAocGllY2UubGVuZ3RoIC8gMiB8IDApfSk7XHJcbn0iLCJpbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuLi9tb2RlbHMvcGxheWVyX21vZGVsJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93U2NvcmUoKSB7XHJcbiAgICBjb25zdCBzY29yZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcclxuICAgIHNjb3JlRWxlbWVudC50ZXh0Q29udGVudCA9IHBsYXllci5zY29yZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=