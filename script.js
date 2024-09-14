document.querySelector('.first-point').onclick = function() {selectButtonOne()};
function selectButtonOne(){
    document.querySelector('.first-point').classList.add('active');
    document.querySelector('.second-point').classList.remove('active');
    document.querySelector('.third-point').classList.remove('active');
    document.querySelector('.fourth-point').classList.remove('active');
    document.querySelector('.first-slide').classList.add('active');
    document.querySelector('.second-slide').classList.remove('active');
    document.querySelector('.third-slide').classList.remove('active');
    document.querySelector('.fourth-slide').classList.remove('active');
    document.querySelector('.first-phrase').classList.add('active');
    document.querySelector('.second-phrase').classList.remove('active');
    document.querySelector('.third-phrase').classList.remove('active');
    document.querySelector('.fourth-phrase').classList.remove('active');
};

document.querySelector('.second-point').onclick = function() {selectButtonTwo()};
function selectButtonTwo(){
    document.querySelector('.first-point').classList.remove('active');
    document.querySelector('.second-point').classList.add('active');
    document.querySelector('.third-point').classList.remove('active');
    document.querySelector('.fourth-point').classList.remove('active');
    document.querySelector('.first-slide').classList.remove('active');
    document.querySelector('.second-slide').classList.add('active');
    document.querySelector('.third-slide').classList.remove('active');
    document.querySelector('.fourth-slide').classList.remove('active');
    document.querySelector('.first-phrase').classList.remove('active');
    document.querySelector('.second-phrase').classList.add('active');
    document.querySelector('.third-phrase').classList.remove('active');
    document.querySelector('.fourth-phrase').classList.remove('active');
};

document.querySelector('.third-point').onclick = function() {selectButtonThree()};
function selectButtonThree(){
    document.querySelector('.first-point').classList.remove('active');
    document.querySelector('.second-point').classList.remove('active');
    document.querySelector('.third-point').classList.add('active');
    document.querySelector('.fourth-point').classList.remove('active');
    document.querySelector('.first-slide').classList.remove('active');
    document.querySelector('.second-slide').classList.remove('active');
    document.querySelector('.third-slide').classList.add('active');
    document.querySelector('.fourth-slide').classList.remove('active');
    document.querySelector('.first-phrase').classList.remove('active');
    document.querySelector('.second-phrase').classList.remove('active');
    document.querySelector('.third-phrase').classList.add('active');
    document.querySelector('.fourth-phrase').classList.remove('active');
};
document.querySelector('.fourth-point').onclick = function() {selectButtonFour()};
function selectButtonFour(){
    document.querySelector('.first-point').classList.remove('active');
    document.querySelector('.second-point').classList.remove('active');
    document.querySelector('.third-point').classList.remove('active');
    document.querySelector('.fourth-point').classList.add('active');
    document.querySelector('.first-slide').classList.remove('active');
    document.querySelector('.second-slide').classList.remove('active');
    document.querySelector('.third-slide').classList.remove('active');
    document.querySelector('.fourth-slide').classList.add('active');
    document.querySelector('.first-phrase').classList.remove('active');
    document.querySelector('.second-phrase').classList.remove('active');
    document.querySelector('.third-phrase').classList.remove('active');
    document.querySelector('.fourth-phrase').classList.add('active');
    
};

