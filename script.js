const container = document.getElementById('container');

const makeGrid = (rows, cols) => {

     while (document.querySelector('button') !== null) {
     document.querySelector('button').remove();
     }
    container.style.setProperty('--grid-row', rows);
    container.style.setProperty('--grid-column', cols);
    container.style.width = '960px';
    container.style.overflow = 'hidden';
    for(let a = 0; a < (rows * cols); a++) {
        let cell = document.createElement('div');
        cell.style.minHeight = '0';
        cell.style.minWidth = '0';
        cell.style.overflow = 'hidden';
        container.appendChild(cell).className = 'grid-items';
        cell.addEventListener('mouseover', ()=> {

            if(cell.style.backgroundColor == ''){
                let color = getRandomColor();
                cell.style.backgroundColor = color;
                cell.style.opacity = '.10';
                return cell.square.backgroundColor;
            }

            if((cell.style.backgroundColor !== '') && (cell.style.opacity <= '.90')) {
                cell.style.opacity = parseFloat(cell.style.opacity) + .10;
                return cell.style.backgroundColor;
            }
        })
    }
    createButton();
}

const createButton = ()=> {
    const button = document.querySelector('#button');
    const resetBtn = document.createElement('button');
    const resetBtn2 = resetBtn.classList.add('resetBtn');
    resetBtn.textContent = 'Reset Grid';
    button.appendChild(resetBtn);

    resetBtn.addEventListener('click', ()=> {
        document.querySelectorAll('.grid-items').forEach(e=> e.remove());
        let userGridInput = prompt('Please enter the number of grid squares perside (Max: 100: ');
        if(userGridInput > 100) {
            alert('ERROR! you entered a grid number greater than 100');
            return;
        }else if (userGridInput < 1) {
            alert('ERROR you entered a grid number less than 1');
            return;
        }
        rows = userGridInput;
        cols = userGridInput;
        makeGrid(rows, cols);
    })
}

const getRandomColor = () => {
    let o = Math.round;
    let r = Math.random;
    let s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

makeGrid(16, 16);

